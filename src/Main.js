import React from 'react'
import Book from './Book'
import Wraper from './Wrapper'

class Main extends React.Component{
    render(){
        return(
            <>
                <Wraper>
                    <Book/>
                </Wraper>
            </>
        )
    }
}

export default Main