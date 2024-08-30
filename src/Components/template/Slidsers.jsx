import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {EffectFade, Navigation, Pagination} from 'swiper/modules';
import styles from "../../Styles/StyleSliders.module.css"
import {Container} from "@mui/material";
import img1 from "../../image/rawpixel-558599-unsplash.png"
import img2 from "../../image/leone-venter-559377-unsplash.png"



function Slidsers() {
    return (
        <div className={styles.itemslider}>
            <Swiper spaceBetween={30} effect={'fade'} navigation={true} pagination={{
                    clickable: true,
                }} modules={[EffectFade, Navigation, Pagination]} className="mySwiper">
                <Container maxWidth="lg">
                <SwiperSlide>
                    <div className={styles.imgItems}>
                        <div className={styles.textitems}>
                            <span>
                                Make it Happen
                            </span>
                            <p>
                                Got a lot of idea to be realized? Tell it to the right one to make it happen!
                                And fortunately, that right one is just in front of you.
                            </p>
                        </div>
                        <img className={styles.img} src={img1} alt="img"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.imgItems}>
                        <div className={styles.textitems}>
                            <span>
                                Make it Happen
                            </span>
                            <p>
                                Got a lot of idea to be realized? Tell it to the right one to make it happen!
                                And fortunately, that right one is just in front of you.
                            </p>
                        </div>
                        <img className={styles.img} src={img2} alt="img"/>
                    </div>

                </SwiperSlide>
                </Container>
            </Swiper>
        </div>

    );
}

export default Slidsers;