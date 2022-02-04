import React from 'react';
import Product from './Product';
import styles from './Products.module.css';

const data = [
  {
    id: '1q',
    image:
      'https://images.pexels.com/photos/5602421/pexels-photo-5602421.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Lorum Ipsum dolor',
    price: 12.5,
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    saved: true,
  },
  {
    id: '1e',
    image:
      'https://cdn.pixabay.com/photo/2012/06/25/15/34/berlin-wall-50727__340.jpg',
    title: 'Lorum Ipsum dolor',
    price: 10.0,
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    saved: true,
  },
  {
    id: '1r',
    image:
      'https://images.pexels.com/photos/2927596/pexels-photo-2927596.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Lorum Ipsum dolor',
    price: 17.2,
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    saved: true,
  },
  {
    id: '1t',
    image:
      'https://images.pexels.com/photos/4551851/pexels-photo-4551851.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Lorum Ipsum dolor',
    price: 11.7,
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    saved: false,
  },
  {
    id: '1y',
    image:
      'https://images.pexels.com/photos/2119706/pexels-photo-2119706.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Lorum Ipsum dolor',
    price: 21.5,
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    saved: false,
  },
  {
    id: '1u',
    image:
      'https://images.pexels.com/photos/4592249/pexels-photo-4592249.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Lorum Ipsum dolor',
    price: 15.5,
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    saved: false,
  },
  {
    id: '1a',
    image:
      'https://images.pexels.com/photos/6558316/pexels-photo-6558316.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Lorum Ipsum dolor',
    price: 10.9,
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    saved: true,
  },
  {
    id: '1s',
    image:
      'https://images.pexels.com/photos/163811/street-art-shipping-container-freight-highway-163811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'Lorum Ipsum dolor',
    price: 22.0,
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    saved: true,
  },
  {
    id: '1d',
    image:
      'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'Lorum Ipsum dolor',
    price: 13.1,
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    saved: true,
  },
];

export const savedProducts = () => {
  return data.filter(product => product.saved)
}

const Products = () => {
  return (
    <div className={styles.container}>
      <section className={styles.grid}>
        {data.map((product) => (
          <Product
            id={product.id}
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            description={product.description}
            saved={product.saved}
          />
        ))}
      </section>
    </div>
  );
};

export default Products;
