
import React, { useState, useEffect } from 'react';
import AnimatedButton from '../components/AnimatedButton';

interface FormState {
  name: string;
  email: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Form data submitted:', formState);
      setIsLoading(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000); // Reset submitted message after 5s
    }, 1500);
  };

  return (
    <div className={`max-w-2xl mx-auto py-8 transition-all duration-1000 ease-out ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <h1 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-8 text-center">Entre em Contato</h1>
      
      {isSubmitted && (
        <div className="bg-green-500 border border-green-600 text-white px-4 py-3 rounded-lg relative mb-6 text-center" role="alert">
          <strong className="font-bold">Obrigado!</strong>
          <span className="block sm:inline"> Sua mensagem foi enviada com sucesso.</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 bg-gray-800 p-6 sm:p-8 rounded-xl shadow-2xl" name="contact" netlify>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Nome</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formState.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
            placeholder="Seu nome completo"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formState.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
            placeholder="seuemail@exemplo.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Mensagem</label>
          <textarea
            name="message"
            id="message"
            rows={5}
            value={formState.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
            placeholder="Sua mensagem..."
          />
        </div>
        <div>
          <AnimatedButton type="submit" variant="primary" size="lg" fullWidth disabled={isLoading}>
            {isLoading ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Enviando...
              </div>
            ) : "Enviar Mensagem"}
          </AnimatedButton>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
