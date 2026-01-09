import React from "react";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import StatusDashboard from "./components/StatusDashboard";

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
