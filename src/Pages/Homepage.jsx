import React from 'react';
import Layous from "../Layout/Layous.jsx";
import Slidsers from "../Components/template/Slidsers.jsx";
import ItemMain from "../Components/template/ItemMain.jsx";
import Categories from "./Categories.jsx";

function Homepage(props) {
    return (
        <Layous>
            <Slidsers/>
            <ItemMain/>
            <Categories/>

        </Layous>
    );
}

export default Homepage;