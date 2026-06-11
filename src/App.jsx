import { Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import Auth from './pages/Auth';
import CitizenDashboard from './pages/CitizenDashboard';
import CitizenHistory from './pages/CitizenHistory';
import RescuerDashboard from './pages/RescuerDashboard';
import RescuerHistory from './pages/RescuerHistory';
import RescuerMap from './pages/RescuerMap';
import PharmacyDashboard from './pages/PharmacyDashboard';
import PharmacyOrders from './pages/PharmacyOrders';
import DashboardLayout from './layouts/DashboardLayout';

function App() {
  return (
    <div dir="rtl" className="font-sans text-slate-900">
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />

        {/* Citizen Routes */}
        <Route path="/citizen" element={<DashboardLayout role="citizen" />}>
          <Route index element={<CitizenDashboard />} />
          <Route path="history" element={<CitizenHistory />} />
        </Route>

        {/* Rescuer Routes */}
        <Route path="/rescuer" element={<DashboardLayout role="rescuer" />}>
          <Route index element={<RescuerDashboard />} />
          <Route path="history" element={<RescuerHistory />} />
          <Route path="map" element={<RescuerMap />} />
        </Route>

        {/* Pharmacy Routes */}
        <Route path="/pharmacy" element={<DashboardLayout role="pharmacy" />}>
          <Route index element={<PharmacyDashboard />} />
          <Route path="orders" element={<PharmacyOrders />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
