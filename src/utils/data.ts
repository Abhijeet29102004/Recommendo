import { Category, Recommendation, User } from '../types';

export const mockUser: User = {
  id: '1',
  name: 'Alex Johnson',
  email: 'alex@example.com',
  avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
  preferences: ['tech', 'books', 'travel'],
};

export const mockCategories: Category[] = [
  {
    id: 'tech',
    name: 'Technology',
    icon: 'laptop',
    description: 'Latest gadgets and software recommendations',
    count: 24,
  },
  {
    id: 'books',
    name: 'Books',
    icon: 'book-open',
    description: 'Top rated books across various genres',
    count: 38,
  },
  {
    id: 'travel',
    name: 'Travel',
    icon: 'map',
    description: 'Destinations, accommodations, and travel tips',
    count: 32,
  },
  {
    id: 'food',
    name: 'Food & Dining',
    icon: 'utensils',
    description: 'Restaurants, recipes, and culinary experiences',
    count: 45,
  },
  {
    id: 'entertainment',
    name: 'Entertainment',
    icon: 'film',
    description: 'Movies, shows, music, and more',
    count: 56,
  },
  {
    id: 'fitness',
    name: 'Fitness',
    icon: 'activity',
    description: 'Workout programs, equipment, and health tips',
    count: 29,
  },
];

