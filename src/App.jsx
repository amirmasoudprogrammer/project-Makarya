import React from 'react';
import Layous from "./Layout/Layous.jsx";
import img1 from "../src/assets/rawpixel-558599-unsplash.png"


const App = () => {
    return (
        <div>
            <Layous/>
            <img src={img1} alt="" width="100%"/>
        </div>
    );
};

export default App;