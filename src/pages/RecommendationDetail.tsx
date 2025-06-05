import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Heart, 
  Share2, 
  ExternalLink,
  ChevronDown,
  ChevronUp, 
} from 'lucide-react';
import RatingStars from '../components/ui/RatingStars';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import RecommendationGrid from '../components/recommendation/RecommendationGrid';
import { getRecommendationById, getRecommendationsByCategory } from '../utils/data';

const RecommendationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [showFullDescription, setShowFullDescription] = useState(false);
  
  const recommendation = getRecommendationById(id || '');
  
  if (!recommendation) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Recommendation Not Found</h1>
        <p className="mb-8">The recommendation you're looking for doesn't exist or has been removed.</p>
        <Button onClick={() => navigate('/')}>Back to Home</Button>
      </div>
    );
  }
  
  // Get related recommendations
  const relatedRecommendations = getRecommendationsByCategory(recommendation.categoryId)
    .filter(rec => rec.id !== recommendation.id)
    .slice(0, 4);
  
  // Toggle favorite (in a real app, this would call an API)
  const toggleFavorite = () => {
    // In a real app: dispatch(toggleFavorite(recommendation.id));
    console.log('Toggle favorite for', recommendation.id);
  };
  
  // Share functionality (in a real app, this would open a share dialog)
  const shareRecommendation = () => {
    // In a real app: share implementation
    console.log('Share', recommendation.id);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
      >
        <ArrowLeft size={18} className="mr-2" />
        Back
      </button>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Image */}
        <motion.div 
          className="lg:col-span-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative rounded-xl overflow-hidden bg-white dark:bg-gray-800">
            <img 
              src={recommendation.image} 
              alt={recommendation.title}
              className="w-full h-auto object-cover"
            />
            
            {/* New indicator */}
            {recommendation.isNew && (
              <div className="absolute top-4 right-4">
                <Badge variant="accent" size="md">

                  New
                </Badge>
              </div>
            )}
          </div>
        </motion.div>
        
        {/* Content */}
        <motion.div 
          className="lg:col-span-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {recommendation.title}
                </h1>
                <div className="flex items-center">
                  <Badge variant="primary" size="md" className="mr-3">
                    {recommendation.category}
                  </Badge>
                  <RatingStars rating={recommendation.rating} size="md" />
                  <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                    ({recommendation.reviewCount} reviews)
                  </span>
                </div>
              </div>
              
              {recommendation.price && (
                <div className="text-xl font-semibold text-primary-600 dark:text-primary-400">
                  {recommendation.price}
                </div>
              )}
            </div>
            
            {/* Description */}
            <div className="mb-6">
              <div className={`text-gray-700 dark:text-gray-300 ${!showFullDescription && 'line-clamp-4'}`}>
                {recommendation.description}
              </div>
              
              <button
                onClick={() => setShowFullDescription(!showFullDescription)}
                className="mt-2 text-primary-600 dark:text-primary-400 flex items-center text-sm font-medium"
              >
                {showFullDescription ? (
                  <>
                    Show less
                    <ChevronUp size={16} className="ml-1" />
                  </>
                ) : (
                  <>
                    Show more
                    <ChevronDown size={16} className="ml-1" />
                  </>
                )}
              </button>
            </div>
            
            {/* Tags */}
            {recommendation.tags && recommendation.tags.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {recommendation.tags.map(tag => (
                    <Badge key={tag.id} variant="default" size="md">
                      {tag.name}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            
            {/* Actions */}
            <div className="flex flex-wrap gap-4">
              {recommendation.externalUrl && (
                <a 
                  href={recommendation.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    variant="primary"
                    icon={<ExternalLink size={18} />}
                  >
                    Visit Website
                  </Button>
                </a>
              )}
              
              <Button 
                variant="outline"
                icon={<Heart size={18} className={recommendation.isFavorite ? "fill-red-500 text-red-500" : ""} />}
                onClick={toggleFavorite}
              >
                {recommendation.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
              </Button>
              
              <Button 
                variant="outline"
                icon={<Share2 size={18} />}
                onClick={shareRecommendation}
              >
                Share
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Related recommendations */}
      {relatedRecommendations.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">You might also like</h2>
          <RecommendationGrid 
            recommendations={relatedRecommendations} 
            columns={4}
          />
        </section>
      )}
    </div>
  );
};

export default RecommendationDetail;