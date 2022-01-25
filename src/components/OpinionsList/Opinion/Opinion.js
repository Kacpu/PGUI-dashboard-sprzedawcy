import styles from './opinion.module.css'
import positiveIcon from "../../../assets/icons/green-smile.png";
import negativeIcon from '../../../assets/icons/red-angry.png'

export default function Opinion(props){
    return (
        <div className={styles.container}>
            <div className={styles.ratingFrame}>
                <div className={styles.label}>Rating</div>
                <img src={props.rating === 1 ? positiveIcon : negativeIcon} alt={props.rating} className={styles.ratingIcon}/>
            </div>
            <div className={styles.commentFrame}>
                <div className={styles.label}>Comment</div>
                <div rows={2} readOnly={true} className={styles.comment}>{props.comment}</div>
            </div>
        </div>
    );
}