import React from "react";

function MyDoctors() {

  const prescriptions =
    JSON.parse(localStorage.getItem("prescriptions")) || [];

  return (
    <div className="container py-5">

      <h1 className="mb-4">
        My Doctors
      </h1>

      {
        prescriptions.map((p,index)=>(

          <div
            key={index}
            className="card p-3 mb-3 shadow"
          >

            <h5>
              {p.doctor}
            </h5>

            <p>
              {p.hospital}
            </p>

          </div>

        ))
      }

    </div>
  );
}

export default MyDoctors;