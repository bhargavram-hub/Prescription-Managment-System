import { useNavigate } from "react-router-dom";
import { useState } from "react";

function DoctorDashboard() {

  const navigate = useNavigate();

  const [searchPatient, setSearchPatient] = useState("");

  const prescriptions =
    JSON.parse(localStorage.getItem("prescriptions")) || [];

  const notifications =
    JSON.parse(localStorage.getItem("notifications")) || [];

  const handleLogout = () => {
    navigate("/doctor");
  };

  const handleSearch = () => {

  if (!searchPatient.trim()) {
    alert("Please enter patient name");
    return;
  }

  navigate(
    "/patients?search=" + searchPatient
  );
};
  return (
    <div
      className="d-flex"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#eef2f3,#dfe9f3)",
        overflow: "hidden"
      }}
    >

      {/* SIDEBAR */}
      <div
        style={{
          width: "280px",
          background:
            "linear-gradient(180deg,#134e5e,#71b280)",
          color: "white",
          padding: "30px",
          boxShadow:
            "5px 0 20px rgba(0,0,0,0.1)"
        }}
      >

        <div className="text-center mb-5">

          <div
            style={{
              width: "90px",
              height: "90px",
              borderRadius: "50%",
              background:
                "rgba(255,255,255,0.15)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
              fontSize: "40px",
              marginBottom: "15px",
              animation: "pulse 3s infinite"
            }}
          >
            🏥
          </div>

          <h2 className="fw-bold">
            PMS
          </h2>

          <p style={{ color: "#d8f3dc" }}>
            Doctor Portal
          </p>

        </div>

        <ul className="list-unstyled">

          <li className="menu-item">
            🏠 Dashboard
          </li>

          <li
            className="menu-item"
            onClick={() =>
              navigate("/create-prescription")
            }
          >
            📝 Create Prescription
          </li>

          <li
            className="menu-item"
            onClick={() => navigate("/patients")}
          >
            👨‍⚕️ Patients
          </li>

          <li
            className="menu-item"
            onClick={() =>
              navigate("/drug-database")
            }
          >
            💊 Drug Database
          </li>

          <li
            className="menu-item"
            onClick={() =>
              navigate("/notifications")
            }
          >
            🔔 Notifications
          </li>

          <li className="menu-item">
            ⚙ Settings
          </li>

          <li
            className="menu-item text-danger"
            onClick={handleLogout}
            style={{ cursor: "pointer" }}
          >
            🚪 Logout
          </li>

        </ul>

      </div>

      {/* MAIN */}
      <div className="flex-grow-1 p-4">

        {/* TOPBAR */}
        <div
          className="d-flex justify-content-between align-items-center p-4 mb-4"
          style={{
            background:
              "rgba(255,255,255,0.7)",
            backdropFilter: "blur(15px)",
            borderRadius: "25px",
            boxShadow:
              "0 10px 25px rgba(0,0,0,0.08)"
          }}
        >

          <div>

            <h2
              className="fw-bold mb-1"
              style={{ color: "#134e5e" }}
            >
              Welcome Doctor 👋
            </h2>

            <p className="text-muted mb-0">
              Manage prescriptions and
              patients efficiently.
            </p>

          </div>

          <div className="d-flex align-items-center gap-4">

            <div
              style={{
                fontSize: "28px",
                cursor: "pointer",
                animation: "ring 2s infinite"
              }}
              onClick={() =>
                navigate("/notifications")
              }
            >
              🔔
            </div>

            <div className="d-flex align-items-center gap-3">

              <div
                style={{
                  width: "55px",
                  height: "55px",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg,#36d1dc,#5b86e5)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "22px"
                }}
              >
                D
              </div>

              <div>
                <h6 className="mb-0 fw-bold">
                  Dr. User
                </h6>

                <small className="text-muted">
                  Cardiologist
                </small>
              </div>

            </div>

          </div>

        </div>

        {/* CARDS */}

        <div className="row g-4 mb-4">

          <div className="col-md-3">
            <div
              className="dashboard-card"
              onClick={() =>
                navigate("/patients")
              }
              style={{ cursor: "pointer" }}
            >

              <div className="icon-circle bg-primary">
                👨‍⚕️
              </div>

              <h5 className="mt-3">
                Total Patients
              </h5>

              <h1 className="fw-bold text-primary">
                {prescriptions.length}
              </h1>

              <small>
                Click to View
              </small>

            </div>
          </div>

          <div className="col-md-3">
            <div className="dashboard-card">

              <div className="icon-circle bg-success">
                📝
              </div>

              <h5 className="mt-3">
                Prescriptions
              </h5>

              <h1 className="fw-bold text-success">
                {prescriptions.length}
              </h1>

            </div>
          </div>

          <div className="col-md-3">
            <div className="dashboard-card">

              <div className="icon-circle bg-warning">
                🔄
              </div>

              <h5 className="mt-3">
                Refills
              </h5>

              <h1 className="fw-bold text-warning">
                18
              </h1>

            </div>
          </div>

          <div className="col-md-3">
            <div
              className="dashboard-card"
              onClick={() =>
                navigate("/notifications")
              }
              style={{ cursor: "pointer" }}
            >

              <div className="icon-circle bg-danger">
                🔔
              </div>

              <h5 className="mt-3">
                Notifications
              </h5>

              <h1 className="fw-bold text-danger">
                {notifications.length}
              </h1>

            </div>
          </div>

        </div>

        {/* QUICK ACTIONS */}

        <div
          className="card border-0 shadow-lg p-4 mb-4"
          style={{
            borderRadius: "25px"
          }}
        >

          <h4 className="fw-bold mb-4">
            Quick Actions
          </h4>

          <div className="row g-4">

            <div className="col-md-3">
              <button
                className="action-btn btn btn-success"
                onClick={() =>
                  navigate(
                    "/create-prescription"
                  )
                }
              >
                ➕ Create Prescription
              </button>
            </div>

            <div className="col-md-5">

              <div className="d-flex gap-2">

                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Patient"
                  value={searchPatient}
                  onChange={(e) =>
                    setSearchPatient(
                      e.target.value
                    )
                  }
                />

                <button
                  className="btn btn-primary"
                  onClick={handleSearch}
                >
                  Search
                </button>

              </div>

            </div>

            <div className="col-md-2">

              <button
                className="action-btn btn btn-warning text-white"
                onClick={() =>
                  navigate("/drug-database")
                }
              >
                💊 Database
              </button>

            </div>

            <div className="col-md-2">

              <button
                className="action-btn btn btn-danger"
              >
                📄 PDF
              </button>

            </div>

          </div>

        </div>

      </div>

      <style>
        {`

        .menu-item{
          padding:14px;
          margin-bottom:12px;
          border-radius:12px;
          font-size:18px;
          font-weight:600;
          transition:0.3s;
          cursor:pointer;
        }

        .menu-item:hover{
          background:rgba(255,255,255,0.15);
          transform:translateX(8px);
        }

        .dashboard-card{
          background:white;
          border-radius:22px;
          padding:30px;
          text-align:center;
          box-shadow:0 10px 25px rgba(0,0,0,0.08);
          transition:0.4s;
        }

        .dashboard-card:hover{
          transform:translateY(-10px) scale(1.03);
        }

        .icon-circle{
          width:70px;
          height:70px;
          border-radius:50%;
          display:flex;
          justify-content:center;
          align-items:center;
          margin:auto;
          color:white;
          font-size:30px;
        }

        .action-btn{
          width:100%;
          padding:18px;
          border-radius:15px;
          font-size:18px;
          font-weight:bold;
          transition:0.3s;
        }

        .action-btn:hover{
          transform:scale(1.05);
        }

        @keyframes pulse{
          0%{transform:scale(1);}
          50%{transform:scale(1.08);}
          100%{transform:scale(1);}
        }

        @keyframes ring{
          0%{transform:rotate(0deg);}
          10%{transform:rotate(15deg);}
          20%{transform:rotate(-10deg);}
          30%{transform:rotate(8deg);}
          40%{transform:rotate(-5deg);}
          50%{transform:rotate(0deg);}
        }

        `}
      </style>

    </div>
  );
}

export default DoctorDashboard;
