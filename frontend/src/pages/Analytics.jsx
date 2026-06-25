function Analytics() {
  const stats = [
    { label: "Total Analyses", value: "1,247", change: "+156 this month", icon: "📊" },
    { label: "Avg. Accuracy", value: "98.7%", change: "+2.3% improvement", icon: "🎯" },
    { label: "Processing Speed", value: "2.1s", change: "-0.9s faster", icon: "⚡" },
    { label: "Success Rate", value: "99.4%", change: "+1.8% this quarter", icon: "✅" }
  ];

  const agentPerformance = [
    { name: "Chief Agent", completion: 98, efficiency: 96, analyses: 312 },
    { name: "Planner Agent", completion: 97, efficiency: 94, analyses: 289 },
    { name: "Analytics Agent", completion: 99, efficiency: 98, analyses: 356 },
    { name: "Recommendation Agent", completion: 96, efficiency: 95, analyses: 290 },
  ];

  const ProgressBar = ({ value, color }) => (
    <div style={{
      width: "100%",
      height: "8px",
      background: "rgba(255, 255, 255, 0.1)",
      borderRadius: "4px",
      overflow: "hidden",
      marginTop: "6px"
    }}>
      <div style={{
        width: `${value}%`,
        height: "100%",
        background: color,
        borderRadius: "4px",
        transition: "width 0.3s"
      }} />
    </div>
  );

  return (
    <div className="page">
      <div className="header">
        <h1>📈 Analytics & Performance</h1>
        <p>Comprehensive system metrics and AI agent performance tracking</p>
      </div>

      {/* Key Stats */}
      <div className="cards">
        {stats.map((stat, idx) => (
          <div key={idx} className="card">
            <div style={{ fontSize: "40px", marginBottom: "10px" }}>{stat.icon}</div>
            <h1 style={{ fontSize: "44px", marginBottom: "8px" }}>{stat.value}</h1>
            <p>{stat.label}</p>
            <span style={{ fontSize: "13px", color: "#10b981", marginTop: "10px", display: "block", fontWeight: "600" }}>
              {stat.change}
            </span>
          </div>
        ))}
      </div>

      {/* Agent Performance */}
      <div className="workspace" style={{ marginTop: "40px" }}>
        <h2 style={{ fontSize: "26px", marginBottom: "30px", display: "flex", alignItems: "center", gap: "10px" }}>
          🤖 Agent Performance Metrics
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
          {agentPerformance.map((agent, idx) => (
            <div key={idx} style={{
              background: "linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.7) 100%)",
              border: "1.5px solid rgba(168, 85, 247, 0.3)",
              padding: "24px",
              borderRadius: "14px",
              transition: "all 0.3s",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(168, 85, 247, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
                <h3 style={{ color: "#a855f7", fontSize: "18px" }}>{agent.name}</h3>
                <span style={{
                  padding: "4px 12px",
                  borderRadius: "6px",
                  background: "rgba(16, 185, 129, 0.2)",
                  color: "#10b981",
                  fontSize: "12px",
                  fontWeight: "600"
                }}>
                  {agent.analyses} analyses
                </span>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                    <span style={{ color: "#cbd5e1", fontSize: "13px" }}>Completion Rate</span>
                    <span style={{ color: "#a855f7", fontWeight: "600" }}>{agent.completion}%</span>
                  </div>
                  <ProgressBar value={agent.completion} color="#a855f7" />
                </div>

                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                    <span style={{ color: "#cbd5e1", fontSize: "13px" }}>Efficiency Score</span>
                    <span style={{ color: "#3b82f6", fontWeight: "600" }}>{agent.efficiency}%</span>
                  </div>
                  <ProgressBar value={agent.efficiency} color="#3b82f6" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Usage Insights */}
      <div className="workspace" style={{ marginTop: "40px" }}>
        <h2 style={{ fontSize: "26px", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
          📊 Usage Insights
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
          {[
            { title: "Peak Usage Hour", value: "14:00-15:00 UTC", trend: "Most active" },
            { title: "Avg Query Time", value: "2.3 seconds", trend: "Industry best" },
            { title: "Data Processed", value: "2.4 GB", trend: "This month" },
            { title: "User Satisfaction", value: "4.8/5.0", trend: "Excellent" }
          ].map((insight, idx) => (
            <div key={idx} style={{
              background: "rgba(15, 23, 42, 0.9)",
              border: "1.5px solid rgba(168, 85, 247, 0.2)",
              padding: "18px",
              borderRadius: "12px",
              textAlign: "center"
            }}>
              <p style={{ color: "#94a3b8", fontSize: "13px", marginBottom: "8px" }}>{insight.title}</p>
              <h3 style={{ color: "#a855f7", fontSize: "20px", fontWeight: "700", marginBottom: "4px" }}>
                {insight.value}
              </h3>
              <span style={{ color: "#10b981", fontSize: "12px" }}>{insight.trend}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Analytics;
