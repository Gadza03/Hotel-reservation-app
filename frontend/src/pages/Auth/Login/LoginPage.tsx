import { useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowBack, InputField } from "../../../components";
import type { Login } from "../../../types";
import c from "../auth.module.css";
import { Button } from "@mui/material";
import { loginUser } from "../../../services/Auth/authService";
import { useNavigate } from "react-router";
import { paths } from "../../../router/paths";
import { useAuth } from "../../../contexts/AuthContext/useAuth";

type Errors = Partial<Login>;

export const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<Login>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const newErrors: Errors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        if (localStorage.getItem("token")) {
          localStorage.removeItem("token");
        }
        const userData = await loginUser(formData);
        console.log(userData);

        if (userData.token) {
          login(userData.token);

          navigate(paths.hotels);
        }
      } catch (error) {
        setErrors((prev) => ({
          ...prev,
          email: "Invalid credentials, try again",
        }));
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`container ${c.form}`}>
      <ArrowBack />
      <h1>Log in</h1>
      <div className={c.inputs}>
        <InputField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          required
        />
      </div>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ padding: "12px 14px", borderRadius: "12px" }}
      >
        Log In
      </Button>
    </form>
  );
};
