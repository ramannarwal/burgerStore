import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerIngredient.css';

class BurgerIngredient extends Component {
    render(){
    const {type} = this.props;
    let ingredient = null;
        //Since this component is building using class we need to use this.props
    switch(type){
        case ('bread-bottom'):
            ingredient = <div className = {classes.BreadBottom}></div>
            break;
        case('bread-top'):
            ingredient = (
                <div className = {classes.BreadTop}>
                    <div className = {classes.Seeds1}></div>
                    <div className = {classes.Seeds2}></div>
                </div>
            );
            break;
        case('meat'):
            ingredient = <div className ={classes.Meat}> </div>
            break;
        case('cheese'):
            ingredient = <div className ={classes.Cheese}> </div>
            break;
        case('bacon'):
            ingredient = <div className ={classes.Bacon}> </div>
            break;
        case('salad'):
            ingredient = <div className ={classes.Salad}> </div>
            break;
        default:
             ingredient= null;
         }
    return ingredient;
    }
}

// Here we are adding prop type validation. 
//We are taking the class name, adding the propTypes property and setting it equal
//to JS object. We are making sure type is a string and it is required.  
BurgerIngredient.propTypes= {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;