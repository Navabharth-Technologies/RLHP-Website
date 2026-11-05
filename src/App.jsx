import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ImageModal from './components/ImageModal';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Programmes from './pages/Programmes';
import WhereWeWork from './pages/WhereWeWork';
import Projects from './pages/Projects';
import ImpactPage from './pages/ImpactPage';
import AwardsPage from './pages/AwardsPage';
import NewsArticlesPage from './pages/NewsArticlesPage';
import SuccessStoriesPage from './pages/SuccessStoriesPage';
import PublicationsPage from './pages/PublicationsPage';
import GalleryPage from './pages/GalleryPage';
import FinancialReportsPage from './pages/FinancialReportsPage';
import BankDetailsPage from './pages/BankDetailsPage';
import HowYouCanBeAPartOfUsPage from './pages/HowYouCanBeAPartOfUsPage';
import VideoGalleryPage from './pages/VideoGalleryPage';
import ContactUs from './pages/ContactUs';
import MisPortalPage from './pages/MisPortalPage';
import DigitalKnowledgeHubPage from './pages/DigitalKnowledgeHubPage';
import TendersPage from './pages/TendersPage';
import MediaCoveragePage from './pages/MediaCoveragePage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProgrammeId, setSelectedProgrammeId] = useState('child-development');
  const [selectedProjectCategory, setSelectedProjectCategory] = useState('education');
  const [selectedPublicationTab, setSelectedPublicationTab] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState(null);

  const handleNavClick = (pageId, optionId = null) => {
    setCurrentPage(pageId);

    if (pageId === 'programmes' && optionId) {
      setSelectedProgrammeId(optionId);
    }

    if (pageId === 'projects') {
      if (optionId) {
        setSelectedProjectCategory(optionId);
      }
    }

    if (pageId === 'publications') {
      if (optionId) {
        setSelectedPublicationTab(optionId);
      }
    }

    if (optionId && (pageId === 'about' || pageId === 'identity' || pageId === 'financials')) {
      setTimeout(() => {
        const el = document.getElementById(optionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} onNavClick={handleNavClick} onSelectNews={(item) => setSelectedMedia(item)} />;
      case 'about':
      case 'identity':
        return <AboutUs setCurrentPage={setCurrentPage} />;
      case 'programmes':
        return (
          <Programmes 
            selectedProgrammeId={selectedProgrammeId}
            setSelectedProgrammeId={setSelectedProgrammeId}
            setCurrentPage={setCurrentPage}
          />
        );
      case 'where-we-work':
        return <WhereWeWork />;
      case 'projects':
        return (
          <Projects 
            initialCategory={selectedProjectCategory} 
            setCurrentPage={setCurrentPage} 
            onNavClick={handleNavClick} 
          />
        );
      case 'impact':
        return <ImpactPage />;
      case 'awards':
        return <AwardsPage setCurrentPage={setCurrentPage} onNavClick={handleNavClick} onSelectNews={(item) => setSelectedMedia(item)} />;
      case 'news':
        return <NewsArticlesPage onSelectNews={(item) => setSelectedMedia(item)} setCurrentPage={setCurrentPage} onNavClick={handleNavClick} />;
      case 'media-coverage':
        return <MediaCoveragePage setCurrentPage={setCurrentPage} onNavClick={handleNavClick} />;
      case 'stories':
        return <SuccessStoriesPage onSelectNews={(item) => setSelectedMedia(item)} setCurrentPage={setCurrentPage} onNavClick={handleNavClick} />;
      case 'publications':
        return (
          <PublicationsPage 
            initialTab={selectedPublicationTab}
            onSelectMedia={(item) => setSelectedMedia(item)} 
            onSelectNews={(item) => setSelectedMedia(item)} 
            setCurrentPage={setCurrentPage} 
            onNavClick={handleNavClick} 
          />
        );
      case 'mis':
        return <MisPortalPage setCurrentPage={setCurrentPage} onNavClick={handleNavClick} />;
      case 'knowledge-hub':
        return <DigitalKnowledgeHubPage setCurrentPage={setCurrentPage} onNavClick={handleNavClick} />;
      case 'tenders':
        return <TendersPage />;
      case 'gallery':
        return <GalleryPage onSelectMedia={(item) => setSelectedMedia(item)} setCurrentPage={setCurrentPage} onNavClick={handleNavClick} />;
      case 'video-gallery':
        return <VideoGalleryPage onSelectMedia={(item) => setSelectedMedia(item)} setCurrentPage={setCurrentPage} onNavClick={handleNavClick} />;
      case 'financials':
        return <FinancialReportsPage setCurrentPage={setCurrentPage} onNavClick={handleNavClick} onSelectNews={(item) => setSelectedMedia(item)} />;
      case 'bank-details':
        return <BankDetailsPage />;
      case 'part-of-us':
        return <HowYouCanBeAPartOfUsPage setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <ContactUs />;
      default:
        return <Home setCurrentPage={setCurrentPage} onSelectNews={(item) => setSelectedMedia(item)} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans selection:bg-rlhp-green selection:text-white">
      {/* Sticky Navbar with working dropdowns and all 7 menu items */}
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        onNavClick={handleNavClick}
      />

      {/* Main Page Area — pt-[76px] offsets the fixed navbar */}
      <main className="flex-1 pt-[76px]">
        {renderPage()}
      </main>

      {/* Global Dark Green Footer */}
      <Footer 
        setCurrentPage={setCurrentPage} 
        onNavClick={handleNavClick}
      />

      <ImageModal 
        item={selectedMedia} 
        onClose={() => setSelectedMedia(null)} 
      />
    </div>
  );
}
