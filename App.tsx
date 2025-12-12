import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import ServicesPlans from './components/ServicesPlans';
import SocialProof from './components/SocialProof';
import UploadSection from './components/UploadSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProblemSolution />
        <ServicesPlans />
        <SocialProof />
        <UploadSection />
      </main>
      <Footer />
    </div>
  );
}