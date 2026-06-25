import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [available, setAvailable] = useState(null);
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    if (!username) return setAvailable(null);
    const all = JSON.parse(localStorage.getItem('gennova_users') || '[]');
    const exists = all.find(u => u.name.toLowerCase() === username.trim().toLowerCase());
    setAvailable(!exists);
  }, [username]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) return setError('Enter a username');
    const all = JSON.parse(localStorage.getItem('gennova_users') || '[]');
    let existing = all.find(u => u.name.toLowerCase() === username.trim().toLowerCase());
    if (!existing) {
      // create new user record
      existing = { name: username.trim(), avatar: null };
      all.push(existing);
      localStorage.setItem('gennova_users', JSON.stringify(all));
    }
    // login with the existing user object (preserves avatar)
    login(existing);
  };

  return (
    <div className="page">
      <div className="header">
        <h1>🔐 Sign In / Sign Up</h1>
        <p>Sign in to access GenNova AI workspace and reports</p>
      </div>

      <div className="workspace" style={{ maxWidth: 680 }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <label style={{ color: 'var(--muted, #94a3b8)' }}>
            Username
            <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Your name" style={{ width: '100%', padding: 12, marginTop: 8, borderRadius: 8 }} />
            {available === true && <div style={{ color: '#10b981', marginTop: 6 }}>Username available</div>}
            {available === false && <div style={{ color: '#fb923c', marginTop: 6 }}>Username already taken (you will sign in)</div>}
          </label>

          <label style={{ color: 'var(--muted, #94a3b8)' }}>
            Password
            <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" style={{ width: '100%', padding: 12, marginTop: 8, borderRadius: 8 }} />
          </label>

          <label style={{ color: 'var(--muted, #94a3b8)' }}>
            Phone Number
            <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter phone number" style={{ width: '100%', padding: 12, marginTop: 8, borderRadius: 8 }} />
          </label>

          <div style={{ display: 'grid', gap: 12, marginTop: 12 }}>
            <div style={{ color: '#94a3b8', fontSize: 14 }}>Quick access with simulated providers:</div>
            <button type="button" onClick={() => navigate('/google-auth')} className="analyze-btn">Continue with Google</button>
            <button type="button" onClick={() => login({ name: `PhoneUser_${phone || 'guest'}`, avatar: null, provider: 'phone', phone })} className="analyze-btn">Continue with Phone</button>
          </div>

          {error && <div style={{ color: '#fb923c' }}>{error}</div>}

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button type="submit" className="analyze-btn">Sign in / Sign up</button>
            <button type="button" className="clear-btn" onClick={() => { setUsername(''); setPassword(''); setPhone(''); setError(null); }}>Clear</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
