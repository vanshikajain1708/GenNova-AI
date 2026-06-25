import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../AuthContext";

function Sidebar() {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;
  const { user, logout } = useAuth();
  const handleLinkClick = (path) => {
    console.log("Link clicked:", path);
  };

  return (
    <div className="sidebar">
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
        {user ? (
          <>
            <div style={{ width: 44, height: 44, borderRadius: 10, overflow: 'hidden', background: '#0b1220' }}>
              {user.avatar ? (
                <img src={user.avatar} alt="avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#cbd5e1' }}>{user.name?.charAt(0)?.toUpperCase()}</div>
              )}
            </div>
            <div>
              <div style={{ fontWeight: 700, color: '#e2e8f0' }}>{user.name}</div>
              <div style={{ fontSize: 12, color: '#94a3b8' }}>Member</div>
            </div>
          </>
        ) : (
          <h2>🧠 GenNova AI</h2>
        )}
      </div>

      <ul>
        <li className={isActive("/") ? "active" : ""}>
          <Link to="/" onClick={() => handleLinkClick("/")}>🏠 Dashboard</Link>
        </li>
        <li className={isActive("/workspace") ? "active" : ""}>
          <Link to="/workspace" onClick={() => handleLinkClick("/workspace")}>💬 Workspace</Link>
        </li>
        <li className={isActive("/analytics") ? "active" : ""}>
          <Link to="/analytics" onClick={() => handleLinkClick("/analytics")}>📊 Analytics</Link>
        </li>
        <li className={isActive("/reports") ? "active" : ""}>
          <Link to="/reports" onClick={() => handleLinkClick("/reports")}>📑 Reports</Link>
        </li>
        <li className={isActive("/profile") ? "active" : ""}>
          <Link to="/profile" onClick={() => handleLinkClick("/profile")}>👤 Profile</Link>
        </li>
        <li className={isActive("/settings") ? "active" : ""}>
          <Link to="/settings" onClick={() => handleLinkClick("/settings")}>⚙ Settings</Link>
        </li>
      </ul>

      <div style={{ marginTop: 20 }}>
        {user ? (
          <button
            onClick={() => {
              if (window.confirm('Are you sure you want to log out?')) {
                logout();
              }
            }}
            style={{ background: 'transparent', border: 'none', color: '#cbd5e1', cursor: 'pointer', padding: 0 }}
          >
            🔓 Logout
          </button>
        ) : (
          <Link to="/login">🔐 Login</Link>
        )}
      </div>

      <div className="agents">
        <h3>Agent Status</h3>
        <p>🟢 Chief Agent</p>
        <p>🟢 Planner Agent</p>
        <p>🟢 Analytics Agent</p>
        <p>🟢 Recommendation Agent</p>
      </div>
    </div>
  );
}

export default Sidebar;