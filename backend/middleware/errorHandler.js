export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(`[ERROR] [${req.method}] ${req.url} :`, err.stack || err.message || err);

  res.status(statusCode).json({
    success: false,
    status: statusCode,
    message: err.message || "Internal Server Error",
    stack: process.env.NODE_ENV === 'production' ? undefined : err.stack
  });
};
