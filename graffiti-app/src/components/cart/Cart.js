import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import CartItem from './CartItem';
import Button from '../../UI/Button';

import styles from './Cart.module.css';
import Card from '../../UI/Card';

const Cart = () => {
  const dispatch = useDispatch();

  const toggleCheckoutHandler = () => {
    dispatch(uiActions.checkout());
  };
  const cartItems = useSelector((state) => state.cart.products);
  return (
    <Card className={styles.content}>
      <h2 className={styles.title}>Shopping Cart</h2>
      <ul className={styles['cart-items']}>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            totalQuantity={item.totalQuantity}
          />
        ))}
      </ul>
      <Button onClick={toggleCheckoutHandler} className={styles.btn}>
        continue shopping
      </Button>
    </Card>
  );
};

export default Cart;
