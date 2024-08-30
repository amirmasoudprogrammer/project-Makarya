import React from 'react';
import styles from "../../Styles/Loading.module.css"

function Loading(props) {
    return (
        <div className={styles.Loading}>
            <div className={styles.loader}></div>
        </div>
    )
}

export default Loading;