import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../Pages/Login/Login";
import LandingPage from "../Pages/LandingPage/LandingPage";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Default route */}
      <Route path="/" element={<LandingPage/>} />

      {/* Auth routes */}
      <Route path="/login" element={<Login />} />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRoutes;
