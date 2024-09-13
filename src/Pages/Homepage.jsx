import React from 'react';
import Layous from "../Layout/Layous.jsx";
import Slidsers from "../Components/template/Slidsers.jsx";
import ItemMain from "../Components/template/ItemMain.jsx";
import Categories from "./Categories.jsx";
import Services from "../Components/template/Services.jsx";
import styles from "../Styles/StyleHomePage.module.css"
import Testimony from "../Components/template/Testimony.jsx";

function Homepage(props) {
    return (
        <Layous>
            <Slidsers/>
            <ItemMain/>
            <Categories/>
            <div className={styles.border}></div>
            <Services/>
            <div className={styles.border}></div>
            <Testimony/>
        </Layous>
    );
}

export default Homepage;