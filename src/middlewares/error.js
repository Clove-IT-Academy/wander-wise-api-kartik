const errorMiddleware = (err, _, res, __) => {
  const statusCode = err.statusCode ?? res.statusCode ?? 500;
  res.status(statusCode).json({
    success: false,
    message: err.message || "Something went wrong",
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
    // ...(process.env.NODE_ENV !== "production" && { stack: err.stack }),
    error: err.errors
      ? Object.values(err.errors).map((error) => error.message)
      : null,
  });
};

export default errorMiddleware;
