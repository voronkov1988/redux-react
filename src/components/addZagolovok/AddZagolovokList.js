import React from 'react'
import AddZagolovok from './AddZagolovok'
import styled from 'styled-components'

class AddZagolovokList extends React.Component{
constructor(props){
    super(props)
    this.confirmForm = this.confirmForm.bind(this)
}

    confirmForm(e){
        e.preventDefault()
        this.props.addZagolovok({value: e.target.zagolovok.value,number: this.props.number})
        this.props.postBooks(this.props.glava)
        console.log(this.props.glava)
    }

    render(){
        console.log(this.props)
        // console.log(this.props.addZagolovok)
        return(
            <div>
                 <form onSubmit={this.confirmForm}>
                    <Input name='zagolovok'/>
                    <Button>Добавить заголовок</Button>
                </form>
            {
                this.props.zagolovki.map((item, index)=>{
                    return <AddZagolovok glava={this.props.glava} postBooks={this.props.postBooks} checkTitle={this.props.checkTitle} numberGlava={this.props.number} checkbox={this.props.checkbox} key={index} number={index} zagolovok={item}/>
                })
            }
            </div>
            
        )
    }
}

export default AddZagolovokList

const Input = styled.input`
    height: 1.5em;
    background-color: yellowgreen;
    text-align: center;
    font-weight:bolder;
`;

const Button = styled.button`
    background-color: black;
    height: 2em;
    color:white;
    font-weight: bolder;
    cursor: pointer;
`;