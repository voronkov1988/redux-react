import React from 'react'
import styled from 'styled-components'


class AddZagolovok extends React.Component{
    
    constructor(props){
        super(props)
        this.readyCheckbox = this.readyCheckbox.bind(this)
    }

    readyCheckbox(e){
        // console.log(this.props)
        this.props.checkbox(e.target.checked, this.props.number, this.props.numberGlava)
    }

    render(){
        // console.log(this.props.zagolovok)
        return(
            <>
                <Wrap>#{this.props.number+1} - {this.props.zagolovok.text} <input onChange={this.readyCheckbox} type='checkbox'/></Wrap>
            </>
            
        )
    }
}

const Wrap = styled.span`
    display: block;
    border-bottom:1px solid black;
    color: blue;
    margin-left: 10px;
`;


export default AddZagolovok