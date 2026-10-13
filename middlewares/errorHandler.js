export const errorHandler = (err, _req, res, next) => {
  console.log('err code 是:', err.statusCode);
  const statusCode = Number.isInteger(err.statusCode) &&
    err.statusCode >= 400 &&
    err.statusCode <= 599
    ? err.statusCode
    : 500;

  if (res.headersSent) {
    return next(err);
  }

  return res.status(statusCode).json({
    code: statusCode,
    message: statusCode < 500 ? err.message : 'Internal Server Error'
  })
}