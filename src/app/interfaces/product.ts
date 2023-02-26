export interface IProduct {
    id: number;
    title: string;
    description: string;
    category: string;
    image?: string;
    rating: {
      rate: number;
      count: number;
    }
    price: number;
  }
