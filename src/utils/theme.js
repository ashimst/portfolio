const THEME_KEY = 'theme';
const DARK_CLASS = 'dark';

export function getThemePreference() {
  if (typeof window === 'undefined') return 'light';

  const storedTheme = window.localStorage.getItem(THEME_KEY);
  if (storedTheme === 'dark' || storedTheme === 'light') {
    return storedTheme;
  }

  return 'light';
}

export function applyTheme(theme) {
  if (typeof document === 'undefined') return;

  const isDark = theme === 'dark';
  document.documentElement.classList.toggle(DARK_CLASS, isDark);
  document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
  window.localStorage.setItem(THEME_KEY, theme);

  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    metaThemeColor.setAttribute('content', isDark ? '#060b12' : '#f8fafc');
  }
}

export function initializeTheme() {
  applyTheme(getThemePreference());
}
