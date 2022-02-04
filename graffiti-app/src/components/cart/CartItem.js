import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import HeartIcon from '../../icons/HeartIcon'
import Button from '../../UI/Button';
import styles from './CartItem.module.css';

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { id, image, title, price, totalQuantity } = props;

  const removeHandler = () => {
    dispatch(cartActions.removeFromCart(id));
  };

  const addHandler = () => {
    dispatch(
      cartActions.addToCart({
        id,
        title,
        price,
        totalQuantity,
      })
    );
  };

  return (
    <>
      <li className={styles['cart-item']}>
        <img className={styles.image} src={image} alt={title} />
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.price}>£{price.toFixed(2)}</h3>
        <div className={styles.actions}> 
          <Button onClick={addHandler}>+</Button>
          <h3>{totalQuantity}</h3>
          <Button onClick={removeHandler}>-</Button>
        </div>
        <Button className={styles.btn}><HeartIcon />save for later</Button>
      </li>
    </>
  );
};

export default CartItem;
