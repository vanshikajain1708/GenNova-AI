import { useState, useEffect } from 'react';

function Reports() {
  const [reportsList, setReportsList] = useState([]);

  const loadReports = () => {
    // 5 Hardcoded Standard Default Reports
    const defaultReports = [
      { 
        title: "Urban Mobility Solutions", 
        date: "2024-12-20", 
        status: "Completed",
        agents: 4,
        accuracy: "98.5%",
        recommendations: 12,
        summary: "Comprehensive analysis of transportation challenges with actionable solutions"
      },
      { 
        title: "Water Resource Management", 
        date: "2024-12-18", 
        status: "Completed",
        agents: 5,
        accuracy: "99.2%",
        recommendations: 15,
        summary: "Sustainable water conservation strategies for urban communities"
      },
      { 
        title: "Waste Management Strategy", 
        date: "2024-12-15", 
        status: "Completed", 
        agents: 4,
        accuracy: "97.8%",
        recommendations: 8,
        summary: "Smart waste segregation and recycling optimization analysis"
      },
      { 
        title: "Community Health Initiative", 
        date: "2024-12-10", 
        status: "Completed",
        agents: 5,
        accuracy: "98.9%",
        recommendations: 18,
        summary: "Healthcare accessibility and preventive medicine recommendations"
      },
      { 
        title: "Renewable Energy Transition", 
        date: "2024-12-05", 
        status: "Completed",
        agents: 4,
        accuracy: "99.1%",
        recommendations: 14,
        summary: "Solar and wind energy implementation roadmap for sustainable future"
      }
    ];

    const savedReports = localStorage.getItem('gennova_reports');
    if (savedReports) {
      setReportsList([...JSON.parse(savedReports), ...defaultReports]);
    } else {
      setReportsList(defaultReports);
    }
  };

  useEffect(() => {
    loadReports();
    // Real-time listener jab tak aap screen par hain
    window.addEventListener("storage_updated", loadReports);
    return () => window.removeEventListener("storage_updated", loadReports);
  }, []);
  
  const downloadReport = (report) => {
    const safeTitle = report.title.replace(/[^a-z0-9]/gi, '_').slice(0, 80);
    const content = `Title: ${report.title}\nDate: ${report.date}\nStatus: ${report.status}\nAgents: ${report.agents}\nAccuracy: ${report.accuracy}\nRecommendations: ${report.recommendations}\n\nSummary:\n${report.summary}`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${safeTitle}.txt`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="page">
      <div className="header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1>📑 Generated Reports</h1>
          <p>View comprehensive AI-generated analysis and recommendations</p>
        </div>
        <button onClick={loadReports} style={{
          padding: "12px 24px",
          borderRadius: "10px",
          background: "linear-gradient(135deg, #2563eb, #7c3aed)",
          color: "white",
          border: "none",
          fontWeight: "600",
          cursor: "pointer",
          boxShadow: "0 4px 15px rgba(124, 58, 237, 0.4)",
          transition: "transform 0.2s"
        }}
        onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
        onMouseLeave={(e) => e.target.style.transform = "scale(1)"}>
          🔄 Fetch Live Updates
        </button>
      </div>

      {/* Summary Stats */}
      <div className="cards" style={{ marginTop: "30px", marginBottom: "40px" }}>
        <div className="card">
          <div style={{ fontSize: "36px", marginBottom: "8px" }}>📄</div>
          <h1>{reportsList.length}</h1>
          <p>Total Reports</p>
        </div>
        <div className="card">
          <div style={{ fontSize: "36px", marginBottom: "8px" }}>✅</div>
          <h1>{reportsList.filter(r => r.status === "Completed").length}</h1>
          <p>Completed</p>
        </div>
        <div className="card">
          <div style={{ fontSize: "36px", marginBottom: "8px" }}>⏳</div>
          <h1>{reportsList.filter(r => r.status === "In Progress").length}</h1>
          <p>In Progress</p>
        </div>
        <div className="card">
          <div style={{ fontSize: "36px", marginBottom: "8px" }}>💡</div>
          <h1>{reportsList.reduce((sum, r) => sum + Number(r.recommendations || 0), 0)}</h1>
          <p>Total Recommendations</p>
        </div>
      </div>

      {/* Reports List */}
      <div className="workspace">
        <h2 style={{ fontSize: "26px", marginBottom: "25px", display: "flex", alignItems: "center", gap: "10px" }}>
          📋 All Reports
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          {reportsList.map((report, idx) => (
            <div key={idx} style={{
              background: "linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.7) 100%)",
              border: "1.5px solid rgba(168, 85, 247, 0.3)",
              padding: "22px 24px",
              borderRadius: "14px",
              transition: "all 0.3s",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateX(8px)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(168, 85, 247, 0.3)";
              e.currentTarget.style.borderColor = "rgba(168, 85, 247, 0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateX(0)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.borderColor = "rgba(168, 85, 247, 0.3)";
            }}>
              
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "12px" }}>
                <div>
                  <h3 style={{ marginBottom: "6px", color: "#e2e8f0", fontSize: "18px", fontWeight: "600" }}>
                    {report.title}
                  </h3>
                  <p style={{ color: "#94a3b8", fontSize: "14px" }}>
                    {report.summary || "AI Multi-Agent document framework analysis generated via workspace modules."}
                  </p>
                </div>
                <span style={{
                  padding: "8px 14px",
                  borderRadius: "8px",
                  background: report.status === "Completed" ? "rgba(16, 185, 129, 0.2)" : "rgba(251, 146, 60, 0.2)",
                  color: report.status === "Completed" ? "#10b981" : "#fb923c",
                  fontSize: "12px",
                  fontWeight: "700",
                  whiteSpace: "nowrap",
                  marginLeft: "15px"
                }}>
                  {report.status}
                </span>
              </div>

              <div style={{ display: "flex", gap: "25px", marginTop: "15px", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "13px", color: "#94a3b8" }}>📅</span>
                  <span style={{ fontSize: "13px", color: "#cbd5e1" }}>{report.date}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "13px", color: "#94a3b8" }}>🎯</span>
                  <span style={{ fontSize: "13px", color: "#10b981", fontWeight: "600" }}>{report.accuracy} Accuracy</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "13px", color: "#94a3b8" }}>💡</span>
                  <span style={{ fontSize: "13px", color: "#a855f7" }}>{report.recommendations} Recommendations</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "13px", color: "#94a3b8" }}>🤖</span>
                  <span style={{ fontSize: "13px", color: "#3b82f6" }}>{report.agents} Agents</span>
                </div>
              </div>

              <button onClick={() => downloadReport(report)} style={{
                marginTop: "15px",
                padding: "10px 20px",
                borderRadius: "8px",
                background: "linear-gradient(135deg, #9333ea, #3b82f6)",
                color: "white",
                border: "none",
                fontSize: "13px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s"
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
              }}>
                📥 Download Report
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reports;