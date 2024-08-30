import React,{useState , useEffect} from 'react';
import {Container, Grid} from "@mui/material";
import Cards from "./Cards.jsx";
import api from "../../DATA/api.js";

function CategoriesAll(props) {
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
    return (
        <Container maxWidth="lg">
            <Grid container mt={5}>
                {
                    data.map((Data) => (
                        <>

                            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}><Cards data={Data} key={Data.id}/></Grid>


                        </>
                    ))
                }
            </Grid>
        </Container>
    );
}

export default CategoriesAll;