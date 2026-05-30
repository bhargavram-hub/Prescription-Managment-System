import { useNavigate } from "react-router-dom";

function PatientDashboard() {

  const navigate = useNavigate();

 const prescriptions =
  JSON.parse(localStorage.getItem("prescriptions")) || [];

const notifications =
  JSON.parse(localStorage.getItem("notifications")) || [];

const takenMeds =
  JSON.parse(localStorage.getItem("takenMeds")) || [];

const medicineCount =
  prescriptions.reduce(
    (total, p) => total + (p.medicines?.length || 0),
    0
  );

const adherence =
  medicineCount > 0
    ? Math.round(
        (takenMeds.length / medicineCount) * 100
      )
    : 0;

  const handleLogout = () => {

    localStorage.removeItem("patientLoggedIn");

    navigate("/");
  };

  return (
    <div
      className="d-flex"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#eef2f3,#dfe9f3)",
        overflow: "hidden"
      }}
    >

      {/* SIDEBAR */}
      <div
  style={{
    width: "270px",
    background: "linear-gradient(180deg,#141e30,#243b55)",
    color: "white",
    padding: "30px",
    boxShadow: "4px 0 20px rgba(0,0,0,0.1)"
  }}
>
        {/* Logo */}
        <div className="text-center mb-5">

          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.15)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
              fontSize: "35px",
              marginBottom: "15px",
              animation: "pulse 3s infinite"
            }}
          >
            🏥
          </div>

          <h2 className="fw-bold">
            PMS
          </h2>

          <p style={{ color: "#b0c4de" }}>
            Patient Portal
          </p>

        </div>

        <hr
  style={{
    borderColor: "rgba(255,255,255,0.2)",
    marginBottom: "25px"
  }}
/>

{/* MENU */}
<ul className="list-unstyled">

  <li
    className="menu-item"
    onClick={() => navigate("/patient-dashboard")}
  >
    🏠 Dashboard
  </li>

  <li
    className="menu-item"
    onClick={() => navigate("/my-prescriptions")}
  >
    📄 My Prescriptions
  </li>

  <li
    className="menu-item"
    onClick={() => navigate("/medicine-tracker")}
  >
    💊 Medicine Tracker
  </li>

  <li
    className="menu-item"
    onClick={() => navigate("/patient-notifications")}
  >
    🔔 Notifications
  </li>

  <li
    className="menu-item"
    onClick={() => navigate("/my-doctors")}
  >
    👨‍⚕️ My Doctors
  </li>

  <li
    className="menu-item"
    onClick={() => navigate("/refill-requests")}
  >
    🔄 Refill Requests
  </li>

  <li
    className="menu-item"
    onClick={() => navigate("/health-analytics")}
  >
    📊 Health Analytics
  </li>

  <li
    className="menu-item"
    onClick={() => navigate("/patient-settings")}
  >
    ⚙ Settings
  </li>

  <li
    className="menu-item"
    onClick={handleLogout}
    style={{ color: "#ff6b6b" }}
  >
    🚪 Logout
  </li>

</ul>

</div>      {/* MAIN CONTENT */}
      <div className="flex-grow-1 p-4">

        {/* NAVBAR */}
        <div
          className="d-flex justify-content-between align-items-center mb-4 p-4"
          style={{
            background: "rgba(255,255,255,0.7)",
            backdropFilter: "blur(12px)",
            borderRadius: "20px",
            boxShadow: "0 8px 25px rgba(0,0,0,0.08)"
          }}
        >

          <div>

            <h2
              className="fw-bold mb-1"
              style={{
                color: "#243b55"
              }}
            >
              Welcome Back 👋
            </h2>

            <p className="text-muted mb-0">
              Manage your prescriptions and medicines easily.
            </p>

          </div>

          <div className="d-flex align-items-center gap-4">

            <div
              style={{
                fontSize: "25px",
                animation: "ring 2s infinite"
              }}
            >
              🔔
            </div>

            <div className="d-flex align-items-center gap-3">

              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg,#36d1dc,#5b86e5)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "20px"
                }}
              >
                P
              </div>

              <div>

                <h6 className="mb-0 fw-bold">
                  Patient User
                </h6>

                <small className="text-muted">
                  Patient
                </small>

              </div>

            </div>

          </div>

        </div>

        {/* STAT CARDS */}
        <div className="row g-4 mb-4">

          <div className="col-md-3">
            <div className="dashboard-card">
              <div className="icon-circle bg-primary">
                💊
              </div>
              <h5 className="mt-3">
                Active Medicines
              </h5>
              <h1 className="fw-bold text-primary">
  {medicineCount}
