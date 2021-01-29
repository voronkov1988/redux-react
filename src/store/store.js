import {configureStore} from '@reduxjs/toolkit'
import reducer from '../store/slices/books'
import undoable from 'redux-undo'
import thunkMiddleware from 'redux-thunk'

export const store = configureStore({
    reducer: undoable(reducer),
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunkMiddleware),
    devTools: process.env.NODE_ENV !== 'production'
})
// export default store