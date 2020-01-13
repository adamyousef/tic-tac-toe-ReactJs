import React from 'react';
import './Square.css';

const Square = (props) => {
    return(
        <button 
         className='btn'
         onClick={props.clicked}>
             {props.value}
        </button>
    );

}
export default Square;