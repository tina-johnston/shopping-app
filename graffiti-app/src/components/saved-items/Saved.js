import {savedProducts} from '../products/Products'

const Saved = (props) => {

  const saved =savedProducts()

  if (saved){
    
  }
  return <h1>saved products</h1>;
};

export default Saved;
