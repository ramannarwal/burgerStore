import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

// We want to add button in our order summary so user can cancel or continue with the order

const orderSummary= (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(igKey=>{
        return (<li key={igKey}>
                    <span sytle={{textTransform: 'capitalize'}}>{igKey}:{props.ingredients[igKey]}</span>
                </li>);
        });
    return(
        <Aux>
        <h3>Your Order</h3>
        <p> A delicious burger with the following ingredients:</p>
        <ul>    
            {ingredientSummary}
        </ul>
        <p><strong>Total price:{props.price}</strong></p>
            <p>Continue to Checkout</p>
            <Button btnType = "Danger" clicked ={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType = "Success" clicked= {props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    );
};

export default orderSummary;
