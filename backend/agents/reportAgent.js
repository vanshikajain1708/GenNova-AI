import { useState, useEffect } from 'react';

function Reports() {
  const [reportsList, setReportsList] = useState([]);

  useEffect(() => {
    // LocalStorage se reports load karein
    const savedReports = localStorage.getItem('gennova_reports');
    
    // Default/Hardcoded reports jo pehle se thi
    const defaultReports = [
      { id: 101, title: "Urban Mobility Solutions", fileName: "Report_Mobility_Core.pdf", date: "2026-06-24", status: "Completed", accuracy: "98.5%", recommendations: 12, agents: 4 },
      { id: 102, title: "Water Resource Management", fileName: "Report_Water_v2.pdf", date: "2026-06-23", status: "Completed", accuracy: "99.2%", recommendations: 15, agents: 5 },
      { id: 103, title: "Waste Management Strategy", fileName: "Report_Waste_v1.pdf", date: "2026-06-22", status: "In Progress", accuracy: "97.8%", recommendations: 8, agents: 4 },
      { id: 104, title: "Community Health Initiative", fileName: "Report_Health_v4.pdf", date: "2026-06-20", status: "Completed", accuracy: "98.9%", recommendations: 18, agents: 5 },
      { id: 105, title: "Renewable Energy Transition", fileName: "Report_Energy_v1.pdf", date: "2026-06-18", status: "Completed", accuracy: "99.1%", recommendations: 14, agents: 4 }
    ];

    if (savedReports) {
      // Agar user ne nayi report generate ki h, toh use default reports ke upar merge kardo
      const parsedSaved = JSON.parse(savedReports);
      setReportsList([...parsedSaved, ...defaultReports]);
    } else {
      setReportsList(defaultReports);
    }
  }, []);

  // Dynamic Counters Calculation
  const totalReports = reportsList.length;
  const completedReports = reportsList.filter(r => r.status === "Completed").length;
  const inProgressReports = reportsList.filter(r => r.status === "In Progress").length;
  const totalRecs = reportsList.reduce((sum, r) => sum + (r.recommendations || 0), 0);

  return (
    <div className="reports-page" style={{ padding: '24px', color: '#fff' }}>
      <div className="reports-header" style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '4px' }}>📑 Generated Reports</h1>
        <p style={{ color: '#94a3b8', fontSize: '14px' }}>View comprehensive AI-generated analysis and recommendations</p>
      </div>

      {/* --- COUNTERS GRID --- */}
      <div className="counters-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '32px' }}>
        <div style={{ background: 'rgba(30, 41, 59, 0.4)', padding: '20px', borderRadius: '16px', border: '1px solid rgba(148, 163, 184, 0.1)', textAlign: 'center' }}>
          <div style={{ fontSize: '24px', marginBottom: '8px' }}>📄</div>
          <div style={{ fontSize: '32px', fontWeight: '8px', fontWeight: '700', color: '#6366f1' }}>{totalReports}</div>
          <div style={{ fontSize: '14px', color: '#94a3b8', marginTop: '4px' }}>Total Reports</div>
        </div>

        <div style={{ background: 'rgba(30, 41, 59, 0.4)', padding: '20px', borderRadius: '16px', border: '1px solid rgba(148, 163, 184, 0.1)', textAlign: 'center' }}>
          <div style={{ fontSize: '24px', marginBottom: '8px' }}>✅</div>
          <div style={{ fontSize: '32px', fontWeight: '700', color: '#22c55e' }}>{completedReports}</div>
          <div style={{ fontSize: '14px', color: '#94a3b8', marginTop: '4px' }}>Completed</div>
        </div>

        <div style={{ background: 'rgba(30, 41, 59, 0.4)', padding: '20px', borderRadius: '16px', border: '1px solid rgba(148, 163, 184, 0.1)', textAlign: 'center' }}>
          <div style={{ fontSize: '24px', marginBottom: '8px' }}>⏳</div>
          <div style={{ fontSize: '32px', fontWeight: '700', color: '#eab308' }}>{inProgressReports}</div>
          <div style={{ fontSize: '14px', color: '#94a3b8', marginTop: '4px' }}>In Progress</div>
        </div>

        <div style={{ background: 'rgba(30, 41, 59, 0.4)', padding: '20px', borderRadius: '16px', border: '1px solid rgba(148, 163, 184, 0.1)', textAlign: 'center' }}>
          <div style={{ fontSize: '24px', marginBottom: '8px' }}>💡</div>
          <div style={{ fontSize: '32px', fontWeight: '700', color: '#a855f7' }}>{totalRecs}</div>
          <div style={{ fontSize: '14px', color: '#94a3b8', marginTop: '4px' }}>Total Recommendations</div>
        </div>
      </div>

      {/* --- ALL REPORTS LIST --- */}
      <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>📋 All Reports</h2>
      <div className="reports-list" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {reportsList.map((report) => (
          <div key={report.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(15, 23, 42, 0.6)', padding: '20px', borderRadius: '16px', border: '1px solid rgba(148, 163, 184, 0.08)' }}>
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#fff', marginBottom: '6px' }}>{report.title}</h3>
              <p style={{ color: '#94a3b8', fontSize: '13px', marginBottom: '8px' }}>{report.fileName}</p>
              <div style={{ display: 'flex', gap: '16px', fontSize: '12px', color: '#64748b' }}>
                <span>📅 {report.date}</span>
                <span>🎯 {report.accuracy} Accuracy</span>
                <span>💡 {report.recommendations} Recommendations</span>
                <span>🤖 {report.agents} Agents</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '500', background: report.status === "Completed" ? 'rgba(34, 197, 94, 0.15)' : 'rgba(234, 179, 8, 0.15)', color: report.status === "Completed" ? '#4ade80' : '#facc15' }}>
                {report.status}
              </span>
              <button style={{ background: '#3b82f6', color: '#fff', border: 'none', padding: '8px 14px', borderRadius: '8px', cursor: 'pointer', fontSize: '13px', fontWeight: '500' }}>
                📥 Download Report
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reports;