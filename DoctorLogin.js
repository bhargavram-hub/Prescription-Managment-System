import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DoctorLogin() {

  const navigate = useNavigate();
  const [form, setForm] = useState({
    doctorId: "",
    password: "",
    hospital: ""
  });

  const hospitals = [
    "Apollo - 10231",
    "Care - 10452",
    "Yashoda - 10784",
    "KIMS - 10911",
    "AIG - 11045",
    "Rainbow - 11234",
    "Medicover - 11367",
    "Sunshine - 11590",
    "Continental - 11882",
    "Global - 12011",
    "Omega - 12245",
    "MaxCure - 12489",
    "Star - 12678",
    "NIMS - 12890",
    "Fortis - 13021",
    "AIIMS - 13256",
    "Lotus - 13467",
    "CityCare - 13678",
    "Prime - 13890",
    "LifeLine - 14012"
  ];

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = () => {

    const doctors =
      JSON.parse(localStorage.getItem("doctors")) || [];

    const validDoctor = doctors.find(
      (doc) =>
        doc.doctorId === form.doctorId &&
        doc.password === form.password &&
        doc.hospital === form.hospital
    );

   if (validDoctor) {

  localStorage.setItem(
    "doctorLoggedIn",
    "true"
  );

  alert("Doctor login successful");

  navigate("/doctor-dashboard");
}    
 else {
      alert("Invalid credentials");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100 position-relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg,#134e5e,#71b280)"
      }}
    >

      {/* White Medical Plus */}
      <div
        style={{
          position: "absolute",
          width: "350px",
          height: "70px",
          background: "rgba(255,255,255,0.12)",
          borderRadius: "20px"
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          width: "70px",
          height: "350px",
          background: "rgba(255,255,255,0.12)",
          borderRadius: "20px"
        }}
      ></div>

      {/* Floating Circle */}
      <div
        style={{
          position: "absolute",
          width: "250px",
          height: "250px",
          background: "rgba(255,255,255,0.08)",
          borderRadius: "50%",
          top: "-50px",
          right: "-50px",
          animation: "float 6s ease-in-out infinite"
        }}
      ></div>

      {/* Main Container */}
      <div className="text-center position-relative">

        {/* Heading */}
        <h1
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: "38px",
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
            width: "430px",
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

            <a href="/">
              <button className="btn btn-outline-light fw-bold px-4">
                Patient Login
              </button>
            </a>

            <button className="btn btn-light fw-bold px-4">
              Doctor Login
            </button>

          </div>

          <h2 className="mb-4 fw-bold">
            Welcome Doctor
          </h2>

          {/* Doctor ID */}
          <input
            type="text"
            name="doctorId"
            placeholder="Doctor ID"
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
            className="form-control mb-3"
            onChange={handleChange}
            style={{
              padding: "14px",
              borderRadius: "12px"
            }}
          />

          {/* Hospital Dropdown */}
          <select
            name="hospital"
            className="form-control mb-4"
            onChange={handleChange}
            style={{
              padding: "14px",
              borderRadius: "12px"
            }}
          >
            <option value="">
              Select Hospital ID
            </option>

            {hospitals.map((hospital, index) => (
              <option key={index} value={hospital}>
                {hospital}
              </option>
            ))}

          </select>

          {/* Login Button */}
          <button
            className="btn btn-success fw-bold w-100 py-3"
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
              href="/doctor-register"
              style={{
                color: "#d7ff00",
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

export default DoctorLogin;

