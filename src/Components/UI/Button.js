import React from 'react';
import buttonClasses from './Button.module.css'

const Button=(props)=>{
    return(<button className={buttonClasses.button} type={props.type || 'button'} onClick={props.onClick}>{props.children} </button>)
 
};

export default Button;