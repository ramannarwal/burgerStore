import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';



//global constant should be written in capital letters
const INGREDIENT_PRICES= {
    salad: 0.5,
    cheese: 0.5,
    meat: 2,
    bacon:1
}


class BurgerBuilder extends Component{
    // construtor(props){
    //     super(props);
    //     this.state = {...}
    // }
    //below is the new way to declare state instead of using constructor.
    state = {
        ingredients: {
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice: 5,
        purchaseable: false,
        purchasing:false
    }

    //function to check if burger is eligable to submit an order
    //setting the state of purchaseable and then passing it
    //to buildControls component below. We will run this method in both
    // add and removed ingredientHandler functions. 
    updatePurchaseState(ingredients) {
        //below are are getting each key of ingredient array and then return
        // the value of each key
        const sum =Object.keys(ingredients).map(igKey=>{
            return ingredients[igKey];
        })
        .reduce((sum, el)=>{
            return sum + el;}
            ,0);
            
        this.setState({purchaseable: sum >0})
    }


    // function to add ingredients. It receives the type of ingredient.
    addIngredientHandler= (type) => {
        //we need to know the old count of ingredient
        const oldCount = this.state.ingredients[type];
        //calculate the new count. 
        const updatedCount = oldCount +1;
        //since state should be updated in immutable way, we will create new state
        const updatedIngredients = {
            ...this.state.ingredients
        };
        //we are taking the updated ingredient object, excess the type and set the count
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice =this.state.totalPrice;
        const newPrice = oldPrice +priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        //we are passing updatedIngredients so we can get the latest updated state
        // of ingredients
        this.updatePurchaseState(updatedIngredients);

    }

    //function to remove ingredients
    removeIngredientHandler= (type) => {        
        const oldCount = this.state.ingredients[type];
        if(oldCount <=0){
            return;
        }
        const updatedCount = oldCount -1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        //we are taking the updated ingredient object, excess the type and set the count
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice =this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler= () => {
        this.setState({purchasing:true});
    }
    
    // we will be passing this function to Modal component to cancel the order
    //and get rid of the Backdrop when Backdrop component is clicked.
    purchaseCancelHandler = () => {
        this.setState({purchasing:false});
    }

    purchaseContinueHandler = () => {
        alert('You Continue!');
    }


    // In the Burger element we are passing the above ingredients OBJECT.
    //But burger does not receive any ingredients yet. We have to go to Burger.js file
    //to import them.
    render(){
        //Below we are disabling remove button when not needed.
        const disabledInfo={
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key] =disabledInfo[key] <= 0
        }
        return (
            <Aux>
                <Modal showOrder={this.state.purchasing} modalClosed = {this.purchaseCancelHandler}> 
                    <OrderSummary 
                        ingredients ={this.state.ingredients}
                        purchaseCancelled = {this.purchaseCancelHandler}
                        purchaseContinued ={this.purchaseContinueHandler}
                        price={this.state.totalPrice.toFixed(2)}>
                    </OrderSummary>
                </Modal>
                <Burger ingredients= {this.state.ingredients} />
                <BuildControls 
                    ingredientAdded ={this.addIngredientHandler}
                    ingredientRemoved ={this.removeIngredientHandler}
                    disabled= {disabledInfo}
                    purchaseable = {this.state.purchaseable}
                    ordered = {this.purchaseHandler}
                    price ={this.state.totalPrice}/>
            </Aux>
        );
    }
}


export default BurgerBuilder;