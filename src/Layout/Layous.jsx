import React from 'react';
import styles from "../Styles/StylesLayout.module.css"
import {Link} from "react-router-dom";
import {Container, Grid} from "@mui/material";
import svg from "../assets/Group 45.svg"
import {FaAngleDown} from "react-icons/fa";


const Layous = () => {


    return (
        <>
            <header className={styles.header}>
                <Container maxWidth="lg">
                    <div className={styles.navbar}>
                        <Link to="/" className={styles.linklogo}>
                            <img src={svg} alt="icons" className={styles.logo}/>
                        </Link>
                        <div className={styles.navbarmenu}>
                            <Grid container display="flex" alignItems="center" justifyContent="space-between"
                                  width="650px">
                                <Grid item xl={2} lg={2} className={styles.itemGrid}><Link to="/">HOME</Link></Grid>
                                <Grid item xl={2} lg={2} className={styles.itemGrid}><Link to="/">ABOUT US</Link></Grid>
                                <Grid item xl={2} lg={2} className={styles.itemGrid}>
                                    <Link to="/">PORTFOLIO <FaAngleDown/></Link>
                                    <div className={styles.clickitem}>
                                        <li><Link to="">
                                            PORTFOLIO LIST
                                        </Link></li>
                                        <li><Link to="">
                                            PORTFOLIO DETAIL
                                        </Link></li>
                                    </div>
                                </Grid>
                                <Grid item xl={2} lg={2} className={styles.itemGrid}><Link to="/">ARTICLE <FaAngleDown/></Link>
                                    <div className={styles.clickitem}>
                                        <li><Link to="">
                                            ARTICLE LIST
                                        </Link></li>
                                        <li><Link to="">
                                            ARTICLE DETAIL
                                        </Link></li>
                                    </div>
                                </Grid>
                                <Grid item xl={2} lg={2} className={styles.itemGrid}><Link
                                    to="/">PAGES <FaAngleDown/></Link>
                                    <div className={styles.clickitem}>
                                        <li><Link to="">
                                            LOGIN
                                        </Link></li>
                                        <li><Link to="">
                                            REGISTER
                                        </Link></li>
                                        <li><Link to="">
                                            MY PROFILE
                                        </Link></li>
                                        <li><Link to="">
                                            PRICING
                                        </Link></li>
                                        <li><Link to="">
                                            FAQ
                                        </Link></li>
                                        <li><Link to="">
                                            404 PAGE
                                        </Link></li>
                                    </div>
                                </Grid>
                                <Grid item xl={2} lg={2} className={styles.itemGrid}><Link to="/">CONTACT</Link></Grid>

                            </Grid>
                        </div>
                    </div>
                </Container>
            </header>
            <footer></footer>

        </>
    );
};

export default Layous;