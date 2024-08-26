import React from 'react';
import {Route , Routes} from "react-router-dom";
import {Abouts} from "../Components/Abouts";
import Homepage from "../Pages/Homepage.jsx";



function Routers(props) {
    return (
        <>

            <Routes>

                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/Abouts" element={<Abouts/>}/>

            </Routes>


        </>
    );
}

export default Routers;