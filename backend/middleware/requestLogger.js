export const requestLogger = (req, res, next) => {
  const start = process.hrtime();
  
  res.on('finish', () => {
    const diff = process.hrtime(start);
    const timeInMs = ((diff[0] * 1e9 + diff[1]) / 1e6).toFixed(1);
    
    let color = "\x1b[32m"; // Green for 2xx
    if (res.statusCode >= 400 && res.statusCode < 500) {
      color = "\x1b[33m"; // Yellow for 4xx
    } else if (res.statusCode >= 500) {
      color = "\x1b[31m"; // Red for 5xx
    }
    
    console.log(
      `[${new Date().toISOString()}] \x1b[36m${req.method}\x1b[0m ${req.originalUrl} - ${color}${res.statusCode}\x1b[0m in \x1b[35m${timeInMs}ms\x1b[0m`
    );
  });
  
  next();
};
