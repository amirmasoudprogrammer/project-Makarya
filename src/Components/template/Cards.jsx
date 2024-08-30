import React from 'react';
import {Link} from "react-router-dom";
import styles from "../../Styles/StylesCards.module.css"
import {Container} from "@mui/material";
import text from "../../Helper.js";


function Cards({data}) {
    const {id, images, category , title} =data
    return (
        <Container maxWidth="lg">
            <Link to={`/Categories/${id}`} className={styles.ItemCards}>
                <img src={images} alt="img"/>
             <div className={styles.CARDbottom}>
                 <div className={styles.ItemText}>
                     <span>{category.name}</span>
                     <p>{text(title)}</p>
                 </div>
                 <div className={styles.Buttons}>
                     <button><Link to={`/Categories/${id}`}>View</Link></button>
                 </div>
             </div>
            </Link>
        </Container>

    );
}

export default Cards;