export const mockRecommendations: Recommendation[] = [
  {
    id: '1',
    title: 'MacBook Pro M3',
    description: 'Apple\'s latest professional laptop with the powerful M3 chip for incredible performance and battery life.',
    category: 'Technology',
    categoryId: 'tech',
    image: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.9,
    reviewCount: 128,
    tags: [
      { id: 'laptop', name: 'Laptop' },
      { id: 'apple', name: 'Apple' },
      { id: 'pro', name: 'Professional' }
    ],
    isFavorite: true,
    isNew: true,
    createdAt: '2023-10-15T10:00:00Z',
    updatedAt: '2023-10-15T10:00:00Z',
    price: '$1,999',
    externalUrl: 'https://apple.com',
  },
  {
    id: '2',
    title: 'Project Hail Mary',
    description: 'A novel by Andy Weir about an astronaut who wakes up alone on a spacecraft with no memory of his mission.',
    category: 'Books',
    categoryId: 'books',
    image: 'https://images.pexels.com/photos/2099266/pexels-photo-2099266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.8,
    reviewCount: 342,
    tags: [
      { id: 'sci-fi', name: 'Sci-Fi' },
      { id: 'bestseller', name: 'Bestseller' },
      { id: 'fiction', name: 'Fiction' }
    ],
    isFavorite: false,
    isNew: false,
    createdAt: '2023-09-22T14:30:00Z',
    updatedAt: '2023-09-22T14:30:00Z',
    price: '$14.99',
    externalUrl: 'https://www.goodreads.com/',
  },
  {
    id: '3',
    title: 'Kyoto, Japan',
    description: 'Experience the perfect blend of traditional culture and modern amenities in this beautiful ancient city.',
    category: 'Travel',
    categoryId: 'travel',
    image: 'https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.7,
    reviewCount: 215,
    tags: [
      { id: 'japan', name: 'Japan' },
      { id: 'culture', name: 'Culture' },
      { id: 'history', name: 'Historical' }
    ],
    isFavorite: true,
    isNew: false,
    createdAt: '2023-08-05T09:15:00Z',
    updatedAt: '2023-08-05T09:15:00Z',
  },
  {
    id: '4',
    title: 'Sony WH-1000XM5',
    description: 'Industry-leading noise cancellation headphones with exceptional sound quality and comfort for long listening sessions.',
    category: 'Technology',
    categoryId: 'tech',
    image: 'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.8,
    reviewCount: 187,
    tags: [
      { id: 'headphones', name: 'Headphones' },
      { id: 'audio', name: 'Audio' },
      { id: 'wireless', name: 'Wireless' }
    ],
    isFavorite: false,
    isNew: true,
    createdAt: '2023-10-01T11:20:00Z',
    updatedAt: '2023-10-01T11:20:00Z',
    price: '$349',
    externalUrl: 'https://electronics.sony.com',
  },
  {
    id: '5',
    title: 'Dune',
    description: 'Frank Herbert\'s epic science fiction masterpiece set in the far future amidst a feudal interstellar society.',
    category: 'Books',
    categoryId: 'books',
    image: 'https://images.pexels.com/photos/2914859/pexels-photo-2914859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.7,
    reviewCount: 452,
    tags: [
      { id: 'sci-fi', name: 'Sci-Fi' },
      { id: 'classic', name: 'Classic' },
      { id: 'series', name: 'Series' }
    ],
    isFavorite: true,
    isNew: false,
    createdAt: '2023-07-12T13:45:00Z',
    updatedAt: '2023-07-12T13:45:00Z',
    price: '$12.99',
    externalUrl: 'https://www.goodreads.com/',
  },
  {
    id: '6',
    title: 'Barcelona, Spain',
    description: 'A vibrant city with stunning architecture, beautiful beaches, and world-class cuisine.',
    category: 'Travel',
    categoryId: 'travel',
    image: 'https://images.pexels.com/photos/819764/pexels-photo-819764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.6,
    reviewCount: 325,
    tags: [
      { id: 'spain', name: 'Spain' },
      { id: 'beach', name: 'Beach' },
      { id: 'architecture', name: 'Architecture' }
    ],
    isFavorite: false,
    isNew: false,
    createdAt: '2023-06-28T15:10:00Z',
    updatedAt: '2023-06-28T15:10:00Z',
  },
  {
    id: '7',
    title: 'iPad Pro 12.9"',
    description: 'Powerful tablet with M2 chip, stunning Liquid Retina XDR display, and versatile capabilities for professionals.',
    category: 'Technology',
    categoryId: 'tech',
    image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.7,
    reviewCount: 143,
    tags: [
      { id: 'tablet', name: 'Tablet' },
      { id: 'apple', name: 'Apple' },
      { id: 'pro', name: 'Professional' }
    ],
    isFavorite: true,
    isNew: false,
    createdAt: '2023-09-08T08:30:00Z',
    updatedAt: '2023-09-08T08:30:00Z',
    price: '$1,099',
    externalUrl: 'https://apple.com',
  },
  {
    id: '8',
    title: 'The Alchemist',
    description: 'Paulo Coelho\'s masterpiece about following your dreams and listening to your heart.',
    category: 'Books',
    categoryId: 'books',
    image: 'https://images.pexels.com/photos/4865741/pexels-photo-4865741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.5,
    reviewCount: 523,
    tags: [
      { id: 'fiction', name: 'Fiction' },
      { id: 'philosophy', name: 'Philosophy' },
      { id: 'classic', name: 'Classic' }
    ],
    isFavorite: false,
    isNew: false,
    createdAt: '2023-04-17T10:55:00Z',
    updatedAt: '2023-04-17T10:55:00Z',
    price: '$10.99',
    externalUrl: 'https://www.goodreads.com/',
  },
];

export const getRecommendationsByCategory = (categoryId: string | null): Recommendation[] => {
  if (!categoryId) return mockRecommendations;
  return mockRecommendations.filter(rec => rec.categoryId === categoryId);
};

export const getRecommendationById = (id: string): Recommendation | undefined => {
  return mockRecommendations.find(rec => rec.id === id);
};

export const getFavoriteRecommendations = (): Recommendation[] => {
  return mockRecommendations.filter(rec => rec.isFavorite);
};

export const getRecentRecommendations = (limit: number = 4): Recommendation[] => {
  return [...mockRecommendations]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, limit);
};

export const getTrendingRecommendations = (limit: number = 4): Recommendation[] => {
  return [...mockRecommendations]
    .sort((a, b) => (b.rating * b.reviewCount) - (a.rating * a.reviewCount))
    .slice(0, limit);
};

export const getPersonalizedRecommendations = (user: User, limit: number = 4): Recommendation[] => {
  // Simple personalization based on user preferences
  const userPreferences = user.preferences;
  const personalizedRecs = mockRecommendations.filter(rec => 
    userPreferences.includes(rec.categoryId)
  );
  
  return personalizedRecs.slice(0, limit);
};