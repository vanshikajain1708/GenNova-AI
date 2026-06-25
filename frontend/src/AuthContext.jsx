import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const u = localStorage.getItem('gennova_user');
      return u ? JSON.parse(u) : null;
    } catch {
      return null;
    }
  });

  const navigate = useNavigate();

  const login = (payload) => {
    // payload can be a username string or a user object
    let u = typeof payload === 'string' ? { name: payload, avatar: null } : { ...payload };

    try {
      const all = JSON.parse(localStorage.getItem('gennova_users') || '[]');
      const existingIndex = all.findIndex(item => item.name.toLowerCase() === u.name.toLowerCase());
      if (existingIndex >= 0) {
        // preserve existing avatar/profile data when logging back in
        u = { ...all[existingIndex], ...u };
        all[existingIndex] = u;
      } else {
        all.push(u);
      }
      localStorage.setItem('gennova_users', JSON.stringify(all));
    } catch {
      // ignore storage errors
    }

    setUser(u);
    localStorage.setItem('gennova_user', JSON.stringify(u));
    navigate('/dashboard');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('gennova_user');
    navigate('/login');
  };

  const updateProfile = (patch) => {
    const next = { ...(user || {}), ...patch };
    setUser(next);
    localStorage.setItem('gennova_user', JSON.stringify(next));
    // Also update stored users list (so avatar/name persist for that username)
    try {
      const all = JSON.parse(localStorage.getItem('gennova_users') || '[]');
      const previousName = user?.name?.toLowerCase();
      const nextName = next.name?.toLowerCase();
      let idx = all.findIndex(u => u.name.toLowerCase() === previousName);
      if (idx < 0) {
        idx = all.findIndex(u => u.name.toLowerCase() === nextName);
      }
      if (idx >= 0) {
        all[idx] = next;
      } else {
        all.push(next);
      }
      localStorage.setItem('gennova_users', JSON.stringify(all));
    } catch {}
  };

  useEffect(() => {
    // keep user in sync with localStorage
    const onStorage = (e) => {
      if (e.key === 'gennova_user') {
        try {
          setUser(e.newValue ? JSON.parse(e.newValue) : null);
        } catch {
          setUser(null);
        }
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
