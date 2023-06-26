import {
    Link
} from 'react-router-dom';
import React from 'react';
import './menu.scss';

const Menu = (props) => {
    return <div className='menu'>{props.menu.map((item, key) => {
        return <Link key={key} to={item.link}>{item.name}</Link>
    })}</div>;
}


export default Menu;