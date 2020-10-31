import React, { createRef, Fragment } from 'react'
import styled from 'styled-components'
import AddZagolovok from './AddZagolovok'

class AddGlava extends React.PureComponent{
    constructor(props){
        super(props)
        this.state = {
            add: false,
            glava: [],
            ready: false
        }
        this.link = React.createRef()
        this.addGlava = this.addGlava.bind(this)
        this.confirmForm = this.confirmForm.bind(this)
    }

    addGlava(){
        this.setState({add : true, clicked: true})
    }

    confirmForm(e){
        e.preventDefault()
        this.setState({
            book: {
                glava: this.state.glava.push(e.target.glava.value) 
            }
        })
        e.target.glava.value = ''
        this.link.current.focus()
    }

    render(){
        return (
            <>
            {this.state.add ? '' : <Add onClick={this.addGlava}>+</Add>}
            
            {this.state.add ? 
            <>
            <form onSubmit={this.confirmForm}>
                <input ref={this.link} placeholder='Добавить Главу' name='glava' required></input>
                <button>Добавить</button>
            </form>
            </>
            : ''}
            {
                this.state.glava.map((item,index) => {
                   return <Glava key={index}>
                    <h2 >{index + 1} Глава. {item}</h2>
                    <AddZagolovok></AddZagolovok>
                    </Glava>
                })
            }
            
            </>
        )
    }
}
export default AddGlava

const Glava = styled.div`
    border: 1px solid gray;
    background-color: #fff;
    margin-top: 10px;
`;

const Add = styled.div`
    width: 100px;
    height: 100px;
    font-size: 5em;
    text-align:center;
    cursor: pointer;
    font-weight: bolder;
    background-color: green;
`;