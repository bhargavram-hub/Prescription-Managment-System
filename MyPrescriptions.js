import React from "react";

function MyPrescriptions() {

  const prescriptions =
    JSON.parse(localStorage.getItem("prescriptions")) || [];

  return (
    <div className="container py-5">

      <h1 className="mb-4">
        My Prescriptions
      </h1>

      {
        prescriptions.map((p,index)=>(

          <div
            key={index}
            className="card p-4 mb-4 shadow"
          >

            <h4>
              {p.patientName}
            </h4>

            <p>
              Disease: {p.disease}
            </p>

            <p>
              Doctor: {p.doctor}
            </p>

            <p>
              Hospital: {p.hospital}
            </p>

            <p>
              Date: {p.date}
            </p>

            <h5>Medicines</h5>

            <ul>

              {
                p.medicines.map((m,i)=>(

                  <li key={i}>
                    {m.name} - {m.dosage}
                  </li>

                ))
              }

            </ul>

            <div className="alert alert-info">
              {p.notes}
            </div>

          </div>

        ))
      }

    </div>
  );
}

export default MyPrescriptions;