
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedButton from '../components/AnimatedButton';
import CountdownTimer from '../components/CountdownTimer';
import DiscountModal from '../components/DiscountModal';
import { VALENTINES_DAY_PRODUCT } from '../constants';

const AnimatedElement: React.FC<{children: React.ReactNode, delay?: number, className?: string}> = ({children, delay = 0, className = ''}) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}>
      {children}
    </div>
  );
};


const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [showDiscountModal, setShowDiscountModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDiscountModal(true);
    }, 5000); // Show discount modal after 5 seconds
    return () => clearTimeout(timer);
  }, []);

  const handleModalClose = () => {
    setShowDiscountModal(false);
  };

  const handleModalConfirmAndNavigate = () => {
    navigate('/produto');
    setShowDiscountModal(false);
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-12 md:py-20 bg-gray-900 rounded-xl shadow-2xl overflow-hidden relative">
      
        <div className="relative z-10">
          <AnimatedElement delay={100}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
              <span className="block text-white">Presente exclusivo</span>
              <span className="block text-cyan-400">para o Seu Amor</span>
            </h1>
          </AnimatedElement>
          <AnimatedElement delay={300}>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Aproveite o Dia dos Namorados com nosso presente perfeito, criado para celebrar momentos inesquecíveis. e relembrar datas especiais.
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Product Highlight Section */}
      <section className="py-12">
        <AnimatedElement delay={500} className="text-center">
           <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Site para casal</h2>
           <p className="text-cyan-400 mb-10 text-lg">Confira as informações do site abaixo.</p>
        </AnimatedElement>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 bg-gray-800 p-8 rounded-xl shadow-xl">
          <AnimatedElement delay={700} className="md:w-1/2 flex justify-center">
            <img 
              src={VALENTINES_DAY_PRODUCT.imageUrls[0]} // Use the first image for highlight
              alt={VALENTINES_DAY_PRODUCT.name} 
              className="rounded-lg shadow-2xl max-w-sm w-full h-auto object-cover border-4 border-cyan-500 hover:scale-105 transition-transform duration-300"
            />
          </AnimatedElement>
          <div className="md:w-1/2 text-center md:text-left">
            <AnimatedElement delay={900}>
              <h3 className="text-2xl sm:text-3xl font-semibold text-cyan-300 mb-3">{VALENTINES_DAY_PRODUCT.name}</h3>
            </AnimatedElement>
            <AnimatedElement delay={1100}>
              <p className="text-gray-300 mb-4 text-sm sm:text-base leading-relaxed">{VALENTINES_DAY_PRODUCT.description.substring(0, 350)}...</p>
            </AnimatedElement>
            <AnimatedElement delay={1300}>
              <p className="text-3xl sm:text-4xl font-bold text-white mb-6">{VALENTINES_DAY_PRODUCT.price}</p>
            </AnimatedElement>
            <AnimatedElement delay={1500}>
              <AnimatedButton 
                variant="primary" 
                size="lg"
                onClick={() => navigate('/produto')}
              >
                Ver Detalhes e Comprar
              </AnimatedButton>
            </AnimatedElement>
          </div>
        </div>
      </section>
      
      {/* Countdown Timer Section */}
      <AnimatedElement delay={1700}>
        <CountdownTimer />
      </AnimatedElement>

      <DiscountModal 
        isOpen={showDiscountModal} 
        onClose={handleModalClose} 
        onConfirm={handleModalConfirmAndNavigate} 
      />
    </div>
  );
};

export default HomePage;