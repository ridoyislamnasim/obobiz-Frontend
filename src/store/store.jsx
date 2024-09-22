import { combineReducers, createStore } from "@reduxjs/toolkit";
// import {createStore} from 'redux'

console.log("my name is ridoy islam nasim");

const initailState = {
    balance: 0,
    loan : 0,
    loanPurpose : ''
}
const initialStateCustomer = {
    firstName : '',
    lastName : '',
    age: 0,
}

function reducer(state = initailState, action) {
    switch (action.type) {
        case 'account/deposit':
            return {...state, 
                balance: state.balance + action.payload
            };
        case 'account/withdrow':
            return {...state, 
                balance: state.balance - action.payload
            }
        case 'account/requestLoan':
            if(state.loan> 0) return state;
            return {
                ...state, 
                balance: state.balance + action.payload , 
                loanPurpose: action.loanPurpose,
                loan: action.payload
            };
        case 'account/payloan':
            state.loan - action.payload <= 0 ? action.loanPurpose = '' : action.loanPurpose = state.loanPurpose
            return {
                ...state, 
                loan: state.loan - action.payload,
                loanPurpose:  action.loanPurpose,
                balance: state.balance - action.payload
            };
        default: return state;
    }
}

function customerReducer(state = initialStateCustomer, action) {
    switch (action.type) {
        case 'customer/createCustomer':
            return {
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                age: action.payload.age,
            }
        default: return state;
}
}
// createStore only consider rootReducer 
const rootReducer = combineReducers({
    reducer: reducer,
    customerReducer: customerReducer,
})
const store = createStore(rootReducer);
console.log(store.getState())

// store.dispatch({type: 'account/deposit', payload: 500})
// console.log(store.getState())
// store.dispatch({type: 'account/withdrow', payload: 100})
// store.dispatch({type: 'account/requestLoan', payload: 200, loanPurpose: 'married'})
// console.log(store.getState())
// store.dispatch({type: 'account/payloan', payload: 200, })
// console.log(store.getState())

// action creator function ===== account 
function deposit(amount){
    return {type: 'account/deposit', payload: amount}
}
function withdrow(amount){
    return {type: 'account/withdrow', payload: amount}
}
function requestLoan(amount, loanPurpose){
    return {type: 'account/requestLoan', payload: amount, loanPurpose: loanPurpose}
}
function payloan(amount){
    return {type: 'account/payloan', payload: amount}
}
store.dispatch(deposit(500))
store.dispatch(withdrow(100))
store.dispatch(requestLoan(1000, 'marriage'))
console.log(store.getState())
store.dispatch(payloan(1000))
console.log(store.getState())
// action creator function ===== customer 
function createCustomer(firstName, lastName, age){
    return {
        type: 'customer/createCustomer',
        payload:{
            firstName: firstName,
            lastName: lastName,
            age: age
        }
    }
}
function updateCustomer(firstName, lastName, age){
    return {
        type: 'customer/updateCustomer',
        payload:{
            firstName: firstName,
            lastName: lastName,
            age: age,
        }
    }
}
function deleteCustomer(){
    return {
        type: 'customer/deleteCustomer',
        payload:{
            firstName: '',
            lastName: '',
            age: '',
        }
    }
}

store.dispatch(createCustomer('ridoy', 'islam', 25))
console.log(store.getState())


