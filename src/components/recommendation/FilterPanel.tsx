import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FilterX, SlidersHorizontal } from 'lucide-react';
import { FilterState, Tag } from '../../types';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import RatingStars from '../ui/RatingStars';

interface FilterPanelProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  availableTags: Tag[];
  showMobileFilters: boolean;
  setShowMobileFilters: (show: boolean) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  filters,
  onFilterChange,
  availableTags,
  showMobileFilters,
  setShowMobileFilters,
}) => {
  const [searchQuery, setSearchQuery] = useState(filters.query);
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  
  const handleSearchSubmit = () => {
    onFilterChange({ ...filters, query: searchQuery });
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearchSubmit();
    }
  };
  
  const handleSortChange = (value: string) => {
    onFilterChange({ ...filters, sortBy: value as any });
  };
  
  const handleTagToggle = (tagId: string) => {
    const newTags = filters.tags.includes(tagId)
      ? filters.tags.filter(id => id !== tagId)
      : [...filters.tags, tagId];
    
    onFilterChange({ ...filters, tags: newTags });
  };
  
  const handleRatingChange = (rating: number) => {
    onFilterChange({ ...filters, minRating: rating });
  };
  
  const resetFilters = () => {
    onFilterChange({
      category: null,
      query: '',
      tags: [],
      minRating: 0,
      sortBy: 'relevance',
    });
    setSearchQuery('');
  };
  
  const hasActiveFilters = 
    filters.query !== '' || 
    filters.tags.length > 0 || 
    filters.minRating > 0 || 
    filters.sortBy !== 'relevance';
  
  const sortOptions = [
    { value: 'relevance', label: 'Relevance' },
    { value: 'newest', label: 'Newest' },
    { value: 'highest-rated', label: 'Highest Rated' },
    { value: 'most-reviewed', label: 'Most Reviewed' },
  ];
  
  const panelContent = (
    <div className="space-y-6">
      {/* Search input */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Search
        </label>
        <div className="flex">
          <Input
            type="search"
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
            placeholder="Search recommendations..."
            className="rounded-r-none"
          />
          <button
            onClick={handleSearchSubmit}
            className="px-4 bg-primary-600 text-white rounded-r-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            Search
          </button>
        </div>
      </div>
      
      {/* Sort by */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Sort by
        </label>
        <Select
          options={sortOptions}
          value={filters.sortBy}
          onChange={handleSortChange}
        />
      </div>
      
      {/* Rating filter */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Minimum Rating
        </label>
        <div className="flex flex-col space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div 
              key={rating}
              className={`flex items-center p-2 rounded-lg cursor-pointer transition-colors ${
                filters.minRating === rating 
                  ? 'bg-primary-50 dark:bg-primary-900' 
                  : 'hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
              onClick={() => handleRatingChange(rating)}
            >
              <RatingStars rating={rating} size="sm" showValue={false} />
              <span className="ml-2 text-sm">& Up</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Tags */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Tags
        </label>
        <div className="flex flex-wrap gap-2">
          {availableTags.map((tag) => (
            <Badge
              key={tag.id}
              variant={filters.tags.includes(tag.id) ? 'primary' : 'default'}
              className={`cursor-pointer ${
                filters.tags.includes(tag.id) 
                  ? 'border border-primary-300' 
                  : 'border border-gray-200 dark:border-gray-700'
              }`}
              onClick={() => handleTagToggle(tag.id)}
            >
              {tag.name}
            </Badge>
          ))}
        </div>
      </div>
      
      {/* Reset filters */}
      {hasActiveFilters && (
        <Button
          variant="outline"
          onClick={resetFilters}
          fullWidth
          icon={<FilterX size={16} />}
        >
          Reset Filters
        </Button>
      )}
    </div>
  );
  
  // Mobile view (slide-in panel)
  const mobileFilterPanel = (
    <motion.div
      className="fixed inset-0 z-50 lg:hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50" 
        onClick={() => setShowMobileFilters(false)}
      />
      
      {/* Panel */}
      <motion.div
        className="absolute right-0 top-0 h-full w-80 bg-white dark:bg-gray-900 shadow-xl overflow-y-auto"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
      >
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Filters</h2>
          <button 
            onClick={() => setShowMobileFilters(false)}
            className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        
        <div className="p-4">
          {panelContent}
        </div>
      </motion.div>
    </motion.div>
  );
  
  return (
    <>
      {/* Desktop sidebar */}
      <div className="hidden lg:block">
        {panelContent}
      </div>
      
      {/* Mobile filter button */}
      <div className="lg:hidden flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Recommendations</h2>
        <Button
          variant="outline"
          onClick={() => setShowMobileFilters(true)}
          icon={<SlidersHorizontal size={16} />}
          size="sm"
        >
          Filters
        </Button>
      </div>
      
      {/* Mobile slide-in panel */}
      {showMobileFilters && mobileFilterPanel}
    </>
  );
};

export default FilterPanel;