module.exports = function (handler) {
    return async (req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        try {
            await handler(req, res);
        } catch (err) {
            res.json({ message: err })
        }
    }
}