import React, {useEffect, useState} from 'react';
import styles from "../Styles/StyleCategories.module.css"
import api from "../DATA/api.js";
import Cards from "../Components/template/Cards.jsx";
import {Container, Grid} from "@mui/material";
import {Link} from "react-router-dom";


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
    }, [])

const DataApi = data.slice(1,7)

    return (
        <Container maxWidth="lg">
            <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                <Grid item xl={12} lg={12} sm={12} md={12} xs={12}>
                    <div className={styles.Categories}>
                        <div className={styles.itemText}>
                            <span>Who Are We</span>
                            <p></p>
                        </div>
                    </div>
                </Grid>
            </Grid>
            <div className={styles.CategoriesItems}>
                <Grid container mt={5}>
                    {
                        DataApi.map((Data) => (
                            <>

                                <Grid item xl={4} lg={4} md={6} sm={12} xs={12}><Cards data={Data} key={Data.id}/></Grid>


                            </>
                        ))
                    }
                </Grid>
                <button className={styles.buttonAll}> <Link to="/CategoriesAll">VIEW ALL </Link></button>
            </div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
        </Container>
    )
        ;
}

export default Categories;
