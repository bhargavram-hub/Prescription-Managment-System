import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PatientRegister() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {

    if (
      !form.name ||
      !form.email ||
      !form.mobile ||
      !form.password
    ) {
      alert("Please fill all fields");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Get old users
    const oldUsers =
      JSON.parse(localStorage.getItem("patients")) || [];

    // Check existing email
    const existingUser = oldUsers.find(
      (user) => user.email === form.email
    );

    if (existingUser) {
      alert("Account already exists");
      return;
    }

    // Save new user
    oldUsers.push(form);

    localStorage.setItem(
      "patients",
      JSON.stringify(oldUsers)
    );

    alert("Account created successfully!");

    navigate("/");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-primary">

      <div
        className="card p-4 shadow-lg"
        style={{ width: "400px", borderRadius: "15px" }}
      >
        <h2 className="text-center mb-4">
          Create Account
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <button
          className="btn btn-success w-100"
          onClick={handleRegister}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default PatientRegister;