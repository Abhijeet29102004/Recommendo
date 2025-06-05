import React from 'react';
import { motion } from 'framer-motion';
import RecommendationGrid from '../components/recommendation/RecommendationGrid';
import { getFavoriteRecommendations } from '../utils/data';
import { Heart } from 'lucide-react';

const Favorites: React.FC = () => {
  const favoriteRecommendations = getFavoriteRecommendations();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center">
          <Heart className="h-6 w-6 text-red-500 mr-2" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Your Favorites
          </h1>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          All your saved recommendations in one place.
        </p>
      </motion.div>
      
      {favoriteRecommendations.length > 0 ? (
        <RecommendationGrid 
          recommendations={favoriteRecommendations} 
          columns={3}
        />
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center">
          <Heart className="h-12 w-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            No favorites yet
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            You haven't saved any recommendations to your favorites yet. Browse our recommendations and click the heart icon to add them here.
          </p>
        </div>
      )}
    </div>
  );
};

export default Favorites;