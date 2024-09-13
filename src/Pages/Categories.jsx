import React, {useEffect, useState} from 'react';
import styles from "../Styles/StyleCategories.module.css"
import api from "../DATA/api.js";
import Cards from "../Components/template/Cards.jsx";
import {Container, Grid} from "@mui/material";
import {Link} from "react-router-dom";
import Aos from "aos"
import "aos/dist/aos.css"



function Categories(props) {

    const [data, setData] = useState([])


    useEffect(() => {
        const itemdata = async () => {
            try {
                setData(await api.get("/products"))
            } catch (error) {
                console.log(error.message)
            }
        }
        itemdata()

        Aos.init()
    }, [])


    return (
        <Container maxWidth="lg">
            <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                <Grid item xl={12} lg={12} sm={12} md={12} xs={12}>
                    <div className={styles.Categories}>
                        <div className={styles.itemText} data-aos="fade-up">
                            <span>Who Are We</span>
                            <p></p>
                        </div>
                    </div>
                </Grid>
            </Grid>
            <div className={styles.CategoriesItems}>
                <Grid container mt={5} data-aos="fade-up" data-aos-easing="linear"
                      data-aos-duration="1500">
                    {
                        data.products?.slice(1, 7).map((Data) => (
                            <>

                                <Grid item xl={4} lg={4} md={6} sm={12} xs={12} data-aos="fade-up"  key={Data.id}><Cards data={Data}/></Grid>


                            </>
                        ))
                    }
                </Grid>
                <button className={styles.buttonAll}><Link to="/CategoriesAll">VIEW ALL </Link></button>
            </div>

        </Container>
    )
        ;
}

export default Categories;
