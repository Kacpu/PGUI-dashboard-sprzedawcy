import userEvent from '@testing-library/user-event';
import {BiMenu} from 'react-icons/bi';
import styles from './navHeaderButton.module.css';

export default function NavHeaderButton(props){

    return(
        <button className={`${styles.btn} ${props.style}`}>
            {props.icon}
        </button>
    );
}