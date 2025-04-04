export interface UserData {
  _id: string;
  name: string;
  email: string;
  services_id?: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  pets?: string[];
  profileImage?: string;
  favPet?: string[];
  favProduct?: string[];
  followers?: string[];
  following?: string[];
  role: string;
  cards?: {
    cardNumber: string;
    cardExpireDate: string;
    hashedCardSecurityCode: string;
  }[];
  id: string;
}
