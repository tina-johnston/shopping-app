import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { uiActions } from '../store/ui-slice';
import styles from './Modal.module.css';

const Modal = (props) => {
  const dispatch = useDispatch();

  const toggleCheckoutHandler = () => {
    dispatch(uiActions.checkout());
  };
  const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={toggleCheckoutHandler} />;
  };

  const ModalOverLay = (props) => {
    return (
      <div className={styles.modal}>
        <div >{props.children}</div>
      </div>
    );
  };

  const portalElement = document.getElementById('overlays');

  return (
    <div>
      {ReactDOM.createPortal(
        <Backdrop onClick={toggleCheckoutHandler} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverLay>{props.children}</ModalOverLay>,
        portalElement
      )}
    </div>
  );
};

export default Modal;
