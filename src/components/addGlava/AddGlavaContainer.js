import React from 'react'
import AddGlava from './AddGlava'
import {connect} from 'react-redux'
import {addGlava, addZagolovok, checkbox, changeStatusGlava} from '../../store/action'
import Filter from '../../Filter'

class AddGlavaContainer extends  React.Component{


    render(){
        
        return(
            <>

            <AddGlava 
                addZagolovok={this.props.addZagolovok} 
                glava={this.props.glava} 
                addGlava={this.props.addGlava}
                zagolovokLength={this.props.zagolovokLength}
                glavaLength={this.props.glavaLength}
                checkbox={this.props.checkbox}
            />
            </>
        )
    }
}

const filters = {
    'ALL': () => true,
    'COMPLETED': item => item.glava.completed,
    'UNCOMPLETED': item => !item.glava.completed
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
})

export default connect(mapStateToProps, mapDispatchToProps)(AddGlavaContainer)
