import React from "react";

function HealthAnalytics() {

  const taken =
    JSON.parse(
      localStorage.getItem("takenMeds")
    ) || [];

  return (

    <div className="container py-5">

      <h1>
        Health Analytics
      </h1>

      <div className="card p-5 shadow">

        <h3>
          Medicines Taken
        </h3>

        <h1>
          {taken.length}
        </h1>

      </div>

    </div>
  );
}

export default HealthAnalytics;