export type Image = {
  url: string;
  description?: string;
};

export type Category = {
  id: number;
  name: string;
  image: Image;
};
