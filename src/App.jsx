import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import PricingPage from './views/PricingPage';
import PrivacyPolicy from './views/PrivacyPolicy';
import TermsAndConditions from './views/TermsAndConditions';
import NotFound from './views/NotFound';
import ScrollToHash from './components/common/ScrollToHash';
import FeaturesPage from './views/FeaturesPage';

import usePageTracking from './usePageTracking';

function RouterContent() {
  usePageTracking();
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/feature" element={<Home />} />
        <Route path="/download-app" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <RouterContent />
    </Router>
  );
}

export default App;
