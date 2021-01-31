import React from 'react'
import styled from 'styled-components'


class AddZagolovok extends React.PureComponent{
    
    constructor(props){
        super(props)
        this.readyCheckbox = this.readyCheckbox.bind(this)
    }

    readyCheckbox(e){
        this.props.checkbox({checkbox: e.target.checked, number: this.props.number, numberGlava: this.props.numberGlava})
        this.props.checkTitle(this.props.numberGlava)
        
        this.props.postBooks(this.props.glava)
        console.log(books)
    }

    componentDidUpdate(){
        const books = this.props.books
    }

    render(){
        // console.log(this.props)
        return(
            <Wrap>#{this.props.number+1} - {this.props.zagolovok.text} <input onChange={this.readyCheckbox} type='checkbox' checked={this.props.zagolovok.completed}/></Wrap>  
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