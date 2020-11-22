import {ADD_GLAVA, ADD_ZAGOLOVOK, CHECK_CHECKBOX, SET_FILTER} from './action'

const initionalState = {
    filter: 'ALL',
    glavaLength: 0,
    glava: []
}

export const reducer = (state = initionalState, action) => {
    switch(action.type){
        case ADD_GLAVA:
            return {
                ...state, 
                glava: state.glava.concat({title: action.payload, zagolovki: [], completed: true}),
                glavaLength: state.glavaLength + 1
            }
        case ADD_ZAGOLOVOK:
            return {
                ...state,
                glava: [
                    ...state.glava.slice(0, action.number),
                    {
                        ...state.glava[action.number],
                        completed : false,
                        filter: 'UNCOMPLETED',
                        zagolovki: [
                            ...state.glava[action.number].zagolovki,
                            { text: action.payload, completed: false },
                        ]
                    },
                    ...state.glava.slice(action.number + 1, state.glava.length)
                ]
            }
        case CHECK_CHECKBOX:
            console.log(action)
            return {
                ...state,
                ...state.glava[action.glava].zagolovki[action.index].completed = action.payload,
                ...state.glava[action.glava].completed = checkStatusZagolovok(state.glava[action.glava].zagolovki),
                ...state.glava[action.glava].filter = state.glava[action.glava].completed ? 'COMPLETED' : 'UNCOMPLETED'
            }
        case SET_FILTER: 
            console.log(action)
            return {
                ...state,
                filter: action.payload
            }
    }
    return state
}

const checkStatusZagolovok = (zagolovki) => {
    // console.log(zagolovki)
    let items = zagolovki.filter(item => {
        if(item.completed === false){
            return true
        }
        
    })
    return items.length > 0
    ? false
    : true
}