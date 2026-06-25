import DashboardCards from "../components/DashboardCards";

function Dashboard() {
  const recentAnalyses = [
    { id: 1, title: "Urban Mobility Crisis", status: "Completed", agents: 4, time: "2.3s" },
    { id: 2, title: "Water Resource Management", status: "In Progress", agents: 3, time: "1.8s" },
    { id: 3, title: "Waste Management Strategy", status: "Completed", agents: 4, time: "2.5s" },
    { id: 4, title: "Community Health Initiative", status: "Completed", agents: 5, time: "3.2s" },
  ];

  const performanceMetrics = [
    { label: "Avg Response Time", value: "2.4s", trend: "↓ 0.3s" },
    { label: "System Uptime", value: "99.8%", trend: "↑ 0.2%" },
    { label: "Agents Active", value: "4/4", trend: "All Online" },
    { label: "Success Rate", value: "99.2%", trend: "↑ 1.1%" },
  ];

  return (
    <div className="page">
      <div className="header">
        <h1>📊 Dashboard Overview</h1>
        <p>Real-time AI Analysis Platform Performance</p>
      </div>

      {/* Performance Metrics */}
      <div className="cards" style={{ marginBottom: "40px" }}>
        {performanceMetrics.map((metric, idx) => (
          <div key={idx} className="card">
            <p style={{ fontSize: "14px", color: "#94a3b8", marginBottom: "8px" }}>
              {metric.label}
            </p>
            <h1 style={{ fontSize: "40px", marginBottom: "8px" }}>{metric.value}</h1>
            <span style={{ fontSize: "13px", color: "#10b981", fontWeight: "600" }}>
              {metric.trend}
            </span>
          </div>
        ))}
      </div>

      {/* Recent Analyses */}
      <div className="workspace">
        <h2 style={{ fontSize: "26px", marginBottom: "25px", display: "flex", alignItems: "center", gap: "10px" }}>
          ⚡ Recent Analyses
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          {recentAnalyses.map((analysis) => (
            <div key={analysis.id} style={{
              background: "linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.7) 100%)",
              border: "1.5px solid rgba(168, 85, 247, 0.3)",
              padding: "20px 24px",
              borderRadius: "14px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              transition: "all 0.3s",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateX(8px)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(168, 85, 247, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateX(0)";
              e.currentTarget.style.boxShadow = "none";
            }}>
              <div>
                <h3 style={{ marginBottom: "5px", color: "#e2e8f0" }}>{analysis.title}</h3>
                <p style={{ color: "#94a3b8", fontSize: "13px" }}>
                  {analysis.agents} Agents Active • {analysis.time} processing time
                </p>
              </div>
              <span style={{
                padding: "8px 16px",
                borderRadius: "8px",
                background: analysis.status === "Completed" ? "rgba(16, 185, 129, 0.2)" : "rgba(251, 146, 60, 0.2)",
                color: analysis.status === "Completed" ? "#10b981" : "#fb923c",
                fontSize: "13px",
                fontWeight: "600"
              }}>
                {analysis.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Key Features */}
      <div className="workspace" style={{ marginTop: "40px" }}>
        <h2 style={{ fontSize: "26px", marginBottom: "25px", display: "flex", alignItems: "center", gap: "10px" }}>
          🎯 Key Capabilities
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
          {[
            { title: "Multi-Agent System", desc: "5 specialized AI agents working in parallel" },
            { title: "Real-time Analysis", desc: "Process complex issues in seconds" },
            { title: "Smart Recommendations", desc: "AI-powered actionable insights" },
            { title: "Scalable Architecture", desc: "Handle multiple concurrent analyses" }
          ].map((feature, idx) => (
            <div key={idx} style={{
              background: "rgba(15, 23, 42, 0.9)",
              border: "1.5px solid rgba(168, 85, 247, 0.2)",
              padding: "20px",
              borderRadius: "14px",
              transition: "all 0.3s",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(168, 85, 247, 0.6)";
              e.currentTarget.style.boxShadow = "0 0 20px rgba(168, 85, 247, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(168, 85, 247, 0.2)";
              e.currentTarget.style.boxShadow = "none";
            }}>
              <h4 style={{ color: "#a855f7", marginBottom: "8px", fontSize: "16px" }}>
                {feature.title}
              </h4>
              <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: "1.5" }}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;