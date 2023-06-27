import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import React from 'react';
import { Link } from 'react-router-dom';
import './menu.scss';

const Menu = (props) => {

    let allButtons = [];
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (
        event,
        newAlignment,
    ) => {
        setAlignment(newAlignment);
    };

    return <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        
        className='topMenu'
    >
        {props.menu.map((item, key) => {
            let button = <ToggleButton selected={window.location.pathname === item.link} component={Link} key={key} value={key} to={item.link}>{item.name}</ToggleButton>;

            allButtons.push(button);
            return button
        })}
    </ToggleButtonGroup>
}


export default Menu;