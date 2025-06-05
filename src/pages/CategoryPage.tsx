import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import FilterPanel from '../components/recommendation/FilterPanel';
import RecommendationGrid from '../components/recommendation/RecommendationGrid';
import { FilterState, Recommendation, Tag } from '../types';
import { getRecommendationsByCategory, mockCategories } from '../utils/data';

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [filters, setFilters] = useState<FilterState>({
    category: categoryId || null,
    query: '',
    tags: [],
    minRating: 0,
    sortBy: 'relevance',
  });
  
  // Get category info
  const category = mockCategories.find(cat => cat.id === categoryId);
  
  // Get all unique tags from recommendations
  const allTags: Tag[] = [];
  const tagMap = new Map<string, Tag>();
  
  recommendations.forEach(rec => {
    rec.tags.forEach(tag => {
      if (!tagMap.has(tag.id)) {
        tagMap.set(tag.id, tag);
        allTags.push(tag);
      }
    });
  });
  
  // Load recommendations based on category
  useEffect(() => {
    setFilters(prev => ({ ...prev, category: categoryId || null }));
    const categoryRecommendations = getRecommendationsByCategory(categoryId || null);
    setRecommendations(categoryRecommendations);
  }, [categoryId]);
  
  // Apply filters to recommendations
  const filteredRecommendations = recommendations.filter(rec => {
    // Filter by search query
    if (filters.query && !rec.title.toLowerCase().includes(filters.query.toLowerCase()) &&
        !rec.description.toLowerCase().includes(filters.query.toLowerCase())) {
      return false;
    }
    
    // Filter by minimum rating
    if (filters.minRating > 0 && rec.rating < filters.minRating) {
      return false;
    }
    
    // Filter by tags
    if (filters.tags.length > 0) {
      const recTagIds = rec.tags.map(tag => tag.id);
      if (!filters.tags.some(tagId => recTagIds.includes(tagId))) {
        return false;
      }
    }
    
    return true;
  });
  
  // Sort recommendations
  const sortedRecommendations = [...filteredRecommendations].sort((a, b) => {
    switch (filters.sortBy) {
      case 'newest':
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      case 'highest-rated':
        return b.rating - a.rating;
      case 'most-reviewed':
        return b.reviewCount - a.reviewCount;
      default:
        return 0;
    }
  });
  
  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Category header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {category ? category.name : 'All Categories'}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          {category ? category.description : 'Browse all recommendations across categories'}
        </p>
      </motion.div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar filters */}
        <aside className="w-full lg:w-1/4 shrink-0">
          <FilterPanel
            filters={filters}
            onFilterChange={handleFilterChange}
            availableTags={allTags}
            showMobileFilters={showMobileFilters}
            setShowMobileFilters={setShowMobileFilters}
          />
        </aside>
        
        {/* Main content */}
        <main className="w-full lg:w-3/4">
          <div className="mb-4 flex items-center justify-between">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {sortedRecommendations.length} {sortedRecommendations.length === 1 ? 'result' : 'results'}
            </div>
          </div>
          
          <RecommendationGrid recommendations={sortedRecommendations} columns={3} />
        </main>
      </div>
    </div>
  );
};

export default CategoryPage;