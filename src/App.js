import React, { useState, useCallback } from 'react';
import './index.css';
import Cursor       from './components/Cursor';
import Loader       from './components/Loader';
import Navbar       from './components/Navbar';
import Hero         from './components/Hero';
import Ticker       from './components/Ticker';
import About        from './components/About';
import Owner        from './components/Owner';
import Gallery      from './components/Gallery';
import Services     from './components/Services';
import Packages     from './components/Packages';
import Testimonials from './components/Testimonials';
import Process      from './components/Process';
import CtaBand      from './components/CtaBand';
import Instagram    from './components/Instagram';
import Contact      from './components/Contact';
import Footer       from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import LocationMap from './components/LocationMap';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import useRoute from './hooks/useReveal';



export default function App() {

  const route = useRoute();
  const [loading, setLoading] = useState(true);
  const handleLoaderDone = useCallback(() => setLoading(false), []);

  return (
    <>
      <Cursor />
      {loading && <Loader onDone={handleLoaderDone} />}
     {!loading && route === '/login' && <Login />}
{!loading && route === '/admin' && <AdminDashboard />}
{!loading && route !== '/login' && route !== '/admin' && ( 
      
        <>
          <Navbar />
          <Hero />
          <Ticker />
          <About />
          <Owner />
          <Gallery />
          <Services />
          <Packages />
          <Testimonials />
          <LocationMap/>
          <Process />
          <CtaBand />
          <Instagram />
          <Contact />
          <Footer />
          <WhatsAppFloat />
        </>
      )}
    </>
  );
}
