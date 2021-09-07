import React from 'react';
import './Menu.css';
import {nanoid} from 'nanoid'

const Menu = p => {
    const SetMenu = props => (
        <div onClick={() =>p.changePlus(props.name) }>
            <h2 className={props.name}>{props.name}</h2>
            <p>Price: {props.price}</p>
        </div>
    );

    return p.menu.map(m => (
        <SetMenu key={nanoid()} name={m.name} price={m.price}/>
    ));
};

export default Menu;