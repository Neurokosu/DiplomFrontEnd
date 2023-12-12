// Login.tsx
import styled from "@emotion/styled";
import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const StyledForm = styled("form")`
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

interface FormInput {
  username: string;
  password: string;
}

export const Login: React.FC = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    const isValidCredentials =
      data.username === "yourValidUsername" &&
      data.password === "yourValidPassword";

    // if (isValidCredentials) {
    navigate("/app");
    // } else {
    //   console.log("Invalid credentials");
    // }
  };

  return (
    <Box
      minHeight={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Box width={"100%"}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            {...register("username", {
              required: "Username is required",
              pattern: {
                value: /^[a-zA-Z0-9]+$/,
                message: "Username can only contain letters and numbers",
              },
            })}
            error={!!errors.username}
            helperText={errors.username?.message}
          />
        </Box>
        <Box width={"100%"}>
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
              maxLength: {
                value: 20,
                message: "Password must be less than 20 characters long",
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()_-]+$/,
                message:
                  "Password must contain at least one lowercase letter, one uppercase letter, one digit, and may contain some special characters",
              },
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        </Box>
        <Box width={"100%"}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </Box>
      </StyledForm>
    </Box>
  );
};
