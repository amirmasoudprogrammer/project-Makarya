import React, {useState} from 'react';
import styles from "../Styles/StylesLayout.module.css"
import {Link} from "react-router-dom";
import {Container} from "@mui/material";
import svg from "../assets/Group 45.svg"
import svg2 from "../assets/chevron-down.svg"
import svg3 from "../assets/bars.svg"


const Layous = () => {
    const [active, setActive] = useState(false)
    const [show, setShow] = useState(true)
    const [click, setClick] = useState(false)
    const startShow = () => {
        setShow((prev) => !prev)
    }
    const startclick = () => {
        setClick((prev) => !prev)
    }
    return (
        <>
            <header className={styles.header}>
                <Container maxWidth="lg">
                    <div className={styles.navbar}>
                        <Link to="/" className={styles.linklogo}>
                            <img src={svg} alt="icons" className={styles.logo}/>
                        </Link>
                        <div className={styles.navbarmenu}>
                            {show ? <ul className={styles.Ulliste}>
                                <li onClick={() => setActive((prev) => !prev)} className={active ? active : ""}><Link
                                    to="/">HOME</Link></li>
                                <li onClick={() => setActive((prev) => !prev)} className={active ? active : ""}><Link
                                    to="/">ABOUT US</Link></li>
                                <li><Link to="/">
                                    <div onClick={startclick} className={styles.itemMenu}>
                                        PORTFOLIO
                                        <img src={svg2} alt="icons"/>
                                    </div>
                                    {click ?  <div className={styles.itemNavbar}>
                                        <li><Link to="">PORTFOLIO LIST</Link></li>
                                        <li><Link to="">PORTFOLIO DETAIL</Link></li>
                                    </div> :null }
                                </Link></li>
                                <li><Link to="/">
                                    <div onClick={startclick} className={styles.itemMenu}>
                                        ARTICLE
                                        <img src={svg2} alt="icons"/>
                                    </div>
                                    {click ?  <div className={styles.itemNavbar}>
                                        <li><Link to="">ARTICLE LIST</Link></li>
                                        <li><Link to="">ARTICLE DETAIL</Link></li>
                                    </div> :null}
                                </Link></li>
                                <li><Link to="/">
                                    <div onClick={startclick} className={styles.itemMenu}>
                                        PAGES
                                        <img src={svg2} alt="icons"/>
                                    </div>
                                    {click ? <div className={styles.itemNavbar}>
                                        <li><Link to="">LOGIN</Link></li>
                                        <li><Link to="">REGISTER</Link></li>
                                        <li><Link to="">MY PROFILE</Link></li>
                                        <li><Link to="">PRICING</Link></li>
                                        <li><Link to="">FAQ</Link></li>
                                    </div> :null}
                                </Link></li>
                                <li onClick={() => setActive((prev) => !prev)} className={active ? active : ""}><Link
                                    to="/">CONTACT</Link></li>
                            </ul> : styles.active}
                        </div>
                        <div className={styles.mobile}>
                            <div onClick={startShow} className={styles.itemMenuResponsvie}>
                                <img src={svg3} alt="icon"/>
                            </div>
                        </div>
                    </div>
                </Container>
            </header>
            <footer></footer>

        </>
    );
};

export default Layous;