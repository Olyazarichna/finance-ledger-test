import styles from './Backdrop.module.scss';

const BackDrop=({onClick})=>{
    return(
        <div className={styles.backdrop} onClick={onClick}></div>
    )
}

export default BackDrop;