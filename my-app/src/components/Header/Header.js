import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className='header'>
            <div className='header_inner'>
                {/*<img className='header_logo' src='https://i.dlpng.com/static/png/6738701_preview.png'/>*/}
                <div className="headerText">VIOLET TEST</div>
                <div className='login'>LOGIN</div>
            </div>
        </header>
    );
}

export default Header;