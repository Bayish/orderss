import React from 'react';
import './Count.css';
import {nanoid} from 'nanoid'
const Count = (p) => {
    const CountBlock = props => (
        <li>{props.name}:
            <span>x{props.count} | {props.price}som</span>
            <button className='btn-delete' onClick={() => p.changeMinus(props.name)}/>
        </li>
    );
    return (
        <ul>
            {p.countOfMenu.map(c => {
                if(c.count > 0){
                    return(<CountBlock name={c.name} count={c.count} price={c.count * c.price} key={nanoid()}/>)
                }
            })}
        </ul>
    );
};

export default Count;