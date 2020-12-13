import React from 'react'
import Main from './Main'
import { Provider } from 'react-redux'
import { store } from '../store/store'

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