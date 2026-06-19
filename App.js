import { BrowserRouter, Routes, Route } from "react-router-dom";

import PatientLogin from "./pages/PatientLogin";
import PatientRegister from "./pages/PatientRegister";
import DoctorLogin from "./pages/DoctorLogin";
import DoctorRegister from "./pages/DoctorRegister";
import PatientDashboard from "./pages/PatientDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import CreatePrescription from "./pages/CreatePrescription";
import NotificationsPage from "./pages/NotificationsPage";
import DrugDatabase from "./pages/DrugDatabase";
import PatientsPage from "./pages/PatientsPage";
import MyPrescriptions from "./pages/MyPrescriptions";
import MedicineTracker from "./pages/MedicineTracker";
import MyDoctors from "./pages/MyDoctors";
import RefillRequests from "./pages/RefillRequests";
import PatientNotifications from "./pages/PatientNotifications";
import HealthAnalytics from "./pages/HealthAnalytics";
import PatientSettings from "./pages/PatientSettings";
import AllPrescriptions from "./pages/AllPrescriptions";
import PatientRequests from "./pages/PatientRequests";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<PatientLogin />}
        />

        <Route
          path="/register"
          element={<PatientRegister />}
        />

        <Route
          path="/doctor"
          element={<DoctorLogin />}
        />

	<Route
  path="/doctor-register"
  element={<DoctorRegister />}
/>
  
      <Route
  path="/Patient-dashboard"
  element={<PatientDashboard />}
/>

     <Route
  path="/doctor-dashboard"
  element={<DoctorDashboard />}
/>

     <Route
  path="/create-prescription"
  element={<CreatePrescription />}
/>

     <Route
  path="/create-prescription"
  element={<CreatePrescription />}
/>

<Route
  path="/notifications"
  element={<NotificationsPage />}
/>

<Route
  path="/drug-database"
  element={<DrugDatabase />}
/>

<Route
  path="/patients"
  element={<PatientsPage />}
/>

<Route
  path="/all-prescriptions"
  element={<AllPrescriptions />}
/>

<Route path="/my-prescriptions" element={<MyPrescriptions />} />
<Route path="/medicine-tracker" element={<MedicineTracker />} />
<Route path="/my-doctors" element={<MyDoctors />} />
<Route path="/refill-requests" element={<RefillRequests />} />
<Route path="/patient-notifications" element={<PatientNotifications />} />
<Route path="/health-analytics" element={<HealthAnalytics />} />
<Route path="/patient-settings" element={<PatientSettings />} />

<Route
  path="/patient-requests"
  element={<PatientRequests />}
/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
