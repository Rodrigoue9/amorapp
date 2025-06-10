
import React from 'react';
import { CustomerReview } from '../types';

interface ReviewCardProps {
  review: CustomerReview;
  index: number;
}

const StarIcon: React.FC<{ filled: boolean }> = ({ filled }) => (
  <svg 
    className={`w-5 h-5 ${filled ? 'text-cyan-400' : 'text-gray-600'}`} 
    fill="currentColor" 
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const ReviewCard: React.FC<ReviewCardProps> = ({ review, index }) => {
  const [isAnimated, setIsAnimated] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsAnimated(true), index * 150); // Stagger animation
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div 
      className={`bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-500 ease-out transform 
                  ${isAnimated ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-5 scale-95'}`}
    >
      <div className="flex items-center mb-3">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} filled={i < review.rating} />
        ))}
        <p className="ml-3 text-sm font-semibold text-cyan-300">{review.name}</p>
      </div>
      <p className="text-gray-300 leading-relaxed">&ldquo;{review.comment}&rdquo;</p>
    </div>
  );
};

export default ReviewCard;
