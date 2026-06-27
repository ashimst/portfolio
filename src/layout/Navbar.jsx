import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import navigation from '../data/navigation.json';
import site from '../data/site.json';
import { applyTheme, getThemePreference } from '../utils/theme';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(() => getThemePreference() === 'dark');
  const location = useLocation();

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    const nextTheme = dark ? 'light' : 'dark';
    applyTheme(nextTheme);
    setDark(nextTheme === 'dark');
  };

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur-sm border-b border-border transition-colors duration-250">
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Logo / Name */}
        <Link
          to="/"
          className="text-sm font-semibold tracking-tight text-text-primary hover:text-text-secondary transition-colors"
        >
          {site.name}
        </Link>

        <div className="flex items-center gap-3">
          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`px-3 py-1.5 text-[13px] rounded-md transition-colors ${
                    isActive(item.path)
                      ? 'text-text-primary bg-surface-alt font-medium'
                      : 'text-text-tertiary hover:text-text-primary hover:bg-surface'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 text-text-secondary hover:text-text-primary hover:bg-surface-alt/60 transition-all rounded-lg flex items-center justify-center shrink-0"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-1.5 text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-b border-border bg-surface"
          >
            <ul className="px-6 py-3 space-y-0.5">
              {navigation.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                      isActive(item.path)
                        ? 'text-text-primary bg-surface-alt font-medium'
                        : 'text-text-tertiary hover:text-text-primary hover:bg-surface'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
