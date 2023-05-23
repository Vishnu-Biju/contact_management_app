const {constants } = require("../constants");
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case 400:
      res.json({
        validation: "validation failed",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case 404:
      res.json({
        tittle: "NOT_FOUND",
        message: err.message,
        stackTrace: err.stack,
      });
    
    case 401:
      res.json({
        tittle: "UNAUTHORIZED",
        message: err.message,
        stackTrace: err.stack,
      });
     
    case 402:
      res.json({
        tittle: "FORBIDEN",
        message: err.message,
        stackTrace: err.stack,
      });
     
    case 500:
      res.json({
        tittle: "SERVER_ERROR",
        message: err.message,
        stackTrace: err.stack,
      });
     

    default:
      console.log("No error All good!")
      break;
  }
};
module.exports = errorHandler;
