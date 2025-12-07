import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import StatusDashboard from './components/StatusDashboard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-tech-black selection:bg-tech-green min-h-screen text-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <StatusDashboard />
      </main>
      <Footer />
    </div>
  );
}

export default App;
