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
      extras: [
        {
          id: 1,
          name: 'Cheddar',
          description: '10g',
          price: 1,
          image: {
            url: 'https://us-southeast-1.linodeobjects.com/storage/barateiro/media/uploads/produto/queijo_cheddar_kg_d1171ce8-b839-4114-806f-4fae5540d052.png',
          },
        },
        {
          id: 2,
          name: 'Cheddar',
          description: '10g',
          price: 1.5,
          image: {
            url: 'https://us-southeast-1.linodeobjects.com/storage/barateiro/media/uploads/produto/queijo_cheddar_kg_d1171ce8-b839-4114-806f-4fae5540d052.png',
          },
        },
        {
          id: 3,
          name: 'Cheddar',
          description: '10g',
          price: 2,
          image: {
            url: 'https://us-southeast-1.linodeobjects.com/storage/barateiro/media/uploads/produto/queijo_cheddar_kg_d1171ce8-b839-4114-806f-4fae5540d052.png',
          },
        },
      ],
    });
  }

  return { products: mockProducts };
}
