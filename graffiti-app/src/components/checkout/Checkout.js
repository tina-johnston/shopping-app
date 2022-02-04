import React from 'react';
import Modal from '../../UI/Modal';
import Cart from '../cart/Cart';
import Total from './Total';
import styles from './Checkout.module.css'

const Checkout = () => {
  return (
    <Modal>
      <div className={styles.container}>
        <Cart />
        <Total />
      </div>
    </Modal>
  );
};

export default Checkout;
