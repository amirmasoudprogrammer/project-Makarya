import React from 'react';
import {Route , Routes} from "react-router-dom";
import Homepage from "../Pages/Homepage.jsx";
import CategoriesAll from "../Components/template/CategoriesAll.jsx";



function Routers(props) {
    return (
        <>

            <Routes>

                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/CategoriesAll" element={<CategoriesAll/>}/>


            </Routes>


        </>
    );
}

export default Routers;