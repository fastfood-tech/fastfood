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
};

export type SelectedProduct = Product & {
  amount: number;
  selectedExtraIds: number[];
  annotations: string;
};

export type SelectedProductsById = { [key: number]: SelectedProduct }[];
