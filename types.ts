
export interface Product {
  id: string;
  name: string;
  price: string;
  imageUrls: string[]; // Changed from imageUrl: string
  description: string;
  features: string[];
  benefits: string;
}

export interface CustomerReview {
  id: string;
  name: string;
  rating: number; // Assuming 1-5 stars
  comment: string;
}

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}