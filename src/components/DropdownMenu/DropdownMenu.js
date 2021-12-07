import styles from './dropdownMenu.module.css'
import { useEffect, useRef } from 'react';

function DropdownMenu(props){
    const ref = useRef(null);

    const handleClickOutside = (event) => {
        if (props.isOpen &&  ref.current && !ref.current.contains(event.target)) {
            props.onClickOutside && props.onClickOutside();
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    });

    return(
        <div ref={ref} className={`${styles.dropdown} ${props.position}`}>
            {props.dropButton}
            {props.isOpen && (
                <div className={`${styles.contentContainer} ${props.contentPosition}`}>
                    {props.content}
                </div>
            )}
        </div>
    );
}

export default DropdownMenu;