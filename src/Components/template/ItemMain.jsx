import React from 'react';
import styles from "../../Styles/StylesItemMain.module.css"
import {Container, Grid} from "@mui/material";


function ItemMain(props) {
    return (

        <div className={styles.items}>
            <Container maxWidth="lg">
                <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                    <Grid item xl={12} lg={12} sm={12} md={12} xs={12}>
                        <div className={styles.itemTEXT}>
                            <span>Who Are We</span>
                            <p></p>
                            <span className={styles.itemstext}>
                                Maecenas faucibus neque nec purus viverra molestie. Sed euismod eleifend faucibus. Maecenas viverra massa quis felis finibus posuere. Cras ut luctus quam. Vestibulum eget lectus id nulla tincidunt posuere. Cras eget vehicula lorem, vel posuere mauris. Etiam sollicitudin elit eget odio sollicitudin posuere. Vivamus quis lorem sit amet eros consequat egestas eu non lorem. Proin convallis rhoncus urna. Fusce vehicula placerat ultrices. Nam id ultricies risus, vitae auctor urna. Curabitur augue felis, semper quis neque auctor, ornare mattis lacus. Maecenas rutrum nisi ac maximus congue. Nunc luctus turpis elementum accumsan molestie.
                            </span>
                        </div>
                    </Grid>
                </Grid>
            </Container>
            <div className={styles.imgback}>
            </div>
        </div>

    );
}

export default ItemMain;