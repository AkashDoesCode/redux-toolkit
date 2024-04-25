//for react
//import { createSlice } from '@reduxjs/toolkit';
//import {ordered as cakeOrdered} from './cake/cakeSlice'


const createSlice = require('@reduxjs/toolkit').createSlice;
const { cakeActions } = require('../cake/cakeSlice');

const initialState ={
    noofice : 20
}

const icecreamSlice = createSlice({
    name : 'icecream',
    initialState,
    reducers : {
        ordered : (state) => {
            state.noofice--;
        },
        restocked : (state, action) => {
            state.noofice+=action.payload
        }
    },
    extraReducers: (builder) =>{
        builder.addCase( cakeActions.ordered, state =>{
            state.noofice--;
        })
    }
})

module.exports= icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice.actions

//for react
//export default icecreamSlice.reducer
//export const {ordered, restocked} = icecreamSlice.actions