import { User } from "../models/index.js";
import { generateToken } from "../utils/generateToken.js";
import bcrypt from "bcryptjs";

export const registerUser = async (userData) => {
  try {
    const userExists = await User.findOne({ email: userData.email });
    if (userExists) {
      throw new Error("User with this email already exists");
    }

    const user = new User(userData);
    await user.save();

    const token = generateToken(user);

    return {
      status: 201,
      data: {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        isAdmin: user.isAdmin,
        token,
      },
    };
  } catch (error) {
    return { status: 400, error: error.message };
  }
};

export const loginUser = async (email, password) => {
  try {
    const user = await User.findOne({ email });
    if (!user) throw new Error("Invalid email or password");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Invalid email or password");

    const token = generateToken(user);

    return {
      status: 200,
      data: {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        isAdmin: user.isAdmin,
        token,
      },
    };
  } catch (error) {
    return { status: 401, error: error.message };
  }
};
