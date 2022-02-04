import { useSelector } from 'react-redux';
import Button from '../../UI/Button';
import Card from '../../UI/Card';
import styles from './Total.module.css'

const Total = (props) => {
  
  const subTotal = useSelector(state => state.cart.subTotal)
  return (
    <Card className={styles.checkout}>
      <h2>Total</h2>
      <h3>Subtotal</h3>
      <h3>£{Math.abs(subTotal).toFixed(2)}</h3>
      <Button>Checkout</Button>
    </Card>
  );
};

export default Total;