
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { VALENTINES_DAY_PRODUCT, CUSTOMER_REVIEWS } from '../constants';
import AnimatedButton from '../components/AnimatedButton';
import ReviewCard from '../components/ReviewCard';

const AnimatedSection: React.FC<{children: React.ReactNode, delay?: number, className?: string}> = ({children, delay = 0, className = ''}) => {
  const [isVisible, setIsVisible] = useState(delay === 0); // If delay is 0, start visible

  useEffect(() => {
    if (delay > 0) { // Only set a timer if there's an actual delay requested
      const timer = setTimeout(() => setIsVisible(true), delay);
      return () => clearTimeout(timer);
    }
  }, [delay]);

  return (
    <section className={`py-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}>
      {children}
    </section>
  );
};

const ProductDetailsPage: React.FC = () => {
  const navigate = useNavigate();
  const product = VALENTINES_DAY_PRODUCT;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);

  const nextImage = () => {
    setIsImageLoading(true);
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.imageUrls.length);
  };

  const prevImage = () => {
    setIsImageLoading(true);
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + product.imageUrls.length) % product.imageUrls.length);
  };

  const goToImage = (index: number) => {
    setIsImageLoading(true);
    setCurrentImageIndex(index);
  };
  
  useEffect(() => {
    // Reset loading state when image src changes and image is loaded
    const img = new Image();
    img.src = product.imageUrls[currentImageIndex];
    img.onload = () => setIsImageLoading(false);
    img.onerror = () => setIsImageLoading(false); // Handle error case
  }, [currentImageIndex, product.imageUrls]);


  return (
    <div className="space-y-12">
      <AnimatedSection delay={0}>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          <div className="lg:w-1/2 w-full">
            {/* Image Carousel */}
            <div className="relative group">
              <div className="aspect-square w-full overflow-hidden rounded-xl shadow-2xl border-4 border-cyan-600">
                <img
                  key={currentImageIndex} // For re-triggering animation on src change
                  src={product.imageUrls[currentImageIndex]}
                  alt={`${product.name} - Imagem ${currentImageIndex + 1}`}
                  className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${isImageLoading ? 'opacity-0' : 'opacity-100'}`}
                  onLoad={() => setIsImageLoading(false)}
                  onError={() => setIsImageLoading(false)}
                />
                 {isImageLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
                    <svg className="animate-spin h-10 w-10 text-cyan-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </div>
                )}
              </div>

              {product.imageUrls.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    aria-label="Imagem anterior"
                    className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-60 transition-opacity opacity-0 group-hover:opacity-100 focus:opacity-100 z-10"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    aria-label="Próxima imagem"
                    className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-60 transition-opacity opacity-0 group-hover:opacity-100 focus:opacity-100 z-10"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                    {product.imageUrls.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToImage(index)}
                        aria-label={`Ir para imagem ${index + 1}`}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          currentImageIndex === index ? 'bg-cyan-400' : 'bg-gray-400 hover:bg-gray-200'
                        }`}
                      ></button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <h1 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-3">{product.name}</h1>
            <p className="text-4xl sm:text-5xl font-extrabold text-white mb-6">{product.price}</p>
            <p className="text-gray-300 mb-6 leading-relaxed">{product.description}</p>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">Características:</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">Benefícios:</h3>
              <p className="text-gray-300">{product.benefits}</p>
            </div>

            <AnimatedButton 
              variant="primary" 
              size="lg" 
              fullWidth 
              onClick={() => {
                navigate('/checkout'); // Navigate to checkout page
              }}
            >
              Comprar Agora (Exclusivo!)
            </AnimatedButton>
            {/* Removed helper text: <p className="text-xs text-gray-500 mt-2 text-center">Clique para registrar seu interesse!</p> */}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={100}>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Avaliações de Clientes</h2>
        {CUSTOMER_REVIEWS.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CUSTOMER_REVIEWS.map((review, index) => (
              <ReviewCard key={review.id} review={review} index={index} />
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-center">Ainda não há avaliações para este produto.</p>
        )}
      </AnimatedSection>
    </div>
  );
};

export default ProductDetailsPage;
