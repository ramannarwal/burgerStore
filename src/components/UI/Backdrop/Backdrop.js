import React from 'react';
import classes from './Backdrop.css';

//this is the component will be passed to Modal component
//backdrop component will help to make background darker when the "Order Now" button is clicked
//look at the css file of this component as well. 
// we are adding onClick method so we can click any where on the BackDrop and go back to original state

const backdrop = (props) => (
    //checking if show is true. If yes return the <div> otherwise we return null
    props.showOrder ? <div className ={classes.Backdrop} onClick={props.clicked}></div>: null

);



export default backdrop;