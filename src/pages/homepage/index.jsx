import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import DemoPreview from './components/DemoPreview';
import SocialProof from './components/SocialProof';
import BenefitsGrid from './components/BenefitsGrid';
import Footer from './components/Footer';

const Homepage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <Header />
      
      <main className="relative">
        <HeroSection />
        <DemoPreview />
        <SocialProof />
        <BenefitsGrid />
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default Homepage;