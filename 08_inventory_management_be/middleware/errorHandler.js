const {logEvents} = require("./logger");

const errorHandler = (err, req, res, next) => {
    logEvents(`${err.name}: ${err.message}\t${req.url}\t${req.headers.origin}`, "errLog.log");
    console.log(err.stack);

    const status = err.statusCode ? err.statusCode : 500; // server error

    res.status(status).json({message: err.message, isError: true});
}

module.exports = errorHandler;