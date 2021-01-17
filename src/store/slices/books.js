import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import undoable from 'redux-undo'

const initionalState = {
    filter: 'ALL',
    glavaLength: 0,
    isLoading: false,
    isError: false,
    glava: [],
}

const slices = createSlice({
    name: 'books',
    initionalState,
    reducers:{
        setFilter(state, action){
            return {
                ...state,
                filter: action.payload
            }
        },
        addGlava(state, action){
            return {
                ...state, 
                glava: state.glava.concat({title: action.payload, zagolovki: [], completed: true}),
                glavaLength: state.glavaLength + 1
            }
        },
        addZagolovok(state, action){
            return {
                ...state,
                glava: [
                    ...state.glava.slice(0, action.number),
                    {
                        ...state.glava[action.number],
                        completed : false,
                        zagolovki: [
                            ...state.glava[action.number].zagolovki,
                            { text: action.payload, completed: false },
                        ]
                    },
                    ...state.glava.slice(action.number + 1, state.glava.length)
                ]
            }
        },
        checkCheckbox(state, action){
            return {
                ...state,
                         glava:[
                        ...state.glava.slice(0, action.glava),
                        {
                            ...state.glava[action.glava],
                            zagolovki: [
                                ...state.glava[action.glava].zagolovki.slice(0,action.index),
                                {
                                    ...state.glava[action.glava].zagolovki[action.index],
                                    completed: action.payload,
                                    
                                },
                                ...state.glava[action.glava].zagolovki.slice(action.index + 1)
                            ],
                        },
                        ...state.glava.slice(action.glava + 1, state.glavaLength),
                    ],       
            }
        },
        checkTitle(state, action){
            return state.glava[action.glava].zagolovki.filter(item => !item.completed).length > 0
            ? {
                ...state,
                glava: [
                    ...state.glava.slice(0, action.glava),
                    {
                        ...state.glava[action.glava],
                        completed: false
                    },
                    ...state.glava.slice(action.glava + 1, state.glava.length)
                ]
            }
            : {
                ...state,
                glava: [
                    ...state.glava.slice(0, action.glava),
                    {
                        ...state.glava[action.glava],
                        completed: true
                    },
                    ...state.glava.slice(action.glava + 1, state.glava.length)
                ]
            }
        }
    }
})
export const {addGlava,setFilter,addZagolovok,checkCheckbox,checkTitle} = slices.actions
export default slices.reducer