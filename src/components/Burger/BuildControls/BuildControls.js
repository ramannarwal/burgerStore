import React from 'react';
import classes from './BuildControls.css';
import ControlButton from './ControlButtons/ControlButtons'
//
const controlsList =[
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

const buildControls = (props) => (
        <div className={classes.BuildControls}> 
            <h2> Current Price: ${props.price.toFixed(2)}</h2>
                {controlsList.map(control=>(
                <ControlButton 
                    key={control.label} 
                    label={control.label}
                    added={() => props.ingredientAdded(control.type)}
                    removed= {() => props.ingredientRemoved(control.type)}
                    disabled ={props.disabled[control.type]}/>
                ))}
            <button 
                className={classes.OrderButton}
                disabled={!props.purchaseable} 
                onClick= {props.ordered}>Order Now</button>
        </div>
);


export default buildControls;