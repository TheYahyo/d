import { createAction, createReducer } from "@reduxjs/toolkit";
import axios from 'axios';


const GET_CATEGORIES = 'GET_CATEGORIES';

const initialState = {
    categories: []
}


export const getCategories = () => {
    let action = createAction(GET_CATEGORIES)
    return (dispatch) => {
        axios('https://fakestoreapi.com/products/categories')
            .then(({ data }) =>{
                dispatch(action(data))
               
            })
    }
}

export default createReducer(initialState, (builder) => {
    builder
        .addCase(GET_CATEGORIES, (state, action) => {
            state.categories = action.payload
        })

})




