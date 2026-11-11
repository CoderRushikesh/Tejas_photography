const BASE = process.env.REACT_APP_API_URL; // empty = demo mode (browser storage)
const rd = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) || d; } catch { return d; } };
const wr = (k, v) => localStorage.setItem(k, JSON.stringify(v));
const wait = (v) => new Promise((r) => setTimeout(() => r(v), 150));

const getSession = () => rd('tp_session', null);
const setSession = (s) => wr('tp_session', s);
const logout = () => localStorage.removeItem('tp_session');

const call = async (path, method = 'GET', body) => {
  const s = getSession();
  const r = await fetch(BASE + path, {
    method,
    headers: { 'Content-Type': 'application/json', ...(s ? { Authorization: `Bearer ${s.token}` } : {}) },
    body: body ? JSON.stringify(body) : undefined,
  });
  const d = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(d.message || 'Request failed');
  return d;
};

const DEMO_ADMIN = { email: 'admin@tejas.com', password: 'admin123' }; // TEMP: remove with backend

const api = {
  getSession, setSession, logout,

  login: async (b) => {
    if (BASE) return call('/api/auth/login', 'POST', b);
    if (b.role === 'admin') {
      if (b.email === DEMO_ADMIN.email && b.password === DEMO_ADMIN.password) return wait({ role: 'admin', name: 'Tejas', token: 'demo' });
      throw new Error('Invalid admin credentials');
    }
    const u = rd('tp_users', []).find((x) => x.email === b.email && x.password === b.password);
    if (!u) throw new Error('Invalid email or password');
    return wait({ role: 'user', name: u.name, email: u.email, phone: u.phone, token: 'demo' });
  },

  register: async (b) => {
    if (BASE) return call('/api/auth/register', 'POST', b);
    const users = rd('tp_users', []);
    if (users.some((x) => x.email === b.email)) throw new Error('Email already registered');
    wr('tp_users', [...users, b]);
    return wait({ role: 'user', name: b.name, email: b.email, phone: b.phone, token: 'demo' });
  },

  checkDate: async (date) => {
    if (BASE) return call(`/api/dates/check?date=${date}`);
    const l = rd('tp_inq', []).filter((i) => i.date === date && i.status !== 'rejected');
    return wait({ count: l.length, booked: l.some((i) => i.status === 'confirmed') });
  },

  createInquiry: async (b) => {
    if (BASE) return call('/api/inquiries', 'POST', b);
    const rec = { ...b, id: Date.now(), status: 'new', createdAt: new Date().toISOString() };
    wr('tp_inq', [rec, ...rd('tp_inq', [])]);
    return wait(rec);
  },

  listInquiries: async () => {
    if (BASE) return call('/api/inquiries');
    return wait(rd('tp_inq', []));
  },

  setStatus: async (id, status) => {
    if (BASE) return call(`/api/inquiries/${id}/status`, 'PATCH', { status });
    wr('tp_inq', rd('tp_inq', []).map((i) => (i.id === id ? { ...i, status } : i)));
    return wait(true);
  },
};
export default api;