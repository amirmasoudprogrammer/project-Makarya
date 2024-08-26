import React, {useState} from 'react';
import styles from "../Styles/StylesLayout.module.css"
import {Link, Outlet} from "react-router-dom";
import {Container} from "@mui/material";
import svg from "../image/Group 45.svg"
import svg2 from "../image/chevron-down.svg"
import svg3 from "../image/bars.svg"
import svg4 from "../image/dribbble.svg"
import svg5 from "../image/facebook-square.svg"
import svg6 from "../image/instagram.svg"
import svg7 from "../image/linkedin.svg"
import svg8 from "../image/medium.svg"
import svg9 from "../image/twitter.svg"


const Layous = ({children}) => {
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
                                    {click ? <div className={styles.itemNavbar}>
                                        <li><Link to="">PORTFOLIO LIST</Link></li>
                                        <li><Link to="">PORTFOLIO DETAIL</Link></li>
                                    </div> : null}
                                </Link></li>
                                <li><Link to="/">
                                    <div onClick={startclick} className={styles.itemMenu}>
                                        ARTICLE
                                        <img src={svg2} alt="icons"/>
                                    </div>
                                    {click ? <div className={styles.itemNavbar}>
                                        <li><Link to="">ARTICLE LIST</Link></li>
                                        <li><Link to="">ARTICLE DETAIL</Link></li>
                                    </div> : null}
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
                                    </div> : null}
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
            <div className={styles.main}>
                {children}
                <Outlet/>
            </div>
            <footer className={styles.footer}>
                <Container>
                    <div className={styles.itemFooter}>
                        <div className={styles.titles}>
                            <Link to="/">
                                <img src={svg} alt="icon"/>
                            </Link>
                            <div className={styles.textfooter}>
                                <p>With supporting text below as a natural lead-in to additional content. Lorem ipsum
                                    and
                                    something else.</p>
                            </div>
                            <div className={styles.footertextend}>
                            <span>
                                Special Region of Yogyakarta
                                Indonesia
                                <br/>
                                (027) 333333

                            </span>
                            </div>
                        </div>
                        <div className={styles.itemMenufooter}>
                            <div className={styles.menuFooter}>
                                <ul className={styles.ulListe}>
                                    <h3>Home</h3>
                                    <p className={styles.p}>About Us</p>
                                    <li className={styles.itemLI}>
                                        <Link className={styles.titlemenu} to="">Portfolio</Link>
                                        <div className={styles.Listeitems}>
                                            <li><Link to="">Portfolio List</Link></li>
                                            <li><Link to="">Portfolio Detail</Link></li>

                                        </div>
                                    </li>
                                    <li className={styles.itemLI}>
                                        <Link className={styles.titlemenu} to="">Article</Link>
                                        <div className={styles.Listeitems}>
                                            <li><Link to="">Article List</Link></li>
                                            <li><Link to="">Article Detail</Link></li>
                                        </div>
                                    </li>
                                </ul>
                                <ul className={styles.ULlisteEnd}>
                                    <p className={styles.p}>Pages</p>
                                    <li><Link to="">Login</Link></li>
                                    <li><Link to="">Register</Link></li>
                                    <li><Link to="">My Profile</Link></li>
                                    <li><Link to="">Pricing</Link></li>
                                    <li><Link to="">FAQ</Link></li>
                                    <li><Link to="">404 Page</Link></li>
                                    <h3>Contact</h3>

                                </ul>
                            </div>
                            <div className={styles.linkpages}>
                                <h3>Follow us on :</h3>
                                <div className={styles.pageitems}>
                                    <Link to="/"><img src={svg7} alt="icon"/></Link>
                                    <Link to="/"><img src={svg4} alt="icon"/></Link>
                                    <Link to="/"><img src={svg8} alt="icon"/></Link>
                                    <Link to="/"><img src={svg5} alt="icon"/></Link>
                                    <Link to="/"><img src={svg9} alt="icon"/></Link>
                                    <Link to="https://instagram.com/mramirmasoud.ir"><img src={svg6} alt="icon"/></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </footer>

        </>
    );
};

export default Layous;