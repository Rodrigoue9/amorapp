
import React, { useEffect, useState } from 'react';
import AnimatedButton from './AnimatedButton';

interface DiscountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void; // New prop for the confirm action
}

const DiscountModal: React.FC<DiscountModalProps> = ({ isOpen, onClose, onConfirm }) => {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
      document.body.style.overflow = 'hidden';
    } else {
      // Delay unmounting for exit animation
      const timer = setTimeout(() => setIsRendered(false), 300);
      document.body.style.overflow = 'auto';
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isRendered) {
    return null;
  }

  return (
    <div 
      className={`fixed inset-0 z-[60] flex items-center justify-center transition-opacity duration-300 ease-out ${isOpen ? 'opacity-100' : 'opacity-0'}`}
      onClick={onClose} // Overlay click calls onClose
      role="dialog"
      aria-modal="true"
      aria-labelledby="discount-modal-title"
    >
      <div className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm"></div>
      <div 
        className={`bg-gray-800 p-6 sm:p-8 rounded-xl shadow-2xl text-center relative z-[70] w-11/12 max-w-md transform transition-all duration-300 ease-out
                    ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-10'}`}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <button
          onClick={onClose} // 'X' button calls onClose
          className="absolute top-3 right-3 text-gray-400 hover:text-cyan-400 transition-colors text-2xl"
          aria-label="Fechar modal"
        >
          &times;
        </button>
        <h2 id="discount-modal-title" className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-4">Desconto Especial!</h2>
        <p className="text-gray-200 mb-2">
          Só para você que está planejando o presente perfeito:
        </p>
        <p className="text-lg sm:text-xl text-white font-semibold mb-6">
          Aproveite de <strong className="text-gray-400 line-through">R$25</strong> por apenas <strong className="text-cyan-300">R$15</strong>!
        </p>
        <AnimatedButton onClick={onConfirm} variant="primary" size="md"> {/* Primary button calls onConfirm */}
          Aproveitar Oferta!
        </AnimatedButton>
        <p className="text-xs text-gray-500 mt-4">Válido por tempo limitado.</p>
      </div>
    </div>
  );
};

export default DiscountModal;
