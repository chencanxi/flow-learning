const errorHandler = (err, _req, res, next) => {
  const statusCode = err.statusCode || 500;

  return res.status(statusCode).json({
    code: statusCode,
    message: statusCode !== 500 ? err.message : 'Internal Server Error'
  })
}

export default {
  errorHandler,
}