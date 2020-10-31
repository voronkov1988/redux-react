import React from 'react'
import Book from './Book'
import styled from 'styled-components'
import AddGlava from './AddGlava'
const Wraper =()=>{
    return (
        <>
        <Wrapper>
            <Book/>
            <AddGlava/>
        </Wrapper>
            
        </>
        
    )
}

const Wrapper = styled.div`
    width: 90%;
    margin-left:5%;
    height: 600px;
    background-color: silver;
`;

export default Wraper