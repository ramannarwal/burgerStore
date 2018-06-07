import React from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop'

//THis component is the pop up when you press "Order Now".
// we are adding modalClosed property that is coming from BurgerBuilder.js

const modal =(props) => (
    <Aux>
       <Backdrop showOrder={props.showOrder} clicked = {props.modalClosed}/>
        <div className ={classes.Modal} 
            style={{transform: props.showOrder ? 'translateY(0)': 'translateY(-100vh)',
            opacity: props.showOrder ? '1':'0'
         }}>
             {props.children}
        </div>  
    </Aux>
);


export default modal;
