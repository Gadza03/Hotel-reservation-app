import * as authService from "../services/authService.js";

export const register = async (req, res) => {
  const result = await authService.registerUser(req.body);

  if (result.error) {
    return res.status(result.status).json({ message: result.error });
  }

  return res.status(result.status).json(result.data);
};

export const login = async (req, res) => {
  const result = await authService.loginUser(req.body.email, req.body.password);

  if (result.error) {
    return res.status(result.status).json({ message: result.error });
  }

  return res.status(result.status).json(result.data);
};
