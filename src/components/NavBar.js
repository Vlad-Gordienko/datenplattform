import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <nav className="navbar">
            <div className="logo-container">
                <img
                    src="https://wetteraukreis.de//typo3conf/ext/wmdb_base_wetterau/Resources/Public/Img/logo.svg"
                    alt="Logo"
                    className="logo"
                />
                <div className="logo-text">
                    <h1>Wetteraukreis</h1>
                    <p>gold. richtig.</p>
                </div>
            </div>
            <div className="menu">
                <Link to="/">Startseite</Link>
                <Link to="/bar">Balkendiagramm</Link>
                <Link to="/pyramid">Bevölkerungspyramide</Link>
                <Link to="/statistik">Statistik</Link>
            </div>
        </nav>
    );
}

export default NavBar;
