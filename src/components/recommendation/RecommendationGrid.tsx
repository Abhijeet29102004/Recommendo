import React from 'react';
import { Recommendation } from '../../types';
import RecommendationCard from './RecommendationCard';
import { useNavigate } from 'react-router-dom';

interface RecommendationGridProps {
  recommendations: Recommendation[];
  compact?: boolean;
  columns?: 1 | 2 | 3 | 4;
}

const RecommendationGrid: React.FC<RecommendationGridProps> = ({ 
  recommendations,
  compact = false,
  columns = 3 
}) => {
  const navigate = useNavigate();
  
  const handleCardClick = (id: string) => {
    navigate(`/recommendation/${id}`);
  };
  
  // Define grid columns based on the columns prop
  const gridColsClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  };
  
  if (recommendations.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
        <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
          No recommendations found
        </h3>
        <p className="text-gray-500 dark:text-gray-400 max-w-md">
          Try adjusting your filters or search criteria to find what you're looking for.
        </p>
      </div>
    );
  }
  
  return (
    <div className={`grid ${gridColsClass[columns]} gap-6`}>
      {recommendations.map((recommendation) => (
        <RecommendationCard
          key={recommendation.id}
          recommendation={recommendation}
          onClick={() => handleCardClick(recommendation.id)}
          compact={compact}
        />
      ))}
    </div>
  );
};

export default RecommendationGrid;