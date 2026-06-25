import { useState } from 'react';

function OutputTabs({ analysis, onDownload }) {
  const [activeTab, setActiveTab] = useState('planning');

  if (!analysis) return null;

  return (
    <div className="output-section">
      {/* Tabs Headers */}
      <div className="tabs">
        <button 
          className={activeTab === 'planning' ? 'active' : ''} 
          onClick={() => setActiveTab('planning')}
        >
          📋 Planning
        </button>
        <button 
          className={activeTab === 'analysis' ? 'active' : ''} 
          onClick={() => setActiveTab('analysis')}
        >
          📊 Analysis
        </button>
        <button 
          className={activeTab === 'recommendations' ? 'active' : ''} 
          onClick={() => setActiveTab('recommendations')}
        >
          💡 Recommendations
        </button>
        <button 
          className={activeTab === 'report' ? 'active' : ''} 
          onClick={() => setActiveTab('report')}
        >
          📑 Report
        </button>
      </div>

      {/* Tabs Content Box */}
      <div className="output-box">
        {activeTab === 'planning' && (
          <div>
            <h3>📋 Planning Stage</h3>
            <p>{analysis.planning || "Planning steps are being prepared by GenNova agents..."}</p>
          </div>
        )}

        {activeTab === 'analysis' && (
          <div>
            <h3>📊 Deep Analysis</h3>
            <p>{analysis.deepAnalysis || "Detailed agent analysis report is ready."}</p>
          </div>
        )}

        {activeTab === 'recommendations' && (
          <div>
            <h3>💡 Actionable Recommendations</h3>
            <p>{analysis.recommendations || "Suggested recommendations from the planner agent."}</p>
          </div>
        )}

        {activeTab === 'report' && (
          <div>
            <h3>📑 Final Report</h3>
            <p style={{ marginBottom: '20px' }}>
              {analysis.report || "Final Report: Problem identified. Analysis completed. Recommendations generated. Implementation plan ready."}
            </p>
            
            {/* GREEN DOWNLOAD REPORT BUTTON */}
            <button 
              className="download-btn" 
              onClick={onDownload}
            >
              📥 Download Report
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default OutputTabs;