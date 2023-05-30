export type Image = {
  url: string;
  description?: string;
};

export type Category = {
  id: number;
  name: string;
  image: string;
};

export type Product = {
  id: number;
  name: string;
  code: number;
  imageUrl: string;
  ingredients: string;
  price: number;
  extras: Extra[];
};

export type Extra = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

export type SelectedProduct = Product & {
  amount: number;
  selectedExtras: Extra[];
  annotations: string;
};

export type SelectedProductsById = { [key: number]: SelectedProduct }[];

export type KitchenItem = {
  id: number;
  orderNumber: number;
  clientName: string;
  products: Omit<SelectedProduct, 'extra'>[];
};

export type Order = {
  id: number;
  isDelivered: boolean;
  isDone: boolean;
  clientName: string;
  orderCode: number;
  products: Omit<SelectedProduct, 'extra'>[];
};

export type OrdersByStatus = {
  undone?: Order[];
  done?: Order[];
  total: number;
};

export type getProductFilters = {
  code?: number;
  categoryId?: number;
  name?: string;
};
