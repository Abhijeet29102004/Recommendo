export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  preferences: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  count: number;
}

export interface Tag {
  id: string;
  name: string;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Recommendation {
  id: string;
  title: string;
  description: string;
  category: string;
  categoryId: string;
  image: string;
  rating: number;
  reviewCount: number;
  tags: Tag[];
  isFavorite: boolean;
  isNew: boolean;
  createdAt: string;
  updatedAt: string;
  price?: string;
  externalUrl?: string;
  reviews?: Review[];
}

export type SortOption = 'newest' | 'highest-rated' | 'most-reviewed' | 'relevance';

export interface FilterState {
  category: string | null;
  query: string;
  tags: string[];
  minRating: number;
  sortBy: SortOption;
}