const mongoose = require("mongoose");

//create a expam schema
const examSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  status: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    require: true,
  }
  // data2: {
  //   type: Number,
  //   required: true,
  // },
  // data3: {
  //   type: Number,
  //   required: true,
  // },  
});

module.exports = Exams = mongoose.model("exam", examSchema);
