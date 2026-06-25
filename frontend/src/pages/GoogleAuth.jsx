import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const googleAccounts = [
  { email: 'vanshijain1708@gmail.com', name: 'Vanshika Jain' },
  { email: 'pagalradhika12@gmail.com', name: 'Radhika Pagal' },
  { email: 'another.account@gmail.com', name: 'Another Account' },
];

function GoogleAuth() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSelect = (account) => {
    login({ name: account.name, avatar: null, provider: 'google', email: account.email });
    navigate('/dashboard');
  };

  return (
    <div className="page">
      <div className="header">
        <h1>Sign in with Google</h1>
        <p>Choose an account to continue to GenNova AI</p>
      </div>

      <div className="workspace" style={{ maxWidth: 720, padding: 24, background: '#0f172a', border: '1px solid rgba(148, 163, 184, 0.18)' }}>
        <div style={{ background: '#0f172a', borderRadius: 24, padding: 24, border: '1px solid rgba(148, 163, 184, 0.12)', boxShadow: '0 24px 80px rgba(15, 23, 42, 0.35)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
            <div style={{ width: 38, height: 38, borderRadius: '50%', background: '#ffffff', display: 'grid', placeItems: 'center' }}>
              <span style={{ fontSize: 22 }}>G</span>
            </div>
            <div>
              <div style={{ color: '#e2e8f0', fontSize: 18, fontWeight: 700 }}>Sign in with Google</div>
              <div style={{ color: '#94a3b8', fontSize: 14 }}>Continue to GenNova AI</div>
            </div>
          </div>

          <div style={{ display: 'grid', gap: 14 }}>
            {googleAccounts.map((account) => (
              <button
                key={account.email}
                type="button"
                onClick={() => handleSelect(account)}
                style={{
                  background: '#0f172a',
                  border: '1px solid rgba(148, 163, 184, 0.18)',
                  borderRadius: 18,
                  padding: '16px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#334155', display: 'grid', placeItems: 'center', color: '#93c5fd', fontWeight: 700 }}>
                  {account.name.charAt(0)}
                </div>
                <div>
                  <div style={{ color: '#f8fafc', fontSize: 16, fontWeight: 700 }}>{account.name}</div>
                  <div style={{ color: '#94a3b8', fontSize: 14 }}>{account.email}</div>
                </div>
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => alert('Use another account flow is not connected in this demo.')}
            style={{
              marginTop: 22,
              width: '100%',
              padding: '14px 18px',
              borderRadius: 18,
              border: '1px solid rgba(148, 163, 184, 0.18)',
              background: 'transparent',
              color: '#cbd5e1',
              cursor: 'pointer',
              fontWeight: 600,
            }}
          >
            Use another account
          </button>
        </div>
      </div>
    </div>
  );
}

export default GoogleAuth;
