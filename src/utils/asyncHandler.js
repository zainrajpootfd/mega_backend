// promises method

const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

// try catch method

// const asyncHandler = (fn) => async () => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server Error", success: false });
//   }
// };

export { asyncHandler };
