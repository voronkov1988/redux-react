import React from 'react'
import Main from './Main'
import {createStore} from 'redux'
import {reducer} from '../store/reducer'
import { Provider } from 'react-redux'

const store = createStore(
    reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

class App extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <Main/>
            </Provider>
            
        )
    }
}

export default App 