
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ContactPage from './pages/ContactPage';
import CheckoutPage from './pages/CheckoutPage'; // Import the new CheckoutPage

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-gray-100 flex flex-col font-sans">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/produto" element={<ProductDetailsPage />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="/checkout" element={<CheckoutPage />} /> {/* Add new checkout route */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;