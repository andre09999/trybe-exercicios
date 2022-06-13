import React from "react";

import foto from "./img/samsung.jpg";

class Cabe extends React.Component {
    render() {
        return (
            <header className='header'>
                <img src={ foto } alt='logo' className='logo'/>
                <h1>Cabeçalho</h1>
                <ul className='menu'>
                    <li className='items' > <a href="http://www.google.com" className="navega" target='_blank' rel="noreferrer"> Home </a> </li>
                    <li className='items' > <a href="http://www.youtube.com" className="navega" target="_blank" rel="noreferrer"> youtube </a> </li>
                </ul>
            </header>
        )
    }
};

export default Cabe;
