import "./App.css";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import WorkspacePage from "./pages/WorksapcePage";
import Login from "./pages/Login";
import GoogleAuth from "./pages/GoogleAuth";
import { useAuth } from "./AuthContext";
import Profile from "./pages/Profile";

function App() {
  const location = useLocation();
  
  useEffect(() => {
    console.log("Route changed to:", location.pathname);
  }, [location]);

  const RequireAuth = ({ children }) => {
    const { user } = useAuth();
    if (!user) return <Navigate to="/login" replace />;
    return children;
  };

  return (
    <div className="container">
      <Sidebar />

      <div className="main-content">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/google-auth" element={<GoogleAuth />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
          <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
          <Route path="/workspace" element={<RequireAuth><WorkspacePage /></RequireAuth>} />
          <Route path="/analytics" element={<RequireAuth><Analytics /></RequireAuth>} />
          <Route path="/reports" element={<RequireAuth><Reports /></RequireAuth>} />
          <Route path="/settings" element={<RequireAuth><Settings /></RequireAuth>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;