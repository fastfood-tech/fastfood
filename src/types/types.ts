export type Image = {
  url: string;
  description?: string;
};

export type Category = {
  id: number;
  name: string;
  image: Image;
};

export type Product = {
  id: number;
  name: string;
  code: number;
  image: Image;
  ingredients: string;
  price: number;
  extras: Extra[];
};

export type Extra = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: Image;
};

export type SelectedProduct = Product & {
  amount: number;
  selectedExtras: Extra[];
  annotations: string;
};

export type SelectedProductsById = { [key: number]: SelectedProduct }[];

export type KitchenItem = {
  orderNumber: number;
  clientName: string;
  products: SelectedProduct[];
};
