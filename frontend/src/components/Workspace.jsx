function Workspace() {
  return (
    <div className="workspace">

      <div className="workspace-header">
        <h1>💬 AI Workspace</h1>
        <p>
          Describe a challenge and let GenNova AI agents analyze it.
        </p>
      </div>

      <textarea
        placeholder="Example: Water shortage and waste management issues in my city..."
        rows="8"
      ></textarea>

      <div className="bottom-bar">

        <div className="tool-buttons">

          <label className="tool-btn">
            📷
            <input type="file" accept="image/*" hidden />
          </label>

          <label className="tool-btn">
            📎
            <input type="file" hidden />
          </label>

          <button className="tool-btn">
            🎤
          </button>

        </div>

        <div className="action-buttons">
          <button className="clear-btn">
            🗑 Clear
          </button>

          <button className="analyze-btn">
            🚀 Analyze
          </button>
        </div>

      </div>

    </div>
  );
}

export default Workspace;