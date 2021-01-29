import React, { Fragment } from 'react'
import styled from 'styled-components'
import {createRef} from 'react'
import AddZagolovokList from '../addZagolovok/AddZagolovokList'


class AddGlava extends React.Component{
    constructor(props){
        super(props)
        this.link = React.createRef()
    }

    formSubmit(e){
        e.preventDefault()
        this.props.addGlava(e.target.glava.value)
        this.props.postBooks(this.props.glava.concat({title: e.target.glava.value, zagolovki: [], completed: true}))
        e.target.glava.value = ''
        this.link.current.focus()
    }

    componentDidMount(){
        this.props.fetchBooks()
    }
    // componentDidUpdate(){
    //     this.props.fetchBooks()
    // }

    render(){
        // console.log(this.props)
        return(
            this.props.isLoading ?
            <Loading>...Loading</Loading>
            :
            <>
            <Wrapper>
                <form onSubmit={(e)=>this.formSubmit(e)}>
                    <Input ref={this.link} name='glava'/>
                    <Button>Добавить</Button>
                </form>
            </Wrapper>
            <InfoLength>Всего глав {this.props.glava.length}</InfoLength>
            <InfoLength>Всего заголовков {this.props.zagolovokLength}</InfoLength>
            {
                this.props.past.length > 0
                ? <Undo onClick={() => this.props.undo()}>Откатить изменения</Undo>
                : ''
            }
                {
                    this.props.glava.map((item,index) => {
                        return (
                            <Fragment key={index}>
                                <OneGlava>
                                #{index + 1} - {item.title}
                                    {
                                        item.completed 
                                        ? <SuccessSpan> - Ready</SuccessSpan>
                                        : <NotSuccessSpan> - Not ready</NotSuccessSpan>
                                    }
                                    <AddZagolovokList glava={this.props.glava} postBooks={this.props.postBooks} checkTitle={this.props.checkTitle} checkbox={this.props.checkbox}  zagolovki={item.zagolovki} addZagolovok={this.props.addZagolovok} number={index}/>
                                </OneGlava>
                            </Fragment>
                        )
                    })
                }
                
            </>
        )
    }
}

export default AddGlava

const Loading = styled.div`
    font-size:4em;
    color: darkgoldenrod;
    font-weight:bolder;
`;

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

const Button = styled.button`
    height: 2.5em;
    margin-left:10px;
    width: 10%;
    border-radius: 5px;
    background-color: greenyellow;
    cursor: pointer;
`;

const SuccessSpan = styled.span`
    color: green
`;

const NotSuccessSpan = styled.span`
    color: red
`;

const OneGlava = styled.h2`
    width: 80%;
    height:auto;
    background-color: #fff;
    margin-left: 2%;
`;

const Wrapper = styled.div`
    padding-top: 30px;
    padding-left:30px;
`;

const InfoLength = styled.span`
    display:inline-block;
    width: auto;
    height:30px;
    font-size:1.3em;
    font-weight:bold;
    background-color: yellow;
    margin-top: 20px;
    margin-left:20px;
    padding: 5px;
`;

const Input = styled.input`
    width: 20%;
    height:2em;
    border-radius: 5px;
    text-align: center;
`;

