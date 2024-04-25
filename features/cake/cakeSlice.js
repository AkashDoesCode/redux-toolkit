//for react 
//import { createSlice } from '@reduxjs/toolkit';

const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
    noofcakes : 10
}

const cakeSlice = createSlice({
    name : 'cake',
    initialState,
    reducers :{
        ordered : (state) => {
            state.noofcakes--
        },
        restocked : (state, action) =>{
            state.noofcakes+=action.payload
        }
    },
  
})

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions

//for react 
//export default cakeSlice.reducer
//export const {ordered, restocked} = cakeSlice.actions