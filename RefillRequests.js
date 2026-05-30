import React from "react";

function RefillRequests() {

  const requestRefill = () => {

    const requests =
      JSON.parse(
        localStorage.getItem("refillRequests")
      ) || [];

    requests.push({
      date:new Date().toLocaleString()
    });

    localStorage.setItem(
      "refillRequests",
      JSON.stringify(requests)
    );

    alert("Refill Request Sent");
  };

  return (

    <div className="container py-5">

      <h1>
        Refill Requests
      </h1>

      <button
        className="btn btn-success"
        onClick={requestRefill}
      >
        Request Refill
      </button>

    </div>
  );
}

export default RefillRequests;