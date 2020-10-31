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
    min-height: 600px;
    background-color: silver;
    padding: 30px 30px;
`;

export default Wraper