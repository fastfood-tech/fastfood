export default function useCategories() {
  const mockcategories = [
    {
      id: 1,
      name: 'Combos',
      image: {
        url: 'https://cursodohamburguerperfeito.com.br/wp-content/uploads/2021/08/Burger-280931852.png',
      },
    },
    {
      id: 2,
      name: 'Acompanhamentos',
      image: {
        url: 'https://cursodohamburguerperfeito.com.br/wp-content/uploads/2021/08/Burger-280931852.png',
      },
    },
    {
      id: 3,
      name: 'Bebidas',
      image: {
        url: 'https://cursodohamburguerperfeito.com.br/wp-content/uploads/2021/08/Burger-280931852.png',
      },
    },
    {
      id: 4,
      name: 'Sobremesas',
      image: {
        url: 'https://cursodohamburguerperfeito.com.br/wp-content/uploads/2021/08/Burger-280931852.png',
      },
    },
  ];

  return { categories: mockcategories };
}
