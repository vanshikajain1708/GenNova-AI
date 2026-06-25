import { useState, useEffect } from 'react';
import { useAuth } from '../AuthContext';

function Profile() {
  const { user, updateProfile } = useAuth();
  const [name, setName] = useState(user?.name || '');
  const [preview, setPreview] = useState(user?.avatar || null);
  const [imageSrc, setImageSrc] = useState(null);
  const [cropScale, setCropScale] = useState(0.75);
  const [cropX, setCropX] = useState(50);
  const [cropY, setCropY] = useState(50);

  useEffect(() => {
    setName(user?.name || '');
    setPreview(user?.avatar || null);
    setImageSrc(null);
    setCropScale(0.75);
    setCropX(50);
    setCropY(50);
  }, [user]);

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setImageSrc(reader.result);
      setPreview(reader.result);
      setCropScale(0.75);
      setCropX(50);
      setCropY(50);
    };
    reader.readAsDataURL(file);
  };

  const cropImage = () => {
    if (!imageSrc) return;
    const image = new Image();
    image.onload = () => {
      const cropSize = Math.min(image.width, image.height) * cropScale;
      const x = Math.max(0, Math.min(image.width - cropSize, ((image.width - cropSize) * cropX) / 100));
      const y = Math.max(0, Math.min(image.height - cropSize, ((image.height - cropSize) * cropY) / 100));
      const canvas = document.createElement('canvas');
      canvas.width = cropSize;
      canvas.height = cropSize;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(image, x, y, cropSize, cropSize, 0, 0, cropSize, cropSize);
      setPreview(canvas.toDataURL('image/png'));
    };
    image.src = imageSrc;
  };

  const save = () => {
    updateProfile({ avatar: preview, name: name.trim() || user?.name });
    alert('Profile updated');
  };

  const remove = () => {
    setPreview(null);
    setImageSrc(null);
    setCropScale(0.75);
    setCropX(50);
    setCropY(50);
    updateProfile({ avatar: null, name: name.trim() || user?.name });
  };

  return (
    <div className="page">
      <div className="header">
        <h1>👤 Profile</h1>
        <p>Update your display name and avatar</p>
      </div>

      <div className="workspace" style={{ maxWidth: 720 }}>
        <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ width: 120, height: 120, borderRadius: 12, overflow: 'hidden', background: '#0b1220', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {preview ? (
              <img src={preview} alt="avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              <div style={{ color: '#94a3b8', fontSize: 40 }}>{user?.name?.charAt(0)?.toUpperCase() || 'U'}</div>
            )}
          </div>

          <div style={{ flex: 1, minWidth: 260 }}>
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: 'block', marginBottom: 8, color: '#94a3b8' }}>Display Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter display name"
                style={{ width: '100%', padding: 12, borderRadius: 10, border: '1px solid rgba(148, 163, 184, 0.25)', background: 'rgba(15, 23, 42, 0.8)', color: '#e2e8f0' }}
              />
            </div>

            <div style={{ marginBottom: 12 }}>
              <label style={{ display: 'block', marginBottom: 8, color: '#94a3b8' }}>Change Avatar</label>
              <input type="file" accept="image/*" onChange={handleFile} />
            </div>

            {imageSrc && (
              <div style={{ display: 'grid', gap: 12, marginBottom: 16 }}>
                <div style={{ color: '#94a3b8', fontSize: 14 }}>Crop controls</div>
                <label style={{ display: 'grid', gap: 6 }}>
                  Zoom ({Math.round(cropScale * 100)}%)
                  <input type="range" min="0.4" max="1" step="0.01" value={cropScale} onChange={(e) => setCropScale(Number(e.target.value))} />
                </label>
                <label style={{ display: 'grid', gap: 6 }}>
                  Horizontal
                  <input type="range" min="0" max="100" step="1" value={cropX} onChange={(e) => setCropX(Number(e.target.value))} />
                </label>
                <label style={{ display: 'grid', gap: 6 }}>
                  Vertical
                  <input type="range" min="0" max="100" step="1" value={cropY} onChange={(e) => setCropY(Number(e.target.value))} />
                </label>
                <button className="analyze-btn" type="button" onClick={cropImage}>Apply crop</button>
              </div>
            )}

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button className="analyze-btn" onClick={save}>Save</button>
              <button className="clear-btn" onClick={remove}>Remove</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
