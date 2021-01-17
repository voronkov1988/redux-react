import {configureStore} from '@reduxjs/toolkit'
import reducer from '../store/slices/books'
import undoable from 'redux-undo'
import thunkMiddleware from 'redux-chunk'
console.log(reducer)
export const store = configureStore({
    reducer: undoable(reducer),
    middleware: getDefaultMiddleware => getDefaultMiddleware(thunkMiddleware),
    devTools: process.env.NODE_ENV !== 'production'
})
// export default store