</h1>
            </div>
          </div>

          <div className="col-md-3">
            <div className="dashboard-card">
              <div className="icon-circle bg-success">
                📄
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
                2
              </h1>
            </div>
          </div>

          <div className="col-md-3">
            <div className="dashboard-card">
              <div className="icon-circle bg-danger">
                📈
              </div>
              <h5 className="mt-3">
                Adherence
              </h5>
              <h1 className="fw-bold text-danger">
  {adherence}%
</h1>            </div>
          </div>

        </div>

        {/* QUICK ACTIONS */}
        <div className="row g-4 mb-4">

          <div className="col-lg-8">

            <div
              className="card border-0 shadow-lg p-4"
              style={{
                borderRadius: "20px"
              }}
            >

              <div className="d-flex justify-content-between align-items-center mb-4">

                <h4 className="fw-bold mb-0">
                  Today's Medicines
                </h4>

                <button className="btn btn-primary">
                  View All
                </button>

              </div>

              <table className="table table-hover align-middle">

                <thead>
                  <tr>
                    <th>Medicine</th>
                    <th>Dosage</th>
                    <th>Time</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>

                  <tr>
                    <td>Paracetamol</td>
                    <td>500mg</td>
                    <td>Morning</td>
                    <td>
                      <span className="badge bg-success">
                        Taken
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td>Vitamin D</td>
                    <td>1 Tablet</td>
                    <td>Afternoon</td>
                    <td>
                      <span className="badge bg-warning text-dark">
                        Pending
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td>Ibuprofen</td>
                    <td>400mg</td>
                    <td>Night</td>
                    <td>
                      <span className="badge bg-danger">
                        Missed
                      </span>
                    </td>
                  </tr>

                </tbody>

              </table>

            </div>

          </div>

          {/* QUICK ACTIONS */}
          <div className="col-lg-4">

            <div
              className="card border-0 shadow-lg p-4"
              style={{
                borderRadius: "20px"
              }}
            >

              <h4 className="fw-bold mb-4">
                Quick Actions
              </h4>

              <div className="d-grid gap-3">

                 <button
    className="action-btn btn btn-primary"
    onClick={() => navigate("/my-prescriptions")}
  >
    📄 View Prescriptions
  </button>

  <button
    className="action-btn btn btn-success"
    onClick={() => navigate("/refill-requests")}
  >
    💊 Request Refill
  </button>

  <button
    className="action-btn btn btn-warning text-white"
    onClick={() => navigate("/medicine-tracker")}
  >
    💊 Medicine Tracker
  </button>

  <button
    className="action-btn btn btn-danger"
    onClick={() => navigate("/patient-notifications")}
  >
    🔔 Notifications
  </button>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* STYLES */}
      <style>
        {`

          .menu-item{
  padding:16px;
  margin-bottom:14px;
  border-radius:15px;
  font-size:18px;
  font-weight:600;
  transition:0.3s;
  color:white;
  cursor:pointer;
}

.menu-item:hover{
  background:rgba(255,255,255,0.15);
  transform:translateX(10px);
}

.menu-item.active{
  background:rgba(255,255,255,0.2);
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
            padding:16px;
            border-radius:14px;
            font-size:17px;
            font-weight:bold;
            transition:0.3s;
          }

          .action-btn:hover{
            transform:scale(1.05);
          }

          @keyframes pulse{
            0%{
              transform:scale(1);
            }
            50%{
              transform:scale(1.08);
            }
            100%{
              transform:scale(1);
            }
          }

          @keyframes ring{
            0%{
              transform:rotate(0deg);
            }
            10%{
              transform:rotate(15deg);
            }
            20%{
              transform:rotate(-10deg);
            }
            30%{
              transform:rotate(8deg);
            }
            40%{
              transform:rotate(-5deg);
            }
            50%{
              transform:rotate(0deg);
            }
          }

        `}
      </style>

    </div>
  );
}

export default PatientDashboard;