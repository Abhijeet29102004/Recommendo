import React from 'react';
import { motion } from 'framer-motion';
import { Category } from '../../types';
import { useNavigate } from 'react-router-dom';
import * as Icons from 'lucide-react';

interface CategoryListProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string | null) => void;
  layout?: 'horizontal' | 'grid' | 'sidebar';
}

const CategoryList: React.FC<CategoryListProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  layout = 'horizontal',
}) => {
  const navigate = useNavigate();
  
  const handleCategoryClick = (categoryId: string) => {
    onSelectCategory(categoryId);
    navigate(`/category/${categoryId}`);
  };
  
  const handleAllClick = () => {
    onSelectCategory(null);
    navigate('/');
  };
  
  // Dynamically get icon component
  const getIconComponent = (iconName: string) => {
    const LucideIcon = (Icons as any)[iconName] || Icons.Hash;
    return <LucideIcon size={24} />;
  };
  
  const variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      } 
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  // Horizontal layout (scrollable)
  if (layout === 'horizontal') {
    return (
      <div className="relative">
        <div className="overflow-x-auto pb-2 hide-scrollbar">
          <motion.div 
            className="flex space-x-4"
            variants={variants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAllClick}
              className={`flex-shrink-0 flex flex-col items-center justify-center w-20 h-24 rounded-xl cursor-pointer transition-colors ${
                selectedCategory === null 
                  ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300' 
                  : 'bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <Icons.Layout size={24} />
              <span className="mt-2 text-sm font-medium">All</span>
            </motion.div>
            
            {categories.map((category) => (
              <motion.div
                key={category.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCategoryClick(category.id)}
                className={`flex-shrink-0 flex flex-col items-center justify-center w-20 h-24 rounded-xl cursor-pointer transition-colors ${
                  selectedCategory === category.id 
                    ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300' 
                    : 'bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {getIconComponent(category.icon)}
                <span className="mt-2 text-sm font-medium">{category.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Gradient fade indicators for scroll */}
        <div className="absolute top-0 right-0 bottom-0 w-12 bg-gradient-to-l from-gray-50 to-transparent dark:from-gray-900 pointer-events-none"></div>
      </div>
    );
  }
  
  // Grid layout
  if (layout === 'grid') {
    return (
      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        variants={variants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAllClick}
          className={`flex flex-col items-center justify-center p-4 rounded-xl cursor-pointer transition-colors ${
            selectedCategory === null 
              ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300' 
              : 'bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          <Icons.Layout size={24} />
          <span className="mt-2 text-sm font-medium">All</span>
          <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            {categories.reduce((sum, cat) => sum + cat.count, 0)}
          </span>
        </motion.div>
        
        {categories.map((category) => (
          <motion.div
            key={category.id}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleCategoryClick(category.id)}
            className={`flex flex-col items-center justify-center p-4 rounded-xl cursor-pointer transition-colors ${
              selectedCategory === category.id 
                ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300' 
                : 'bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            {getIconComponent(category.icon)}
            <span className="mt-2 text-sm font-medium">{category.name}</span>
            <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {category.count}
            </span>
          </motion.div>
        ))}
      </motion.div>
    );
  }
  
  // Sidebar layout
  return (
    <div className="space-y-1">
      <button
        onClick={handleAllClick}
        className={`w-full flex items-center px-3 py-2 text-sm rounded-lg transition-colors ${
          selectedCategory === null 
            ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300' 
            : 'hover:bg-gray-100 dark:hover:bg-gray-800'
        }`}
      >
        <Icons.Layout size={18} className="mr-2" />
        <span>All Categories</span>
      </button>
      
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => handleCategoryClick(category.id)}
          className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-colors ${
            selectedCategory === category.id 
              ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300' 
              : 'hover:bg-gray-100 dark:hover:bg-gray-800'
          }`}
        >
          <div className="flex items-center">
            {getIconComponent(category.icon)}
            <span className="ml-2">{category.name}</span>
          </div>
          <span className="text-xs bg-gray-200 dark:bg-gray-700 rounded-full px-2 py-0.5">
            {category.count}
          </span>
        </button>
      ))}
    </div>
  );
};

export default CategoryList;