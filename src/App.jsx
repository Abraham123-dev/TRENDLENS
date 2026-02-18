import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { SignIn } from './components/SignIn';
import { Waitlist } from './components/Waitlist';
import { Support } from './components/Support';

import { ToastProvider } from './components/ui/Toast';
import { FeedbackWidget } from './components/FeedbackWidget';

const Layout = ({ children }) => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-[#020408] text-[#F2F4F7] selection:bg-[#2E90FA] selection:text-white overflow-x-hidden flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <FeedbackWidget />
    </div>
  );
};

function App() {
  return (
    <ToastProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/waitlist" element={<Waitlist />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </Layout>
    </ToastProvider>
  );
}

export default App;
