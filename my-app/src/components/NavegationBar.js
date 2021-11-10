import React from 'react';
import './NavegationBar.css';
const NavegationBar = () => {
    return (
        <div className='navContainer'>
            <ul>
                <li> <a href="#"> home </a></li>
                <li> <a href="#"> about </a></li>
                <li><a href="#" className="signin"> sign in </a></li>
            </ul>
            
        </div>
    );
};

export default NavegationBar;

//https://jsonplaceholder.typicode.com/users