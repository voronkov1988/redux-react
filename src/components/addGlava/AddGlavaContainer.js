import React from 'react'
import AddGlava from './AddGlava'
import {connect} from 'react-redux'
import {addGlava, addZagolovok, checkbox, changeStatusGlava} from '../../store/action'

class AddGlavaContainer extends  React.Component{


    render(){
        
        // this.props.glava.map((item, i)=>{
        //     item.zagolovki.length === item.zagolovki.filter(res => res.completed).length === true
        //     ? this.props.changeStatusGlava(true, i)
        //     : ''
        // })
        return(
            <AddGlava 
                addZagolovok={this.props.addZagolovok} 
                glava={this.props.glava} 
                addGlava={this.props.addGlava}
                zagolovokLength={this.props.zagolovokLength}
                glavaLength={this.props.glavaLength}
                checkbox={this.props.checkbox}
                changeStatusGlava={this.props.changeStatusGlava}
            />
        )
    }
}

const filters = {
    'ALL': () => true,
    'COMPLETED': item => item.completed,
    'UNCOMPLETED': item => !item.completed
};

const mapStateToProps = (state) => ({
    glava: state.glava.filter(filters[state.filter]),
    glavaLength: state.glava.length,
    zagolovokLength: state.glava.reduce(
        (acc, currentValue) => acc + currentValue.zagolovki.length,
        0
    )
})

const mapDispatchToProps = ({
    addGlava,
    addZagolovok,
    checkbox,
    changeStatusGlava
})

export default connect(mapStateToProps, mapDispatchToProps)(AddGlavaContainer)
