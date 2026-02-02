import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';

// Handle scroll to anchor and scroll to top
const ScrollToAnchor = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // If hash exists, scroll to it ONLY if it's not a refresh/initial load where we want to force home
    // User requested "refresh -> jump back to home".
    // We can clear the hash on mount to force this behavior.
    if (hash) {
      // Check if this is a "reload" performance entry or just rely on the fact that we want to override it.
      // However, we still want clicked links to work.
      // The best compromise: If the user refreshes, the app re-mounts.
      // We can just scroll to top and clear hash.
      // But wait, what if they clicked a link from another site?
      // We will assume "refresh" means "reloading the current page".

      // Standard behavior:
      const timer = setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
    else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, key]);

  // Force scroll to top on mount (refresh)
  useEffect(() => {
    // This runs once on mount. If the user wants "refresh = home", we scroll to top.
    // We also clear the hash so it doesn't try to scroll back.
    if (window.performance.getEntriesByType("navigation")[0]?.type === "reload") {
      window.history.replaceState(null, null, ' ');
      window.scrollTo(0, 0);
    }
  }, []);

  return null;
};

// Temporary components until files are created
const Placeholder = ({ title }) => (
  <div className="container mx-auto px-6 py-20 text-center">
    <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
    <p className="text-slate-400">Section under construction.</p>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToAnchor />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Fallback */}
          <Route path="*" element={<Placeholder title="404 Not Found" />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
