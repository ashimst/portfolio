import { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Research from './pages/Research';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Publications from './pages/Publications';
import Notes from './pages/Notes';
import NoteDetail from './pages/NoteDetail';
import CV from './pages/CV';
import Contact from './pages/Contact';
import { initializeTheme } from './utils/theme';

function App() {
  useEffect(() => {
    initializeTheme();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="research" element={<Research />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:slug" element={<ProjectDetail />} />
          <Route path="publications" element={<Publications />} />
          <Route path="notes" element={<Notes />} />
          <Route path="notes/:slug" element={<NoteDetail />} />
          <Route path="cv" element={<CV />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<div className="max-w-5xl mx-auto px-6 py-20 text-center text-sm text-text-tertiary">Page not found.</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

