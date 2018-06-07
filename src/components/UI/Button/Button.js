import React from 'react';
import classes from './Button.css';

//this Button component was created so we dont have to use html button and write css for 
//them every time. We can use this component any where we need to create button in this app
const button = (props) =>(
    <button
        className ={[classes.Button, classes[props.btnType]].join(' ')}    
        onClick={props.clicked}>{props.children}
    </button>
);

export default button;