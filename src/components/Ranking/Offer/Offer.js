import styles from './offer.module.css'

export default function Offer(props){
    return (
        <div className={styles.container}>
            <div className={styles.ratingFrame}>
                <div className={styles.label}>Rating</div>
                <img src={props.img} alt={props.name} className={styles.ratingIcon}/>
            </div>
            <div className={styles.commentFrame}>
                <div className={styles.label}>Comment</div>
                <div className={styles.comment}>{props.comment}</div>
            </div>
        </div>
    );
}