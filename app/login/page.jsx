"use client";
import { theme } from "@/components/theme";
import { Paper, ThemeProvider } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
const LoginForm = () => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Function to simulate login by checking stored data
  const checkLogin = (loginData) => {
    // Retrieve the stored form data from localStorage
    const storedData = JSON.parse(localStorage.getItem("formData"));
    console.log(storedData);
    console.log(loginData);

    if (storedData) {
      // Check if login data matches the stored data
      if (
        storedData.email === loginData.loginEmail &&
        storedData.password === loginData.loginPassword
      ) {
        alert("Login successful!");
        console.log("Login successful!");
        router.push("/dashboard");
      } else {
        alert("Login failed. Incorrect email or password.");
        console.log("Login failed. Incorrect email or password.");
      }
    } else {
      alert("No account found. Please register first.");
    }
  };

  // Function to handle form submission for login
  const handleLogin = (loginData) => {
    checkLogin(loginData);
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper sx={{ width: "30%", m: "auto", p: 6 }}>
        <div
          style={{
            margin: "auto",
            display: "grid",
            width: "100%",
            textAlign: "center",
            gap: 16,
          }}
        >
          <h2
            style={{
              fontSize: 32,
              fontWeight: 900,
              color: theme.palette.secondary.main,
            }}
          >
            Login
          </h2>
          <form onSubmit={handleSubmit(handleLogin)} style={{ padding: 12 }}>
            <div
              className="form-container"
              style={{ display: "flex", flexDirection: "column", gap: 12 }}
            >
              <input
                style={{ padding: 18 }}
                type="email"
                placeholder="Email"
                {...register("loginEmail", { required: true })}
              />
              {errors.loginEmail && (
                <div style={{ color: "red" }}>Email is required</div>
              )}

              <input
                style={{ padding: 12 }}
                type="password"
                placeholder="Password"
                {...register("loginPassword", { required: true })}
              />
              {errors.loginPassword && (
                <div style={{ color: "red" }}>Password is required</div>
              )}

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
                Login
              </button>
            </div>
          </form>
        </div>
      </Paper>
    </ThemeProvider>
  );
};

export default LoginForm;
