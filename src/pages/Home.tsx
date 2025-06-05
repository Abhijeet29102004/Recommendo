import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CategoryList from '../components/recommendation/CategoryList';
import RecommendationGrid from '../components/recommendation/RecommendationGrid';
import { 
  getPersonalizedRecommendations, 
  getTrendingRecommendations, 
  getRecentRecommendations,
  mockCategories,
  mockUser
} from '../utils/data';

const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const personalizedRecommendations = getPersonalizedRecommendations(mockUser);
  const trendingRecommendations = getTrendingRecommendations();
  const recentRecommendations = getRecentRecommendations();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.3
      } 
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero section */}
      <motion.section 
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Discover Your Next Favorite
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Personalized recommendations based on your interests and preferences.
          </p>
        </div>
      </motion.section>
      
      {/* Categories section */}
      <motion.section 
        className="mb-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl font-semibold mb-6">Categories</h2>
        </motion.div>
        <CategoryList 
          categories={mockCategories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          layout="grid"
        />
      </motion.section>
      
      {/* Personalized recommendations */}
      <motion.section 
        className="mb-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">For You</h2>
        </motion.div>
        <motion.div variants={itemVariants}>
          <RecommendationGrid 
            recommendations={personalizedRecommendations} 
            columns={4}
          />
        </motion.div>
      </motion.section>
      
      {/* Trending recommendations */}
      <motion.section 
        className="mb-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Trending Now</h2>
        </motion.div>
        <motion.div variants={itemVariants}>
          <RecommendationGrid 
            recommendations={trendingRecommendations} 
            columns={4}
          />
        </motion.div>
      </motion.section>
      
      {/* Recently added */}
      <motion.section 
        className="mb-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Recently Added</h2>
        </motion.div>
        <motion.div variants={itemVariants}>
          <RecommendationGrid 
            recommendations={recentRecommendations} 
            columns={4}
          />
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Home;