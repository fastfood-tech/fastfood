export default function useProducts() {
  const mockProducts = [];

  for (let i = 0; i < 12; i += 1) {
    mockProducts.push({
      id: i,
      code: Math.ceil(Math.random() * 100),
      name: 'Smash da casa',
      ingredients:
        '2x hambúrger 200g, queijo, cheddar, tomate, alface, picles, cebola, molho da casa',
      price: 30.5,
      image: {
        url: 'https://cursodohamburguerperfeito.com.br/wp-content/uploads/2021/08/Burger-280931852.png',
      },
    });
  }

  return { products: mockProducts };
}
