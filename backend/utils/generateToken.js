import jwt from "jsonwebtoken";

export const generateToken = (user) => {
  console.log(user.firstName);
  const payload = {
    _id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    isAdmin: user.isAdmin,
  };
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "30d" });
};
