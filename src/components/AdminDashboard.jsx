import React, { useEffect, useMemo, useState } from 'react';
import api from '../api/api';
import { navigate } from '../hooks/useRoute';
import './AdminDashboard.css';


const waUrl = (i) => {
  let p = (i.phone || '').replace(/\D/g, '');
  if (p.length === 10) p = '91' + p;
  const t = `Hi ${i.name}, your ${i.service || 'photoshoot'} on ${i.date} with Tejas Photography is confirmed ✅. We will contact you with the next steps. Thank you!`;
  return `https://wa.me/${p}?text=${encodeURIComponent(t)}`;
};

export default function AdminDashboard() {
  const [list, setList] = useState([]);
  const [day, setDay] = useState('');
  const [q, setQ] = useState('');

  useEffect(() => {
    const s = api.getSession();
    if (!s || s.role !== 'admin') { navigate('/login'); return; }
    api.listInquiries().then(setList).catch(() => {});
  }, []);

  const counts = useMemo(() => {
    const c = {};
    list.filter((i) => i.status !== 'rejected' && i.date).forEach((i) => { c[i.date] = (c[i.date] || 0) + 1; });
    return c;
  }, [list]);
  const dates = Object.keys(counts).sort();
  const clash = (i) => i.status !== 'rejected' && counts[i.date] > 1;

  const rows = list.filter((i) =>
    (!day || i.date === day) &&
    (!q || `${i.name} ${i.phone} ${i.email}`.toLowerCase().includes(q.toLowerCase())));

  const setStatus = async (id, status) => {
    await api.setStatus(id, status);
    setList((l) => l.map((i) => (i.id === id ? { ...i, status } : i)));
  };
  const logout = () => { api.logout(); navigate('/login'); };

  return (
    <section className="adm">
      <div className="adm-top">
        <h2 className="sec-title" style={{ margin: 0 }}>Enquiry <em>Dashboard</em></h2>
        <div><a className="btn-primary" href="#/">Website</a> <button className="btn-primary" onClick={logout}>Logout</button></div>
      </div>

      <div className="adm-stats">
        <div className="adm-stat"><b>{list.length}</b><span>Total enquiries</span></div>
        <div className="adm-stat"><b>{list.filter((i) => i.status === 'new').length}</b><span>New</span></div>
        <div className="adm-stat"><b>{list.filter((i) => i.status === 'confirmed').length}</b><span>Confirmed</span></div>
        <div className="adm-stat"><b>{dates.filter((d) => counts[d] > 1).length}</b><span>Clashing dates</span></div>
      </div>

      <div className="adm-grid">
        <div className="adm-box">
          <p className="adm-h">Enquiries by date</p>
          <button className={`adm-date${!day ? ' on' : ''}`} onClick={() => setDay('')}><span>All dates</span><b>{list.length}</b></button>
          {dates.map((d) => (
            <button key={d} className={`adm-date${day === d ? ' on' : ''}${counts[d] > 1 ? ' clash' : ''}`} onClick={() => setDay(d)}>
              <span>{d}</span><b>{counts[d]}</b>
            </button>
          ))}
        </div>

        <div className="adm-box adm-table">
          <input className="adm-search" placeholder="Search name / phone / email" value={q} onChange={(e) => setQ(e.target.value)} />
          <table>
            <thead><tr><th>Customer</th><th>Date</th><th>Service</th><th>Details</th><th>Status</th><th>Action</th></tr></thead>
            <tbody>
              {rows.length === 0 && <tr><td colSpan="6">No enquiries yet.</td></tr>}
              {rows.map((i) => (
                <tr key={i.id} className={clash(i) ? 'clash' : ''}>
                  <td><b>{i.name}</b><br />{i.phone}<br />{i.email}</td>
                  <td>{i.date || '-'}{clash(i) && <div className="adm-warn">⚠ {counts[i.date]} enquiries same date</div>}</td>
                  <td>{i.service || '-'}</td>
                  <td>{i.message || '-'}</td>
                  <td><span className={`tag ${i.status}`}>{i.status}</span></td>
                  <td className="adm-act">
                    {i.status !== 'confirmed' && <button onClick={() => setStatus(i.id, 'confirmed')}>Confirm</button>}
                    {i.status === 'confirmed' && <a href={waUrl(i)} target="_blank" rel="noopener noreferrer">WhatsApp</a>}
                    {i.status !== 'rejected' && <button onClick={() => setStatus(i.id, 'rejected')}>Reject</button>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}