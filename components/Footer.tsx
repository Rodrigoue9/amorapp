
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 text-center">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Presentes AmorEterno. Todos os direitos reservados.</p>
        <p className="mt-2 text-sm">Criado com <span className="text-cyan-400">&hearts;</span> para o seu Dia dos Namorados.</p>
      </div>
    </footer>
  );
};

export default Footer;
