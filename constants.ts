import { Product, CustomerReview } from './types';

export const VALENTINES_DAY_PRODUCT: Product = {
  id: 'vd001',
  name: 'Site de relacionamento para casal',
  price: 'R$ 15,00', // Preço atualizado
  imageUrls: [
    '/image/ss1.png',
    '/image/ss2.png',
    '/image/ss3.png',
    '/image/ss4.png',
  ],
  description: 'Surpreenda seu amor com um site de relacionamento exclusivo, criado especialmente para casais apaixonados. Este site é o presente perfeito para celebrar o Dia dos Namorados, permitindo que vocês compartilhem momentos especiais, fotos e memórias de forma única e personalizada.',
  features: [
    'Contador de Dias de namoro.',
    'Ambiente controlado por senha de acesso(pode ser modificado a qualquer momento).',
    'espaços para adicionar textos e menções para seu parceiro(a).',
    'lembrete de quantos meses juntos.',
    'Espaço para fotos.',
    'Ambiente de administrador.',
  ],
  benefits: 'Suporte via WhatsApp para dúvidas e personalizações. Este site é mais do que um presente, é uma forma de eternizar momentos especiais e fortalecer o vínculo entre vocês. Ideal para casais que desejam celebrar seu amor de maneira inovadora e significativa.',
};

export const CUSTOMER_REVIEWS: CustomerReview[] = [
  { id: 'r1', name: 'Juliana S.', rating: 5, comment: 'Maravilhoso! Meu namorado amou colocar nossas fotos, foi um presente simples mas com muita emoção.' },
  { id: 'r2', name: 'Ricardo P.', rating: 5, comment: 'Produto de excelente qualidade e design sofisticado. A esposa adorou o presente, superou as expectativas!' },
  { id: 'r3', name: 'Fernanda L.', rating: 4, comment: 'Lindo e perfeito para aquele momento de "Oque posso dar de presente?"' },
  { id: 'r4', name: 'Carlos M.', rating: 5, comment: 'Presente perfeito para o Dia dos Namorados. Minha noiva ficou encantada com os detalhes.' },
];

// Target date is June 12, 2025, 23:59:59
// JavaScript months are 0-indexed, so June is 5.
export const VALENTINE_TARGET_DATE = new Date(2025, 5, 12, 23, 59, 59);

// Checkout Page Constants
export const WHATSAPP_CONTACT_NUMBER = '5562995714707'; // IMPORTANT: Replace with your actual WhatsApp number (e.g., 55119XXXXXXXX)
export const PAYMENT_LINK_PLACEHOLDER = 'https://mpago.la/33d1yX7'; // IMPORTANT: Replace with your actual payment link
// Mensagem do WhatsApp atualizada para refletir o novo preço e a personalização do link
export const WHATSAPP_MESSAGE = `Olá! Realizei o pagamento do produto "${VALENTINES_DAY_PRODUCT.name}" (${VALENTINES_DAY_PRODUCT.price}). Também gostaria de personalizar o link do site com os nomes: [NomeDele] e [NomeDela].`;
