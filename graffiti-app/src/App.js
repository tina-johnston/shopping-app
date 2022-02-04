import { useSelector } from 'react-redux';
import Checkout from './components/checkout/Checkout';
import Products from './components/products/Products';
import Saved from './components/saved-items/Saved';
import Layout from './layout/Layout';

function App() {
  const toggleCheckout = useSelector((state) => state.ui.openCheckout);
  const togglePage = useSelector((state) => state.ui.toggleProductPage);
  return (
    <Layout>
      {!togglePage ? <Products /> : <Saved />}
      {toggleCheckout && <Checkout />}
    </Layout>
  );
}

export default App;
