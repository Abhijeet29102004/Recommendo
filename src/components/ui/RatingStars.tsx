import React from 'react';
import { Star } from 'lucide-react';

interface RatingStarsProps {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
  className?: string;
  max?: number;
}

const RatingStars: React.FC<RatingStarsProps> = ({ 
  rating, 
  size = 'md', 
  showValue = true,
  className = '',
  max = 5 
}) => {
  // Get the whole number part of the rating
  const fullStars = Math.floor(rating);
  
  // Get the decimal part of the rating to determine if we need a half star
  const hasHalfStar = rating % 1 >= 0.5;
  
  // Calculate empty stars
  const emptyStars = max - fullStars - (hasHalfStar ? 1 : 0);
  
  const sizeClasses = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  };
  
  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };
  
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div className="flex">
        {/* Full stars */}
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star 
            key={`full-${i}`} 
            className={`${sizeClasses[size]} text-accent-500 fill-accent-500`} 
          />
        ))}
        
        {/* Half star */}
        {hasHalfStar && (
          <div className="relative">
            <Star className={`${sizeClasses[size]} text-gray-300 dark:text-gray-600`} />
            <div className="absolute top-0 left-0 overflow-hidden" style={{ width: '50%' }}>
              <Star className={`${sizeClasses[size]} text-accent-500 fill-accent-500`} />
            </div>
          </div>
        )}
        
        {/* Empty stars */}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <Star 
            key={`empty-${i}`} 
            className={`${sizeClasses[size]} text-gray-300 dark:text-gray-600`} 
          />
        ))}
      </div>
      
      {/* Display the rating value */}
      {showValue && (
        <span className={`${textSizeClasses[size]} font-medium text-gray-700 dark:text-gray-300`}>
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
};

export default RatingStars;