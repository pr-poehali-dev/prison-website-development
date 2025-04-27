
import React from "react";
import Header from "@/components/prison-site/Header";
import AboutSection from "@/components/prison-site/AboutSection";
import AdvantagesSection from "@/components/prison-site/AdvantagesSection";
import PreviewSection from "@/components/prison-site/PreviewSection";
import DownloadSection from "@/components/prison-site/DownloadSection";
import Footer from "@/components/prison-site/Footer";

const PrisonSite = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <Header />
          
          <div className="p-6">
            <AboutSection />
            <AdvantagesSection />
            <PreviewSection />
            <DownloadSection />
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default PrisonSite;
