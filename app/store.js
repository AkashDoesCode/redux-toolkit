//for react 
//import { configureStore } from '@reduxjs/toolkit'
//import cakeReducer from '../features/cake/cakeSlice'
//import icecreamReducer from '../features/icecreame/icecreamSlice'
//import userReducer from '../features/user/userSlice'

const configureStore = require('@reduxjs/toolkit').configureStore
const ReduxLogger = require('redux-logger')
const cakeReducer = require('../features/cake/cakeSlice')
const icecreamReducer = require('../features/icecreame/icecreamSlice')
const userReducer = require('../features/user/userSlice')

const logger = ReduxLogger.createLogger()

const store = configureStore({
    reducer : {
        cake : cakeReducer,
        icecream : icecreamReducer,
        user : userReducer
    },
    //middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger)

})

module.exports= store

//for react 
//export default store