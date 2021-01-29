import React from 'react'
import Main from './Main'
import { Provider } from 'react-redux'
import {store} from '../store/store'

const API_KEY = '5fdf7479ff9d67063814078b'

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