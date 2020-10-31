import React, { Fragment } from 'react'
import styled from 'styled-components'

class AddZagolovok extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            zagolovok: [],
            add: false,
            ready: []
        }
        this.link = React.createRef()
        this.add = this.add.bind(this)
        this.complete = this.complete.bind(this)
    }

    complete(e){
        e.target.checked 
        ? this.setState({
            book: {
                ready: this.state.ready.push(e.target.checked)
            }
        })
        : this.setState({
            book: {
                ready: this.state.ready.pop(e.target.checked)
            }
        })
    }

    add(e){
        e.preventDefault()
        this.setState({
            book: {
                zagolovok: this.state.zagolovok.push(e.target.zagolovok.value)
            }
        })
        e.target.zagolovok.value = ''
        this.link.current.focus()
    }

    render(){
        return(
            <>
            {
                this.state.ready.length === this.state.zagolovok.length 
                ? <ReadyBlock>Глава закончена</ReadyBlock>
                : ''
            }
            <form onSubmit={this.add}>
            <input ref={this.link} name='zagolovok' placeholder='добавить раздел' required></input>
            <button>Добавить Заголовок</button>
            </form>
            {
                this.state.zagolovok.map((item,index) => {
                    return (
                        <Fragment key={index}>
                            <p>{index + 1} заголовок. {item}<input  onClick={this.complete} name='complete' type='checkbox'></input></p>
                        </Fragment>
                    )
                    
                })
            }
            </>
            
        )
    }
}

export default AddZagolovok

const ReadyBlock = styled.div`
    color: green;
    font-size: 1.4em;
    font-weight: bolder;
    padding:10px 10px;
`;