"use client";
import { theme } from "@/components/theme";
import { Paper, ThemeProvider, Button, Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    localStorage.setItem("formData", JSON.stringify(data));
    console.log("Form data stored:", data);
    alert("Form submitted and saved locally!");
    router.push("/login");
  };
  return (
    <ThemeProvider theme={theme}>
      <div style={{ height: "100vh", width: "100%" }}>
        <Paper
          sx={{
            margin: "auto",
            padding: 6,
            width: "30%",
          }}
        >
          <h2
            className="label"
            style={{
              fontSize: 32,
              fontWeight: 900,
              color: theme.palette.secondary.main,
              textAlign: "center",
              paddingBottom: 18,
            }}
          >
            Account Information
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} style={{ padding: 8 }}>
            <div
              className="form-container"
              style={{ display: "flex", flexDirection: "column", gap: 10 }}
            >
              <input
                style={{ padding: 12 }}
                placeholder="First name"
                {...register("firstname", { required: "Please enter Name" })}
              />
              {errors.firstname && (
                <div style={{ color: "red" }}>{errors.firstname.message}</div>
              )}

              <input
                style={{ padding: 12 }}
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
              />

              <input
                style={{ padding: 12 }}
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
              />

              <button
                type="submit"
                style={{
                  padding: 12,
                  backgroundColor: isHovered
                    ? theme.palette.primary.main
                    : theme.palette.secondary.main,
                  color: "white",
                  fontWeight: 700,
                  fontSize: 16,
                  cursor: "pointer",
                  boxShadow: "2px 2px 4px 1px grey",
                  border: "none",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Register
              </button>
            </div>
          </form>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: 12,
            }}
          >
            <Typography>
              Already Registered? Login by .
              <a
                href="/login"
                style={{ color: theme.palette.secondary.main, fontWeight: 600 }}
              >
                CLICK HERE
              </a>
            </Typography>{" "}
          </div>
        </Paper>
      </div>
    </ThemeProvider>
  );
};

export default RegisterForm;
