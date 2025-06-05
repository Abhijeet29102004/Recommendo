import React from 'react';
import { ExternalLink, Heart, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Recommendation } from '../../types';
import RatingStars from '../ui/RatingStars';
import Badge from '../ui/Badge';
import Card from '../ui/Card';

interface RecommendationCardProps {
  recommendation: Recommendation;
  onClick?: () => void;
  compact?: boolean;
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({ 
  recommendation,
  onClick,
  compact = false
}) => {
  const {
    title,
    description,
    category,
    image,
    rating,
    reviewCount,
    tags,
    isFavorite,
    isNew,
    price,
  } = recommendation;

  // Toggle favorite (in a real app, this would call an API)
  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    // In a real app: dispatch(toggleFavorite(recommendation.id));
    console.log('Toggle favorite for', recommendation.id);
  };

  // Share functionality (in a real app, this would open a share dialog)
  const shareRecommendation = (e: React.MouseEvent) => {
    e.stopPropagation();
    // In a real app: share implementation
    console.log('Share', recommendation.id);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
    >
      <Card 
        className={`h-full overflow-hidden ${compact ? 'flex' : ''}`}
        onClick={onClick}
        hover={true}
        padding="none"
      >
        <div className={`relative ${compact ? 'flex-shrink-0 w-1/3' : ''}`}>
          <img 
            src={image} 
            alt={title}
            className={`w-full ${compact ? 'h-full object-cover' : 'h-48 md:h-56 object-cover'}`}
          />
          
          {/* Category badge */}
          <div className="absolute top-3 left-3">
            <Badge variant="primary" size="sm">
              {category}
            </Badge>
          </div>
          
          {/* New indicator */}
          {isNew && (
            <div className="absolute top-3 right-3">
              <Badge variant="accent" size="sm">
                New
              </Badge>
            </div>
          )}
        </div>
        
        <div className={`p-4 ${compact ? 'flex-1' : ''}`}>
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-semibold text-lg text-gray-900 dark:text-white line-clamp-1">
              {title}
            </h3>
            
            {price && (
              <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                {price}
              </span>
            )}
          </div>
          
          <p className={`text-gray-600 dark:text-gray-300 mb-3 ${compact ? 'line-clamp-2' : 'line-clamp-3'}`}>
            {description}
          </p>
          
          {/* Tags */}
          {!compact && tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-3">
              {tags.slice(0, 3).map(tag => (
                <Badge key={tag.id} variant="default" size="sm">
                  {tag.name}
                </Badge>
              ))}
            </div>
          )}
          
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center">
              <RatingStars rating={rating} size="sm" />
              <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
                ({reviewCount})
              </span>
            </div>
            
            <div className="flex space-x-2">
              <button 
                onClick={toggleFavorite}
                className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
              >
                <Heart 
                  size={18} 
                  className={isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"} 
                />
              </button>
              
              <button 
                onClick={shareRecommendation}
                className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Share"
              >
                <Share2 size={18} className="text-gray-400" />
              </button>
              
              {recommendation.externalUrl && (
                <a 
                  href={recommendation.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Open external link"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={18} className="text-gray-400" />
                </a>
              )}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default RecommendationCard;