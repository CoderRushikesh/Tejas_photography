import React, { useState } from 'react';
import api from '../api/api';
import { navigate } from '../hooks/useRoute';
import './Login.css';


export default function Login() {
  const [role, setRole] = useState('user');
  const [mode, setMode] = useState('login');
  const [f, setF] = useState({ name: '', phone: '', email: '', password: '' });
  const [err, setErr] = useState('');
  const [busy, setBusy] = useState(false);
  const on = (e) => setF((p) => ({ ...p, [e.target.name]: e.target.value }));
  const reg = role === 'user' && mode === 'register';

  const submit = async (e) => {
    e.preventDefault(); setErr(''); setBusy(true);
    try {
      const s = reg ? await api.register(f) : await api.login({ role, email: f.email, password: f.password });
      api.setSession(s);
      navigate(s.role === 'admin' ? '/admin' : '/');
    } catch (x) { setErr(x.message); }
    setBusy(false);
  };

  return (
    <section className="auth">
      <div className="auth-card">
        <p className="sec-label">Tejas Photography</p>
        <h2 className="sec-title" style={{ fontSize: '2rem' }}>{reg ? 'Create ' : 'Welcome '}<em>{reg ? 'Account' : 'Back'}</em></h2>
        <div className="auth-tabs">
          <button type="button" className={role === 'user' ? 'on' : ''} onClick={() => setRole('user')}>User</button>
          <button type="button" className={role === 'admin' ? 'on' : ''} onClick={() => { setRole('admin'); setMode('login'); }}>Admin</button>
        </div>
        <form onSubmit={submit}>
          {reg && <input name="name" placeholder="Full name" value={f.name} onChange={on} required />}
          {reg && <input name="phone" placeholder="Phone (WhatsApp)" value={f.phone} onChange={on} required />}
          <input type="email" name="email" placeholder="Email" value={f.email} onChange={on} required />
          <input type="password" name="password" placeholder="Password" value={f.password} onChange={on} required />
          {err && <p className="auth-err">{err}</p>}
          <button className="btn-primary" disabled={busy}>{busy ? 'Please wait…' : reg ? 'Sign Up' : 'Login'}</button>
        </form>
        {role === 'user' && (
          <p className="auth-sw">
            {reg ? 'Already have an account? ' : 'New here? '}
            <button type="button" onClick={() => setMode(reg ? 'login' : 'register')}>{reg ? 'Login' : 'Create account'}</button>
          </p>
        )}
        <p className="auth-sw"><a className="auth-back" href="#/">← Back to website</a></p>
      </div>
    </section>
  );
}