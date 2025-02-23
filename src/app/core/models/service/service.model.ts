export interface Review {
  _id: string;
  name: string;
  email: string;
  review: string;
  rating: number;
  createdAt: string;
  service: string;
  user: {
    _id: string;
    name: string;
    profileImage: string;
    id: string;
  };
}

export interface ServiceModel {
  _id: string;
  icon: string;
  name: string;
  description: string;
  rate: number;
  numberOfRate: number;
  imagesProfile: string[];
  price: number;
  from: number;
  to: number;
  pricePer: string;
  about: string;
  accepted_pet_types: string[];
  accepted_pet_sizes: string[];
  question1: string[];
  question2: string[];
  question3: string[];
  serviceProfile: string;
  reviewsOfService: Review[];
}
