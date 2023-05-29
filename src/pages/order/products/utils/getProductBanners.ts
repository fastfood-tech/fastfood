import { Image } from '../../../../types/types';

type ProductBanner = Image & {
  id: number;
};

export default function getProductBanners(): ProductBanner[] {
  const productsBanners = [
    {
      id: 1,
      url: 'https://st4.depositphotos.com/15131710/21007/v/450/depositphotos_210079706-stock-illustration-seamless-pattern-with-american-fast.jpg',
    },
    {
      id: 2,
      url: 'https://static.vecteezy.com/system/resources/thumbnails/021/428/961/small_2x/background-junk-food-related-seamless-pattern-and-background-editable-stroke-fast-food-line-art-of-hamburger-pizza-hot-dog-beverage-cheeseburger-restaurant-menu-background-free-vector.jpg',
    },
    {
      id: 3,
      url: 'https://img.freepik.com/premium-vector/fast-food-seamless-pattern-vector-illustration-traditional-american-food-background-print-food_514903-1874.jpg',
    },
  ];

  return productsBanners;
}
