import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../Pages/Login/Login";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Default route */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Auth routes */}
      <Route path="/login" element={<Login />} />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRoutes;
