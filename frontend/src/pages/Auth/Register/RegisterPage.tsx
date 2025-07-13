import { useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowBack, InputField } from "../../../components";
import c from "../auth.module.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import { paths } from "../../../router/paths";
import toast from "react-hot-toast";
import { registerUser } from "../../../services/Auth/authService";
import type { RegisterType } from "../../../types";
import { useAuth } from "../../../contexts/AuthContext/useAuth";

type Errors = Partial<RegisterType>;

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<RegisterType>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Errors>({});

  const { login } = useAuth();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const newErrors: Errors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const userData = await registerUser(formData);
        if (userData.token) {
          login(userData.token);
          toast.success("Account created!");
          navigate(paths.hotels);
        }
      } catch (error: any) {
        toast.error(
          error?.response?.data?.message || "Registration failed. Try again."
        );
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`container ${c.form}`}>
      <ArrowBack />
      <h1>Register</h1>
      <div className={c.inputs}>
        <InputField
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          error={errors.firstName}
          required
        />
        <InputField
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          error={errors.lastName}
          required
        />
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
        Register
      </Button>
    </form>
  );
};
