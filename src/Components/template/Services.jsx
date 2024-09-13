import React, {useEffect} from 'react';
import styles from "../../Styles/StyleServices.module.css"
import {Container, Grid} from "@mui/material";
import svg1 from "../../image/file-image.png"
import svg2 from "../../image/newspaper.png"
import svg3 from "../../image/camera-retro.png"
import Aos from "aos"
import "aos/dist/aos.css"
import {Link} from "react-router-dom";


function Services(props) {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <>
            <Container maxWidth="lg">
                <div className={styles.ItemServices}>
                    <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                        <Grid item xl={12} lg={12} sm={12} md={12} xs={12}>
                            <div className={styles.itemTEXT} data-aos="fade-up" data-aos-easing="linear"
                                 data-aos-duration="1500">
                                <span>Our Services</span>
                                <p></p>
                            </div>
                        </Grid>
                    </Grid>
                    <div className={styles.Services}>
                        <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}} mt={10}>
                            <Grid item xl={4} lg={4} sm={12} md={12} xs={12} textAlign="center" data-aos="zoom-in-up"
                                  data-aos-easing="linear"
                                  data-aos-duration="1600">
                                <div className={styles.CardServices}>
                                    <div className={styles.imgCarda}>
                                        <img src={svg3} alt=""/>
                                    </div>
                                    <span>Branding</span>
                                    <p>
                                        Maecenas faucibus neque nec purus viverra molestie. Sed euismod eleifend
                                        faucibus. Maecenas viverra massa quis felis finibus posuere. Cras ut luctus
                                        quam. Vestibulum eget lectus id nulla tincidunt posuere. Cras eget vehicula
                                        lorem, vel posuere mauris. Etiam sollicitudin elit eget odio sollicitudin
                                        posuere. Vivamus quis lorem sit amet eros consequat egestas eu non lorem. Proin
                                        convallis rhoncus urna. Fusce vehicula placerat ultrices.
                                    </p>
                                </div>
                            </Grid>
                            <Grid item xl={4} lg={4} sm={12} md={12} xs={12} textAlign="center" data-aos="zoom-in-up"
                                  data-aos-easing="linear"
                                  data-aos-duration="1500">
                                <div className={styles.CardServices}>
                                    <div className={styles.imgCarda}>
                                        <img src={svg2} alt=""/>
                                    </div>
                                    <span>Print Design</span>
                                    <p>
                                        Maecenas faucibus neque nec purus viverra molestie. Sed euismod eleifend
                                        faucibus. Maecenas viverra massa quis felis finibus posuere. Cras ut luctus
                                        quam. Vestibulum eget lectus id nulla tincidunt posuere. Cras eget vehicula
                                        lorem, vel posuere mauris. Etiam sollicitudin elit eget odio sollicitudin
                                        posuere. Vivamus quis lorem sit amet eros consequat egestas eu non lorem. Proin
                                        convallis rhoncus urna. Fusce vehicula placerat ultrices.
                                    </p>
                                </div>
                            </Grid>
                            <Grid item xl={4} lg={4} sm={12} md={12} xs={12} textAlign="center" data-aos="zoom-in-up"
                                  data-aos-easing="linear"
                                  data-aos-duration="1400">
                                <div className={styles.CardServices}>
                                    <div className={styles.imgCarda}>
                                        <img src={svg1} alt=""/>
                                    </div>
                                    <span>Photography</span>
                                    <p>
                                        Maecenas faucibus neque nec purus viverra molestie. Sed euismod eleifend
                                        faucibus. Maecenas viverra massa quis felis finibus posuere. Cras ut luctus
                                        quam. Vestibulum eget lectus id nulla tincidunt posuere. Cras eget vehicula
                                        lorem, vel posuere mauris. Etiam sollicitudin elit eget odio sollicitudin
                                        posuere. Vivamus quis lorem sit amet eros consequat egestas eu non lorem. Proin
                                        convallis rhoncus urna. Fusce vehicula placerat ultrices.
                                    </p>

                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>

                <div className={styles.buttons}>
                    <button>
                        <Link to="/">PRICING PLAN</Link>
                    </button>

                </div>

            </Container>
        </>
    );
}

export default Services;