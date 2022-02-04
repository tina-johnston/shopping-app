import styles from './Product.module.css';
import HeartIcon from '../../icons/HeartIcon';
import Card from '../../UI/Card';
import Button from '../../UI/Button';

import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const Product = (props) => {
  const { id, image, title, description, price } = props;
  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(
      cartActions.addToCart({
        id,
        title,
        image,
        price,
      })
    );
  };

  return (
    <Card className={styles['product-card']}>
      <img className={styles.image} src={image} alt={title} />
      <h1 className={styles.title}>{title}</h1>
      <h3 className={styles.price}>£{price.toFixed(2)}</h3>
      <p>{description}</p>
      <span className={styles.action}>
        <Button className={styles.btn} onClick={addHandler}>
          add to cart
        </Button>
        <Button className={styles.icon}>
          <HeartIcon />
        </Button>
      </span>
    </Card>
  );
};

export default Product;
