import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DoctorRegister() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    doctorId: "",
    password: "",
    confirmPassword: "",
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

  const handleRegister = () => {

    if (
      !form.name ||
      !form.doctorId ||
      !form.password ||
      !form.hospital
    ) {
      alert("Please fill all fields");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const oldDoctors =
      JSON.parse(localStorage.getItem("doctors")) || [];

    const existingDoctor = oldDoctors.find(
      (doc) => doc.doctorId === form.doctorId
    );

    if (existingDoctor) {
      alert("Doctor already exists");
      return;
    }

    oldDoctors.push(form);

    localStorage.setItem(
      "doctors",
      JSON.stringify(oldDoctors)
    );

    alert("Doctor account created!");

    navigate("/doctor");
  };

  return (
    <div
  className="d-flex justify-content-center align-items-center vh-100 position-relative overflow-hidden"
  style={{ backgroundColor: "#198754" }}
>
   {/* Medical Plus Background */}
<div
  style={{
    position: "absolute",
    width: "300px",
    height: "60px",
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: "20px"
  }}
></div>

<div
  style={{
    position: "absolute",
    width: "60px",
    height: "300px",
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: "20px"
  }}
></div>

      <div
        className="card p-4 shadow-lg"
        style={{ width: "420px", borderRadius: "15px" }}
      >

        <h3 className="text-center mb-4">
          Doctor Register
        </h3>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <input
          type="text"
          name="doctorId"
          placeholder="Doctor ID"
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

        <select
          name="hospital"
          className="form-control mb-3"
          onChange={handleChange}
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

        <button
          className="btn btn-success w-100"
          onClick={handleRegister}
        >
          Create Doctor Account
        </button>

      </div>
    </div>
  );
}

export default DoctorRegister;