import React from 'react';
import classes from './ControlButtons.css';


const ControlButtons = (props) => (
    <div className = {classes.ControlButtons}>
        <div className={classes.ControlButtons}>{props.label}</div>
        <button className= {classes.Remove} 
            onClick={props.removed} 
            disabled= {props.disabled}>Remove
        </button>
        <button className= {classes.Add} 
            onClick={props.added}>Add
        </button>
    </div>
);

export default ControlButtons;