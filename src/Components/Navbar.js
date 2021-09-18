import React from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css';
import {useState} from 'react';
function Navbar() {
    const [show,setshow] = useState(false);
    console.log(show);
    return (
        <nav>
            <h1>Ak news</h1>
            <a className="toggle-button" onClick={()=>{setshow(!show)}}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
            <ul className={show? "Itemsnew":"Items"}>
                <Link to="/">
                <a id="pages">Home</a>
                </Link>
                <Link to="/Sports">
                <a id="pages">Sports</a>
                </Link>
                <Link to="/Covid">
                <a id="pages">Covid</a>
                </Link>
                <Link to="/Finance">
                <a id="pages">Finance</a>
                </Link>
            </ul>
        </nav>
    )
}
export default Navbar
