import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
function AddToCart(props) {
    //default state
// var defaultState = 0;
const[defaultState,addCart]=useState(0)
//reducers
const balanceReducer = (state = defaultState, action) => {
  console.log("reducer invoked", action);
  switch (action.type)
  {
    case "ADD":
      return state + 1;
    case "WITHDRAW":
      return state - 1;
    default:
      return state;
  }
};

//store
var store = createStore(balanceReducer);
console.log(store.getState());


 function addToCart(){
  
        //dispatch
    store.dispatch({ type: "ADD"}); //dispatch: pass an action to store; it invokes the reducer automatically
    console.log(store.getState()); //get updated state
    addCart(store.getState())  
    // store.dispatch({ type: "DEPOSIT"});
    // console.log(store.getState()); //100
    
    // store.dispatch({ type: "DEPOSIT"});
    // console.log(store.getState()); //200
    
    // store.dispatch({ type: "WITHDRAW"});
    // console.log(store.getState()); //100
    
    }
    
    
    return (
        <div>
          {defaultState}  
          <button onClick={addToCart}>add</button>
        </div>
    );
}

export default AddToCart;