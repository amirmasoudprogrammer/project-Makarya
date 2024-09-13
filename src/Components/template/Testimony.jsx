import React, {useEffect, useState} from 'react';
import {Container, Grid} from "@mui/material";
import styles from "../../Styles/StylesTestimony.module.css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Pagination, Navigation} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import api from "../../DATA/api.js";
import CardUsers from "./CardUsers.jsx";
import Loading from "../Modules/Loading.jsx";
import 'swiper/css';


function Testimony(props) {
    const [datauser, setDataUser] = useState([])

    useEffect(() => {
        const DataUser = async () => {
            try {
                setDataUser(await api.get("/users"))
            } catch (error) {
                console.log(error.message)
            }
        }
        DataUser()
    }, [])


    return (
        <>
            <Container maxWidth="lg">
                <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                    <Grid item xl={12} lg={12} sm={12} md={12} xs={12}>
                        <div className={styles.itemTEXT} data-aos="fade-up" data-aos-easing="linear"
                             data-aos-duration="1200">
                            <span>Testimony</span>
                            <p></p>
                        </div>
                    </Grid>
                </Grid>

                <div className={styles.sliderscards}>


                        {
                            datauser ? datauser.users?.map(users => (

                                    <div className={styles.cards}>

                                            <CardUsers {...users}  key={users.id}/>

                                    </div>


                                ))
                                : <Loading/>}



                </div>
            </Container>

        </>
    );
}

export default Testimony;