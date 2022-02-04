import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../store/ui-slice';
import Button from '../UI/Button';
import HeartIcon from '../icons/HeartIcon';
import CartIcon from '../icons/CartIcon';
import styles from './Header.module.css';

const Header = () => {
  const dispatch = useDispatch()

  const showCart = () => {
    dispatch(uiActions.checkout())
  }

  const togglePage = () => {
    dispatch(uiActions.togglePage())
  }
  const totalCart = useSelector((state) => state.cart.quantity);
  return (
    <header className={styles.header}>
      <h1>graffiti art</h1>
      <div>
        <Button className={styles.btn} onClick={togglePage}>
          <HeartIcon />
        </Button>
        <Button className={styles.btn} onClick={showCart}>
          <span>
            <CartIcon />
          </span>
          <span className={styles.count}>{totalCart}</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
