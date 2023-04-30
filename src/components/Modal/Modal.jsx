import styles from './Modal.module.scss';


const Modal=({ onClose }) =>{
    return (
  <div className={styles.modal}>
        <div className={styles.modalContent}>
        <p className={styles.text}>Thank you!</p>
          <p className={styles.text}>Your form submission has been received.</p>
          <button className={styles.btn} onClick={onClose}>x</button>
        </div>
      </div>  
    );
  }

  export default Modal;