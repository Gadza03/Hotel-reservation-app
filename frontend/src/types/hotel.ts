export type Hotel = {
  id: string;
  name: string;
  description: string;
  address: string;
  city?: string;
  pricePerNight: number;
  rating?: number;
  imageUrls: string[];
  amenities: string[];
};
