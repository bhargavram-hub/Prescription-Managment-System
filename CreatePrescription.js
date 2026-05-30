import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreatePrescription() {

  const navigate = useNavigate();

  const [patientName, setPatientName] = useState("");
  const [age, setAge] = useState("");
  const [disease, setDisease] = useState("");
  const [notes, setNotes] = useState("");

  const [medicines, setMedicines] = useState([
    {
      name: "",
      dosage: "",
      timing: ""
    }
  ]);

  const handleMedicineChange = (
    index,
    field,
    value
  ) => {

    const updated = [...medicines];

    updated[index][field] = value;

    setMedicines(updated);
  };

  const addMedicine = () => {

    setMedicines([
      ...medicines,
      {
        name: "",
        dosage: "",
        timing: ""
      }
    ]);
  };

  const removeMedicine = (index) => {

    const updated =
      medicines.filter((_, i) => i !== index);

    setMedicines(updated);
  };

  const savePrescription = () => {

    const prescription = {
      patientName,
      age,
      disease,
      notes,
      medicines,
      doctor: "Dr. User",
      hospital: "Apollo Hospital",
      date: new Date().toLocaleString()
    };

    const existing =
      JSON.parse(localStorage.getItem("prescriptions")) || [];

    existing.push(prescription);

    localStorage.setItem(
      "prescriptions",
      JSON.stringify(existing)
    );

    const notifications =
      JSON.parse(localStorage.getItem("notifications")) || [];

    notifications.push({
      message:
        `New prescription created for ${patientName}`,
      time: new Date().toLocaleTimeString()
    });

    localStorage.setItem(
      "notifications",
      JSON.stringify(notifications)
    );

    alert("Prescription Saved Successfully");

    navigate("/doctor-dashboard");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#dfe9f3,#ffffff)",
        padding: "40px"
      }}
    >

      <div
        className="card border-0 shadow-lg p-5"
        style={{
          borderRadius: "30px"
        }}
      >

        <h1
          className="fw-bold text-center mb-5"
          style={{
            color: "#134e5e"
          }}
        >
          Create Prescription
        </h1>

        <div className="row g-4 mb-4">

          <div className="col-md-6">
            <input
              type="text"
              className="form-control p-3"
              placeholder="Patient Name"
              value={patientName}
              onChange={(e) =>
                setPatientName(e.target.value)
              }
            />
          </div>

          <div className="col-md-3">
            <input
              type="number"
              className="form-control p-3"
              placeholder="Age"
              value={age}
              onChange={(e) =>
                setAge(e.target.value)
              }
            />
          </div>

          <div className="col-md-3">
            <input
              type="text"
              className="form-control p-3"
              placeholder="Disease"
              value={disease}
              onChange={(e) =>
                setDisease(e.target.value)
              }
            />
          </div>

        </div>

        <h4 className="fw-bold mb-4">
          Medicines
        </h4>

        {
          medicines.map((med, index) => (

            <div
              key={index}
              className="row g-3 mb-4"
            >

              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control p-3"
                  placeholder="Medicine Name"
                  value={med.name}
                  onChange={(e) =>
                    handleMedicineChange(
                      index,
                      "name",
                      e.target.value
                    )
                  }
                />
              </div>

              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control p-3"
                  placeholder="Dosage"
                  value={med.dosage}
                  onChange={(e) =>
                    handleMedicineChange(
                      index,
                      "dosage",
                      e.target.value
                    )
                  }
                />
              </div>

              <div className="col-md-3">
                <select
                  className="form-select p-3"
                  value={med.timing}
                  onChange={(e) =>
                    handleMedicineChange(
                      index,
                      "timing",
                      e.target.value
                    )
                  }
                >
                  <option value="">
                    Select Timing
                  </option>

                  <option>
                    Morning
                  </option>

                  <option>
                    Afternoon
                  </option>

                  <option>
                    Night
                  </option>

                </select>
              </div>

              <div className="col-md-2">
                <button
                  className="btn btn-danger w-100 p-3"
                  onClick={() =>
                    removeMedicine(index)
                  }
                >
                  Remove
                </button>
              </div>

            </div>
          ))
        }

        <button
          className="btn btn-primary mb-4"
          onClick={addMedicine}
        >
          + Add Medicine
        </button>

        <textarea
          rows="5"
          className="form-control p-3 mb-4"
          placeholder="Doctor Notes"
          value={notes}
          onChange={(e) =>
            setNotes(e.target.value)
          }
        ></textarea>

        <button
          className="btn btn-success p-3 fw-bold"
          onClick={savePrescription}
        >
          Save Prescription
        </button>

      </div>

    </div>
  );
}

export default CreatePrescription;
