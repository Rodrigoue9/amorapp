import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedButton from '../components/AnimatedButton';
import { VALENTINES_DAY_PRODUCT, WHATSAPP_CONTACT_NUMBER, PAYMENT_LINK_PLACEHOLDER, WHATSAPP_MESSAGE } from '../constants';

const AnimatedSection: React.FC<{children: React.ReactNode, delay?: number, className?: string}> = ({children, delay = 0, className = ''}) => {
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

const CheckoutPage: React.FC = () => {
  const product = VALENTINES_DAY_PRODUCT;
  const whatsappLink = `https://wa.me/${WHATSAPP_CONTACT_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on page load
  }, []);

  return (
    <div className="max-w-3xl mx-auto py-8">
      <AnimatedSection delay={100}>
        <h1 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-8 text-center">Finalizar Compra</h1>
      </AnimatedSection>

      <AnimatedSection delay={300} className="bg-gray-800 p-6 sm:p-8 rounded-xl shadow-2xl">
        <div className="flex flex-col md:flex-row gap-6 mb-8 items-center">
          <div className="w-full md:w-1/3 flex-shrink-0">
            <img 
              src={product.imageUrls[0]} 
              alt={product.name} 
              className="rounded-lg shadow-lg w-full h-auto object-cover border-2 border-cyan-500"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-semibold text-cyan-300 mb-2">{product.name}</h2>
            <p className="text-3xl font-bold text-white mb-4">{product.price}</p>
            <p className="text-gray-400 text-sm">Você está a um passo de adquirir este presente incrível!</p>
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">Instruções de Pagamento e Personalização:</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-200 bg-gray-700 p-4 rounded-md">
              <li>Realize o pagamento no valor de <strong className="text-white">{product.price}</strong> utilizando o botão "Realizar Pagamento".</li>
              <li>Após o pagamento, envie o comprovante através do WhatsApp para o número indicado usando o botão "Enviar Comprovante via WhatsApp".</li>
              <li>Assim que o comprovante for verificado, você receberá as informações de acesso ou envio do seu produto.</li>
              <li><strong className="text-cyan-300">Importante:</strong> Ao enviar o comprovante pelo WhatsApp, informe também o <strong className="text-white">nome do casal</strong> (ex: João & Maria) para personalizarmos o link do seu site.</li>
            </ol>
            <p className="text-sm text-cyan-400 mt-4 text-center">
                "Pague o valor do produto, mande o comprovante e o nome do casal por WhatsApp para receber seu site personalizado!"
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <AnimatedButton 
              variant="primary" 
              size="lg"
              fullWidth
              className="flex-1"
              onClick={() => window.open(PAYMENT_LINK_PLACEHOLDER, '_blank')}
              aria-label={`Realizar Pagamento no valor de ${product.price}`}
            >
              Realizar Pagamento ({product.price})
            </AnimatedButton>
            <AnimatedButton 
              variant="outline" 
              size="lg" 
              fullWidth
              className="flex-1 border-green-500 text-green-400 hover:bg-green-500 hover:text-black focus:ring-green-400"
              onClick={() => window.open(whatsappLink, '_blank')}
              aria-label="Enviar comprovante e nome do casal via WhatsApp"
            >
              Enviar Comprovante e Nomes via WhatsApp
            </AnimatedButton>
          </div>
           <p className="text-xs text-gray-500 mt-2 text-center">
              Lembre-se: O link de pagamento é um exemplo. Substitua pelo seu link real.
              O número de WhatsApp também é um exemplo. Verifique se a mensagem pré-preenchida do WhatsApp inclui o pedido dos nomes do casal.
            </p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={500} className="mt-8 text-center">
        <Link to="/produto" className="text-cyan-400 hover:text-cyan-300 transition-colors hover:underline">
          &larr; Voltar para a página do produto
        </Link>
      </AnimatedSection>
    </div>
  );
};

export default CheckoutPage;