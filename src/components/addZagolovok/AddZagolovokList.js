import React from 'react'
import AddZagolovok from './AddZagolovok'

class AddZagolovokList extends React.Component{
constructor(props){
    super(props)
    this.confirmForm = this.confirmForm.bind(this)
}

    confirmForm(e){
        e.preventDefault()
        this.props.addZagolovok(e.target.zagolovok.value, this.props.number)
    }

    render(){
        return(
            <div>
                 <form onSubmit={this.confirmForm}>
                    <input name='zagolovok'/>
                    <button>Добавить заголовок</button>
                </form>
            {
                this.props.zagolovki.map((item, index)=>{
                    return <AddZagolovok checkTitle={this.props.checkTitle} numberGlava={this.props.number} checkbox={this.props.checkbox} key={index} number={index} zagolovok={item}/>
                })
            }
            </div>
            
        )
    }
}

export default AddZagolovokList