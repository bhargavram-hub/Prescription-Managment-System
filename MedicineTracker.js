import React, { useState } from "react";

function MedicineTracker() {

  const prescriptions =
    JSON.parse(localStorage.getItem("prescriptions")) || [];

  const [takenMeds,setTakenMeds] =
    useState(
      JSON.parse(localStorage.getItem("takenMeds")) || []
    );

  const markTaken = (medicine) => {

    const updated = [...takenMeds, medicine];

    setTakenMeds(updated);

    localStorage.setItem(
      "takenMeds",
      JSON.stringify(updated)
    );
  };

  return (

    <div className="container py-5">

      <h1 className="mb-4">
        Medicine Tracker
      </h1>

      {
        prescriptions.flatMap(
          p => p.medicines
        ).map((med,index)=>(

          <div
            key={index}
            className="card p-3 mb-3"
          >

            <h5>{med.name}</h5>

            <p>{med.dosage}</p>

            <p>{med.timing}</p>

            <button
              className="btn btn-success"
              onClick={() => markTaken(med.name)}
            >
              Mark Taken
            </button>

          </div>

        ))
      }

    </div>
  );
}

export default MedicineTracker;