const errorHandler = (err, _req, res, next) => {
  const statusCode = err.statusCode || 500;

  return res.statusCode(statusCode).json({
    code: statusCode,
    message: err.message
  })
}