import React from 'react'
import AddGlavaContainer from './addGlava/AddGlavaContainer'
import styled from 'styled-components'

class Wrapper extends React.Component{
    render(){
        return(
            <Wraper>
                <AddGlavaContainer/>
            </Wraper>
            
        )
    }
}

const Wraper = styled.div`
    width:100%;
    min-height:600px;
    background-color: silver;
    padding: 20px 20px;
`;

export default Wrapper