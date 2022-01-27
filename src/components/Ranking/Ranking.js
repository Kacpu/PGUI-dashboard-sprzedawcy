import React from "react";
import Offer from "./Offer/Offer";
import styles from './Ranking.module.css'

export default function Ranking(props) {
    const offers = props.offers.slice(0, 5).map((o, index) =>
        <React.Fragment>
            <Offer
                key={o.id}
                img={o.img}
                name={o.name}
                pcs={o.pcs}
                earning={o.earning}
            />
            {
                index !== 4 ? <hr className={styles.divider}/> : null
            }
        </React.Fragment>
    );

    return (
        <div className={styles.container}>
            {offers}
        </div>
    );
}