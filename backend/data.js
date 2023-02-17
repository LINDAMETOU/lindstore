import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Lindouce',
      email: 'lindoucemetou@yahoo.fr',
      password: bcrypt.hashSync('220694'),
      isAdmin: true,
    },
    {
      name: 'Linda',
      email: 'lindametou@yahoo.fr',
      password: bcrypt.hashSync('220694'),
      isAdmin: false,
    },
  ],

  products: [
    {
      name: 'Eru',
      slug: 'eru',
      category: 'Foods',
      image: '/images/eru.jpg',
      price: 5,
      countInStock: 50,
      origin: 'Cameroon',
      description: 'fresh vegetable',
    },
    {
      name: 'Necklace',
      slug: 'necklace',
      category: 'Accessories',
      image: '/images/chaine1.jpg',
      price: 15,
      countInStock: 25,
      origin: 'Cameroon',
      description: 'high quality',
    },
    {
      name: 'Sandal',
      slug: 'sandal',
      category: 'Shoes',
      image: '/images/sandal1.jpg',
      price: 25,
      countInStock: 0,
      origin: 'Cameroon',
      description: 'high quality',
    },
    {
      name: 'Shirt',
      slug: 'shirt',
      category: 'Clothes',
      image: '/images/gang1.jpg',
      price: 10,
      countInStock: 50,
      origin: 'Cameroon',
      description: 'high quality',
    },
  ],
};
export default data;
