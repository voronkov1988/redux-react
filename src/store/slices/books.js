import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import httpClient from '../../helpers/axiosHelper'

const API = '5fdf7479ff9d67063814078b'

const initialState = {
    filter: 'ALL',
    glavaLength: 0,
    isLoading: false,
    isError: false,
    glava: [],
}

export const fetchBooks = createAsyncThunk(
    'addGlava/fetchAll',
    async () => {
      const response = await httpClient.get('books')
    //   console.log(response.data[0])
      return response.data[0].glava
    }
  )

  export const postBooks = createAsyncThunk(
      'put/writeBack',
        async (state) => {
            await httpClient.put(
                `books/601468f062aa200f00000753`,
                { glava: JSON.stringify(state) },
            )
        }
  )

const slices = createSlice({
    name: 'books',
    initialState ,
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
                glavaLength: state.length + 1
            }
        },
        addZagolovok(state, action){
            return {
                ...state,
                glava: [
                    ...state.glava.slice(0, action.payload.number),
                    {
                        ...state.glava[action.payload.number],
                        completed : false,
                        zagolovki: [
                            ...state.glava[action.payload.number].zagolovki,
                            { text: action.payload.value, completed: false },
                        ]
                    },
                    ...state.glava.slice(action.payload.number + 1, state.glava.length)
                ]
            }
        },
        checkbox(state, action){
            return {
                ...state,
                         glava:[
                        ...state.glava.slice(0, action.payload.numberGlava),
                        {
                            ...state.glava[action.payload.numberGlava],
                            zagolovki: [
                                ...state.glava[action.payload.numberGlava].zagolovki.slice(0,action.payload.number),
                                {
                                    ...state.glava[action.payload.numberGlava].zagolovki[action.payload.number],
                                    completed: action.payload.checkbox,
                                    
                                },
                                ...state.glava[action.payload.numberGlava].zagolovki.slice(action.payload.number + 1)
                            ],
                        },
                        ...state.glava.slice(action.payload.numberGlava + 1, state.glava.length),
                    ],       
            }
        },
        checkTitle(state, action){
            return state.glava[action.payload].zagolovki.filter(item => !item.completed).length > 0
            ? {
                ...state,
                glava: [
                    ...state.glava.slice(0, action.payload),
                    {
                        ...state.glava[action.payload],
                        completed: false
                    },
                    ...state.glava.slice(action.payload + 1, state.glava.length)
                ]
            }
            : {
                ...state,
                glava: [
                    ...state.glava.slice(0, action.payload),
                    {
                        ...state.glava[action.payload],
                        completed: true
                    },
                    ...state.glava.slice(action.payload + 1, state.glava.length)
                ]
            }
        }
    },
    extraReducers: {
        [fetchBooks.pending]: (state, action) => ({
          ...state,
          isLoading: true,
          
        }),
        [fetchBooks.fulfilled]: (state, action) => ({
            ...initialState,
            isLoading: false,
            glava: action.payload
        }),
        
      }
})
export const {addGlava,setFilter,addZagolovok,checkbox,checkTitle} = slices.actions
export default slices.reducer
