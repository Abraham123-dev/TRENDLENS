import React from "react";
import { Navbar } from './components/Navbar';

const Layout = ({ children }) => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-background text-text-main selection:bg-accent-blue selection:text-white overflow-x-hidden flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/waitlist" element={<Waitlist />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </Layout>
  );
}

export default App;
