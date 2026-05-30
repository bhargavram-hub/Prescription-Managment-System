import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PatientLogin() {

  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = () => {

    const users =
      JSON.parse(localStorage.getItem("patients")) || [];

    const validUser = users.find(
      (user) =>
        (user.email === form.email ||
          user.mobile === form.email) &&
        user.password === form.password
    );

   if (validUser) {

  localStorage.setItem(
    "patientLoggedIn",
    "true"
  );

  alert("Login successful");

  navigate("/patient-dashboard");
}
     else {
      alert("Invalid credentials");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100 position-relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg,#141e30,#243b55)"
      }}
    >

      {/* Floating Background Circles */}
      <div
        style={{
          position: "absolute",
          width: "320px",
          height: "320px",
          background: "rgba(255,255,255,0.08)",
          borderRadius: "50%",
          top: "-100px",
          left: "-100px",
          animation: "float 6s ease-in-out infinite"
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          width: "220px",
          height: "220px",
          background: "rgba(255,255,255,0.05)",
          borderRadius: "50%",
          bottom: "-60px",
          right: "-60px",
          animation: "float 8s ease-in-out infinite"
        }}
      ></div>

      {/* Main Container */}
      <div className="text-center position-relative">

        {/* Main Heading */}
        <h1
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: "40px",
            letterSpacing: "3px",
            marginBottom: "25px",
            textShadow: "0 0 15px rgba(255,255,255,0.5)",
            animation: "glow 2s ease-in-out infinite alternate"
          }}
        >
          PRESCRIPTION MANAGEMENT SYSTEM
        </h1>

        {/* Login Card */}
        <div
          className="card p-4 shadow-lg border-0"
          style={{
            width: "420px",
            borderRadius: "25px",
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(15px)",
            WebkitBackdropFilter: "blur(15px)",
            color: "white",
            animation: "slideUp 1s ease"
          }}
        >

          {/* Navigation Buttons */}
          <div className="d-flex justify-content-around mb-4">

            <button className="btn btn-light fw-bold px-4">
              Patient Login
            </button>

            <a href="/doctor">
              <button className="btn btn-outline-light fw-bold px-4">
                Doctor Login
              </button>
            </a>

          </div>

          <h2 className="mb-4 fw-bold">
            Welcome Patient
          </h2>

          {/* Email or Mobile */}
          <input
            type="text"
            name="email"
            placeholder="Email or Mobile"
            className="form-control mb-3"
            onChange={handleChange}
            style={{
              padding: "14px",
              borderRadius: "12px"
            }}
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-control mb-4"
            onChange={handleChange}
            style={{
              padding: "14px",
              borderRadius: "12px"
            }}
          />

          {/* Login Button */}
          <button
            className="btn btn-info text-white fw-bold w-100 py-3"
            style={{
              borderRadius: "12px",
              fontSize: "18px"
            }}
            onClick={handleLogin}
          >
            Login
          </button>

          {/* Create Account */}
          <p className="mt-4">
            Don't have an account?
            <a
              href="/register"
              style={{
                color: "#00d9ff",
                textDecoration: "none",
                fontWeight: "bold"
              }}
            >
              {" "}Create one
            </a>
          </p>

        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
            100% {
              transform: translateY(0px);
            }
          }

          @keyframes glow {
            from {
              text-shadow: 0 0 10px rgba(255,255,255,0.5);
            }
            to {
              text-shadow: 0 0 25px rgba(255,255,255,1);
            }
          }

          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(50px);
            }
            to {
              opacity: 1;
              transform: translateY(0px);
            }
          }
        `}
      </style>

    </div>
  );
}

export default PatientLogin;
