import React from 'react'
import AddGlava from './AddGlava'
import {connect} from 'react-redux'
import {addGlava, addZagolovok, checkbox, setFilter, checkTitle,fetchBooks,postBooks} from '../../store/slices/books'
import styled from 'styled-components'
import {ActionCreators} from 'redux-undo'

class AddGlavaContainer extends  React.Component{
    constructor(props){
        super(props)
        this.filtered = this.filtered.bind(this)
    }

    filtered(e){
        this.props.setFilter(e.target.textContent)
    }

    render(){

        return(
            <>
            <Filter>
                <FilterOption onClick={this.filtered}>ALL</FilterOption>
                <FilterOption onClick={this.filtered}>COMPLETED</FilterOption>
                <FilterOption onClick={this.filtered}>UNCOMPLETED</FilterOption>
            </Filter>
            <AddGlava 
                addZagolovok={this.props.addZagolovok} 
                glava={this.props.glava} 
                addGlava={this.props.addGlava}
                zagolovokLength={this.props.zagolovokLength}
                glavaLength={this.props.glavaLength}
                checkbox={this.props.checkbox}
                checkTitle={this.props.checkTitle}
                past={this.props.past}
                undo={this.props.undo}
                fetchBooks={this.props.fetchBooks}
                postBooks={this.props.postBooks}
                isLoading={this.props.isLoading}
            />
            
            
            </>
        )
    }
}

const filters = {
    'ALL': () => true,
    'COMPLETED': item => item.completed,
    'UNCOMPLETED': item => !item.completed
};

const mapStateToProps = (state) => ({
    glava: state.present.glava.filter(filters[state.present.filter]),
    glavaLength: state.present.glava.length,
    zagolovokLength: state.present.glava.reduce(
        (acc, currentValue) => acc + currentValue.zagolovki.length,
        0
    ),
    past: state.past,
    isLoading: state.present.isLoading
})

 const mapDispatchToProps = ({
    addGlava,
    addZagolovok,
    checkbox,
    setFilter,
    checkTitle,
    fetchBooks,
    postBooks,
    undo: () => ActionCreators.undo()
})
 const Undo = styled.button`
    width: 200px;
    background-color: black;
    color: white;
    font-weight: bolder;
    height: 3em;
    cursor: pointer;
    margin-left: 30px;
    border-radius: 5px;
 `;

const Filter = styled.div`
    display: flex;
    justify-content: space-around;
    margin-left:30px;
    width: 600px;
    color: white;
    font-weight:bolder;
    
`;

const FilterOption = styled.p`
    background-color: black;
    width:80%;
    height: 30px;
    padding-top: 10px;
    text-align: center;
    cursor: pointer;
    border: 1px solid black;
    border-radius: 5px;
    margin-left:2px;
    transition: .3s;
    :hover{
        background-color: darkorange;
        transition: .3s;
    }
`;

export default connect(mapStateToProps, mapDispatchToProps)(AddGlavaContainer)
