import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Heart, 
  Moon, 
  Search, 
  Sun, 
  User, 
  Menu, 
  X,
  Zap,
} from 'lucide-react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  // Handle dark mode toggle
  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
    
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);
  
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', String(newMode));
    
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };
  
  // Handle scroll detection for header styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Handle search submission
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setMobileMenuOpen(false);
    }
  };
  
  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Zap className="h-8 w-8 text-primary-600 dark:text-primary-400" />
            <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
              Recommen.do
            </span>
          </Link>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {/* Search form */}
            <form onSubmit={handleSearchSubmit} className="relative mr-2">
              <Input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search recommendations..."
                className="w-60 lg:w-80"
              />
            </form>
            
            <Link to="/favorites">
              <Button variant="ghost" icon={<Heart size={18} />}>
                Favorites
              </Button>
            </Link>
            
            <Button variant="ghost" onClick={toggleDarkMode} icon={darkMode ? <Sun size={18} /> : <Moon size={18} />}>
              {darkMode ? 'Light' : 'Dark'}
            </Button>
            
            <Link to="/profile">
              <Button variant="outline" icon={<User size={18} />}>
                Profile
              </Button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              <form onSubmit={handleSearchSubmit} className="relative">
                <Input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search recommendations..."
                />
              </form>
              
              <nav className="space-y-2">
                <Link 
                  to="/" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Home
                </Link>
                
                <Link 
                  to="/favorites" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <Heart size={18} className="mr-2" />
                  Favorites
                </Link>
                
                <Link 
                  to="/profile" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <User size={18} className="mr-2" />
                  Profile
                </Link>
                
                <button
                  onClick={() => {
                    toggleDarkMode();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center w-full px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {darkMode ? <Sun size={18} className="mr-2" /> : <Moon size={18} className="mr-2" />}
                  {darkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;