import React from 'react';
import {Link} from "react-router-dom";
import styles from "../../Styles/CardUsers.module.css"
import svg1 from "../../image/Group 185.svg"

function CardUsers(props) {

    return (
            <Link to="" className={styles.cards}>
                <div className={styles.star}>
                    <img src={svg1} alt="icon"/>
                </div>
                <div className={styles.CARDPROFIL}>
                    <img src={props.avatar ? props.avatar :"https://i.imgur.com/DTfowdu.jpg"} alt="img"/>
                    <h3>{props.email}</h3>
                    <span>({props.role})</span>
                    <p>With supporting text below as a natural lead-in to additional content.</p>
                </div>
            </Link>

    );
}

export default CardUsers;