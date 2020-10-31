import React, { Fragment } from 'react'

class AddZagolovok extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            zagolovok: [],
            add: false
        }
        this.link = React.createRef()
        this.add = this.add.bind(this)
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
            <form onSubmit={this.add}>
            <input ref={this.link} name='zagolovok' placeholder='добавить раздел' required></input>
            <button>Добавить Заголовок</button>
            </form>
            {
                this.state.zagolovok.map((item,index) => {
                    return (
                        <Fragment key={index}>
                            <p>{index + 1} заголовок. {item}<input type='checkbox'></input></p>
                        </Fragment>
                    )
                    
                })
            }
            </>
            
        )
    }
}

export default AddZagolovok