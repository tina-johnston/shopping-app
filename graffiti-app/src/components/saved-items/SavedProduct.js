import React from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import styles from './SavedProduct.module.css'
import Button from '../../UI/Button';
import Card from '../../UI/Card';

const SavedProduct = (props) => {
  const dispatch = useDispatch()
  const {id, title, image, price, description,} = props

  const addHandler = () => {
    dispatch(cartActions.addToCart({
      id,
      title,
      image,
      price,
    }))
  };
  return <Card className={styles['product-card']}>
  <img className={styles.image} src={image} alt={title} />
  <h1 className={styles.title}>{title}</h1>
  <h3 className={styles.price}>£{price.toFixed(2)}</h3>
  <p>{description}</p>
  <span className={styles.action}>
    <Button className={styles.btn} onClick={addHandler}>
      add to cart
    </Button>
    <Button className={styles.btn} >
      unsave
    </Button>
  </span>
</Card>;
};

export default SavedProduct;
