import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function PatientsPage() {

  const location = useLocation();
  const query =
  new URLSearchParams(location.search);

const searchedName =
  query.get("search");

  const prescriptions =
    JSON.parse(localStorage.getItem("prescriptions")) || [];

  const [selectedPatient, setSelectedPatient] =
    useState(null);

   useEffect(() => {

  if (searchedName) {

    const patient =
      prescriptions.find(
        (p) =>
          p.patientName
            .toLowerCase()
            .includes(
              searchedName.toLowerCase()
            )
      );

    if (patient) {
      setSelectedPatient(patient);
    }
  }

}, [searchedName]);

  return (
    <div
      className="container-fluid py-5"
      style={{
        background:
          "linear-gradient(135deg,#eef2f3,#dfe9f3)",
        minHeight: "100vh"
      }}
    >

      <h1
        className="fw-bold text-center mb-5"
        style={{ color: "#134e5e" }}
      >
        Patient Management Portal
      </h1>

      <div className="row">

        {/* LEFT PANEL */}
        <div className="col-md-4">

          <div
            className="card border-0 shadow-lg p-4"
            style={{ borderRadius: "25px" }}
          >

            <h4 className="fw-bold mb-4">
              Patients
              <input
               type="text"
               className="form-control mb-4"
               placeholder="Search Patient"
            />
            </h4>

            {
              prescriptions.map((patient, index) => (

                <div
                  key={index}
                  className="card p-3 mb-3 shadow-sm"
                  style={{
                    cursor: "pointer",
                    borderRadius: "15px"
                  }}
                  onClick={() =>
                    setSelectedPatient(patient)
                  }
                >

                  <h5>
                    {patient.patientName}
                  </h5>

                  <small>
                    {patient.disease}
                  </small>

                </div>
              ))
            }

          </div>

        </div>

        {/* RIGHT PANEL */}
        <div className="col-md-8">

          {
            selectedPatient ? (

              <div
                className="card border-0 shadow-lg p-5"
                style={{ borderRadius: "25px" }}
              >

                <h2 className="fw-bold mb-4">
                  {selectedPatient.patientName}
                </h2>

                <div className="row mb-4">

                  <div className="col-md-4">
                    <strong>Age:</strong><br />
                    {selectedPatient.age}
                  </div>

                  <div className="col-md-4">
                    <strong>Disease:</strong><br />
                    {selectedPatient.disease}
                  </div>

                  <div className="col-md-4">
                    <strong>Doctor:</strong><br />
                    {selectedPatient.doctor}
                  </div>

                </div>

                <hr />

                <h4 className="fw-bold mt-4 mb-3">
                  Medicines
                </h4>

                <table className="table table-hover">

                  <thead>
                    <tr>
                      <th>Medicine</th>
                      <th>Dosage</th>
                      <th>Timing</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>

                    {
                      selectedPatient.medicines.map(
                        (med, index) => (

                          <tr key={index}>

                            <td>
                              {med.name}
                            </td>

                            <td>
                              {med.dosage}
                            </td>

                            <td>
                              {med.timing}
                            </td>

                            <td>

                              <span className="badge bg-success">
                                Taken
                              </span>

                            </td>

                          </tr>
                        )
                      )
                    }

                  </tbody>

                </table>

                <hr />

                <h4 className="fw-bold mt-4">
                  Doctor Notes
                </h4>

                <div
                  className="alert alert-info mt-3"
                >
                  {
                    selectedPatient.notes ||
                    "No Notes Added"
                  }
                </div>

                <hr />

                <h4 className="fw-bold mt-4">
                  Prescription
                </h4>

                <div
                  className="card p-4 bg-light mt-3"
                >

                  <p>
                    <strong>Patient:</strong>
                    {" "}
                    {selectedPatient.patientName}
                  </p>

                  <p>
                    <strong>Disease:</strong>
                    {" "}
                    {selectedPatient.disease}
                  </p>

                  <p>
                    <strong>Hospital:</strong>
                    {" "}
                    {selectedPatient.hospital}
                  </p>

                  <p>
                    <strong>Date:</strong>
                    {" "}
                    {selectedPatient.date}
                  </p>

                </div>

              </div>

            ) : (

              <div
                className="card border-0 shadow-lg p-5 text-center"
                style={{
                  borderRadius: "25px"
                }}
              >

                <h3>
                  Select a Patient
                </h3>

              </div>

            )
          }

        </div>

      </div>

    </div>
  );
}

export default PatientsPage;