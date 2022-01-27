import styles from './offer.module.css'

export default function Offer(props){
    return (
        <div className={styles.container}>
            <div className={styles.imgFrame}>
                <img src={props.img} alt={props.name} className={styles.imgFrame}/>
            </div>
            <div className={styles.comment}>{props.name}</div>
            <div className={styles.comment}>{props.pcs}</div>
            <div className={styles.comment}>{props.earning}</div>
        </div>
    );
}