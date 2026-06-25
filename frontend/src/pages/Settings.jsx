function Settings() {
  const setTheme = (t) => {
    if (t === 'light') {
      document.body.classList.add('light');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <div className="page">
      <div className="header">
        <h1>⚙️ System Settings</h1>
        <p>Configure GenNova AI preferences and system parameters</p>
      </div>

      <div className="workspace">
        <h2 style={{ fontSize: "26px", marginBottom: "30px", display: "flex", alignItems: "center", gap: "10px" }}>
          🎨 Appearance Settings
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
          {/* Theme Setting */}
          <div style={{ padding: "24px", background: "rgba(15, 23, 42, 0.9)", borderRadius: "14px", border: "1.5px solid rgba(168, 85, 247, 0.3)" }}>
            <h3 style={{ marginBottom: "12px", color: "#e2e8f0", fontSize: "18px", fontWeight: "600" }}>🌙 Theme</h3>
            <p style={{ color: "#94a3b8", marginBottom: "16px", fontSize: "14px" }}>Choose your preferred color theme</p>
            <div style={{ display: "flex", gap: "12px" }}>
              <button onClick={() => setTheme('dark')} style={{ flex: 1, background: "linear-gradient(135deg, #9333ea, #3b82f6)", padding: "12px 20px", borderRadius: "10px", color: "white", border: "none", fontWeight: "600", cursor: "pointer", transition: "all 0.3s" }}
                onMouseEnter={(e) => e.target.style.transform = "scale(1.02)"}
                onMouseLeave={(e) => e.target.style.transform = "scale(1)"}>
                🌙 Dark
              </button>
              <button onClick={() => setTheme('light')} style={{ flex: 1, background: "rgba(250,250,250,0.95)", padding: "12px 20px", borderRadius: "10px", color: "#0b1220", border: "1.5px solid rgba(30,30,30,0.08)", fontWeight: "600", cursor: "pointer", transition: "all 0.3s" }}
                onMouseEnter={(e) => e.target.style.borderColor = "rgba(30, 41, 59, 0.12)"}
                onMouseLeave={(e) => e.target.style.borderColor = "rgba(30, 41, 59, 0.08)"}>
                ☀️ Light
              </button>
            </div>
          </div>

          {/* Notifications Setting */}
          <div style={{ padding: "24px", background: "rgba(15, 23, 42, 0.9)", borderRadius: "14px", border: "1.5px solid rgba(168, 85, 247, 0.3)" }}>
            <h3 style={{ marginBottom: "12px", color: "#e2e8f0", fontSize: "18px", fontWeight: "600" }}>🔔 Notifications</h3>
            <p style={{ color: "#94a3b8", marginBottom: "16px", fontSize: "14px" }}>Manage how you receive alerts and updates</p>
            <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
              {[
                { id: "email", label: "Email notifications", desc: "Receive updates via email" },
                { id: "analysis", label: "Analysis completion alerts", desc: "Get notified when analysis finishes" },
                { id: "reports", label: "Weekly reports", desc: "Receive weekly system summary" },
                { id: "updates", label: "System updates", desc: "Important system announcements" }
              ].map(item => (
                <label key={item.id} style={{ display: "flex", alignItems: "center", gap: "12px", cursor: "pointer", padding: "10px", borderRadius: "8px", transition: "all 0.3s", background: "rgba(168, 85, 247, 0.05)" }}
                  onMouseEnter={(e) => e.currentTarget.style.background = "rgba(168, 85, 247, 0.1)"}
                  onMouseLeave={(e) => e.currentTarget.style.background = "rgba(168, 85, 247, 0.05)"}>
                  <input type="checkbox" defaultChecked style={{ width: "18px", height: "18px", cursor: "pointer", accentColor: "#a855f7" }} />
                  <div>
                    <div style={{ color: "#e2e8f0", fontSize: "14px", fontWeight: "600" }}>{item.label}</div>
                    <div style={{ color: "#94a3b8", fontSize: "12px" }}>{item.desc}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* API Settings */}
          <div style={{ padding: "24px", background: "rgba(15, 23, 42, 0.9)", borderRadius: "14px", border: "1.5px solid rgba(168, 85, 247, 0.3)" }}>
            <h3 style={{ marginBottom: "12px", color: "#e2e8f0", fontSize: "18px", fontWeight: "600" }}>🔑 API Configuration</h3>
            <p style={{ color: "#94a3b8", marginBottom: "16px", fontSize: "14px" }}>Manage API keys and authentication endpoints</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              <div>
                <label style={{ color: "#cbd5e1", fontSize: "13px", fontWeight: "600", display: "block", marginBottom: "8px" }}>API Key</label>
                <input type="password" placeholder="Enter your API Key" style={{
                  width: "100%",
                  padding: "12px 15px",
                  background: "rgba(10, 14, 39, 0.9)",
                  border: "1.5px solid rgba(168, 85, 247, 0.3)",
                  borderRadius: "10px",
                  color: "#e2e8f0",
                  fontSize: "14px",
                  transition: "all 0.3s",
                  outline: "none"
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "rgba(168, 85, 247, 0.6)";
                  e.target.style.boxShadow = "0 0 20px rgba(168, 85, 247, 0.2)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(168, 85, 247, 0.3)";
                  e.target.style.boxShadow = "none";
                }} />
              </div>
              <div>
                <label style={{ color: "#cbd5e1", fontSize: "13px", fontWeight: "600", display: "block", marginBottom: "8px" }}>API Endpoint</label>
                <input type="text" placeholder="https://api.gennova.ai/v1" style={{
                  width: "100%",
                  padding: "12px 15px",
                  background: "rgba(10, 14, 39, 0.9)",
                  border: "1.5px solid rgba(168, 85, 247, 0.3)",
                  borderRadius: "10px",
                  color: "#e2e8f0",
                  fontSize: "14px",
                  transition: "all 0.3s",
                  outline: "none"
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "rgba(168, 85, 247, 0.6)";
                  e.target.style.boxShadow = "0 0 20px rgba(168, 85, 247, 0.2)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(168, 85, 247, 0.3)";
                  e.target.style.boxShadow = "none";
                }} />
              </div>
              <button style={{
                width: "100%",
                background: "linear-gradient(135deg, #9333ea, #3b82f6)",
                padding: "14px",
                borderRadius: "10px",
                color: "white",
                border: "none",
                fontWeight: "600",
                fontSize: "15px",
                cursor: "pointer",
                transition: "all 0.3s",
                marginTop: "10px"
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 10px 25px rgba(147, 51, 234, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
              }}>
                💾 Save Configuration
              </button>
            </div>
          </div>

          {/* Advanced Settings */}
          <div style={{ padding: "24px", background: "rgba(15, 23, 42, 0.9)", borderRadius: "14px", border: "1.5px solid rgba(168, 85, 247, 0.3)" }}>
            <h3 style={{ marginBottom: "12px", color: "#e2e8f0", fontSize: "18px", fontWeight: "600" }}>⚡ Advanced Settings</h3>
            <p style={{ color: "#94a3b8", marginBottom: "16px", fontSize: "14px" }}>Fine-tune system performance and behavior</p>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "15px" }}>
              <div>
                <label style={{ color: "#cbd5e1", fontSize: "13px", fontWeight: "600", display: "block", marginBottom: "6px" }}>Max Agents</label>
                <input type="number" defaultValue="5" min="1" max="10" style={{
                  width: "100%",
                  padding: "10px 12px",
                  background: "rgba(10, 14, 39, 0.9)",
                  border: "1.5px solid rgba(168, 85, 247, 0.3)",
                  borderRadius: "8px",
                  color: "#e2e8f0"
                }} />
              </div>
              <div>
                <label style={{ color: "#cbd5e1", fontSize: "13px", fontWeight: "600", display: "block", marginBottom: "6px" }}>Timeout (seconds)</label>
                <input type="number" defaultValue="30" min="5" max="120" style={{
                  width: "100%",
                  padding: "10px 12px",
                  background: "rgba(10, 14, 39, 0.9)",
                  border: "1.5px solid rgba(168, 85, 247, 0.3)",
                  borderRadius: "8px",
                  color: "#e2e8f0"
                }} />
              </div>
              <div>
                <label style={{ color: "#cbd5e1", fontSize: "13px", fontWeight: "600", display: "block", marginBottom: "6px" }}>Cache Size (MB)</label>
                <input type="number" defaultValue="512" min="64" max="2048" style={{
                  width: "100%",
                  padding: "10px 12px",
                  background: "rgba(10, 14, 39, 0.9)",
                  border: "1.5px solid rgba(168, 85, 247, 0.3)",
                  borderRadius: "8px",
                  color: "#e2e8f0"
                }} />
              </div>
            </div>
          </div>

          {/* System Info */}
          <div style={{ padding: "24px", background: "linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(59, 130, 246, 0.1))", borderRadius: "14px", border: "1.5px solid rgba(16, 185, 129, 0.3)" }}>
            <h3 style={{ marginBottom: "16px", color: "#10b981", fontSize: "18px", fontWeight: "600" }}>ℹ️ System Information</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "15px" }}>
              <div>
                <p style={{ color: "#94a3b8", fontSize: "13px", marginBottom: "4px" }}>Version</p>
                <p style={{ color: "#10b981", fontWeight: "600" }}>v2.4.1</p>
              </div>
              <div>
                <p style={{ color: "#94a3b8", fontSize: "13px", marginBottom: "4px" }}>Status</p>
                <p style={{ color: "#10b981", fontWeight: "600" }}>🟢 All Systems Online</p>
              </div>
              <div>
                <p style={{ color: "#94a3b8", fontSize: "13px", marginBottom: "4px" }}>Uptime</p>
                <p style={{ color: "#10b981", fontWeight: "600" }}>99.8%</p>
              </div>
              <div>
                <p style={{ color: "#94a3b8", fontSize: "13px", marginBottom: "4px" }}>Last Updated</p>
                <p style={{ color: "#10b981", fontWeight: "600" }}>2024-12-20</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
