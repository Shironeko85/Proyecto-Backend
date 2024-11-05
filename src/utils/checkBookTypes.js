const checkBookTypes = (req, res, next) => {
  const { name, price, description } = req.body;

  if (
    typeof name !== "string" ||
    typeof description !== "string" ||
    typeof price !== "number"
  ) {
    return res.status(400).json({ error: "Invalid data types" });
  }
  next();
};

module.exports = checkBookTypes;
