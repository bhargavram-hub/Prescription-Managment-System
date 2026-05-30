import React from "react";

function PatientNotifications() {

  const notifications =
    JSON.parse(
      localStorage.getItem("notifications")
    ) || [];

  return (

    <div className="container py-5">

      <h1>
        Notifications
      </h1>

      {
        notifications.map((n,index)=>(

          <div
            key={index}
            className="alert alert-primary"
          >
            {n.message}
          </div>

        ))
      }

    </div>
  );
}

export default PatientNotifications;