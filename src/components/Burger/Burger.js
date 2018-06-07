import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

// we will be receiving ingredients from BurgerBuilder component through props. 
//Remember ingredient is an object not an array. We will need to convert it into array.
//below we are using keys() to get the list of keys. Then we are using map() to execute
// a function on each key in the array. 
//reduce in build in array function. It takes function as input.
//this function takes in previous value and current value as parameter
const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map(igKey=>{
                return [...Array(props.ingredients[igKey])].map((_,i)=>{
                    return <BurgerIngredient key ={igKey +i} type ={igKey} />
                });
            })
            .reduce((arr,el)=>{
                    return arr.concat(el)
            }, []);
           if(transformedIngredients.length ===0){
               transformedIngredients= <p>Start adding ingredients</p>

           }
            console.log(transformedIngredients);
    return(
        <div className= {classes.Burger}>
            <BurgerIngredient type ="bread-top"/>
             {transformedIngredients}
            <BurgerIngredient type ="bread-bottom"/>
        </div>
    );

}; 

export default burger;