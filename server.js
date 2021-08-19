const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require('cors');

/**
 * impot routes
 */
const userRoutes = require("./routes/users/user");
const examsRouter = require("./routes/exams/exams");

//init the app
const app = express();
app.use(express.json());
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
app.use(cors({
  origin: '*'
}));

app.use(morgan("dev"));
require("dotenv").config();

const db = require("./config/keys").mongoURI;
mongoose.connect(db, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open",() =>{
    console.log("mongodb connection success!");
})

//routes
app.use("/exams", examsRouter);
app.use("/users", userRoutes);

const port = process.env.PORT || 8070;

app.listen(port, () => console.log(`Connected Successfully Server ${port}`));
