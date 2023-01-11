import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLanguage from '../../hook/useLanguage'
import LangToggler from '../LangToggler'
import './index.css'
import superhealthapp from '../../assets/superhealthapp.png'

function Navbar() {

    const [isMobile, setIsMobile] = useState(false);
    const updateIsMobile = () => setIsMobile(window.innerWidth <= 600);

    
    React.useEffect(() => {
        updateIsMobile();
        window.addEventListener("resize", updateIsMobile);
        return () => window.removeEventListener("resize", updateIsMobile);
    }, []);

    const text = useLanguage()
    return (
        <header>
            <nav>
                <div className="logo">
                    <img src={superhealthapp} height="70px" width="80px" alt="logo"></img>
                </div>
                <ul className='topnav' id='myTopNav'>
                    <li>
                        <Link to="/">{text.nav.home}</Link>
                    </li>
                    
                    <li>
                    <Link to="/break">{text.nav.break}</Link> 
                    </li>
                    <li>
                        <Link to="/bmi">{text.nav.bmi}</Link>
                    </li>
                    <li>
                        <Link to="/calorie">{text.nav.calorie}</Link>
                    </li>
                    <li>
                        {!isMobile && <Link to="/article">{text.nav.article}</Link>}
                    </li>
                    <li>
                        {!isMobile && <Link to="/about">{text.nav.about}</Link>}
                    </li>
                    <li>
                        <LangToggler />
                    </li>

                </ul>
            </nav>


        </header>
    )
}

export default Navbar

