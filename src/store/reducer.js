import {ADD_GLAVA, ADD_ZAGOLOVOK, CHECK_CHECKBOX, SET_FILTER, CHECK_TITLE} from './action'

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
                        zagolovki: [
                            ...state.glava[action.number].zagolovki,
                            { text: action.payload, completed: false },
                        ]
                    },
                    ...state.glava.slice(action.number + 1, state.glava.length)
                ]
            }
        case CHECK_CHECKBOX:
            return {
                ...state,
                         glava:[
                        ...state.glava.slice(0, action.glava),
                        {
                            ...state.glava[action.glava],
                            zagolovki: [
                                ...state.glava[action.glava].zagolovki.slice(0,action.index),
                                {
                                    ...state.glava[action.glava].zagolovki[action.index],
                                    completed: action.payload,
                                    
                                },
                                ...state.glava[action.glava].zagolovki.slice(action.index + 1)
                            ],
                        },
                        ...state.glava.slice(action.glava + 1, state.glavaLength),
                    ],       
            }
                 
            case CHECK_TITLE: 
            return state.glava[action.glava].zagolovki.filter(item => !item.completed).length > 0
            ? {
                ...state,
                glava: [
                    ...state.glava.slice(0, action.glava),
                    {
                        ...state.glava[action.glava],
                        completed: false
                    },
                    ...state.glava.slice(action.glava + 1, state.glava.length)
                ]
            }
            : {
                ...state,
                glava: [
                    ...state.glava.slice(0, action.glava),
                    {
                        ...state.glava[action.glava],
                        completed: true
                    },
                    ...state.glava.slice(action.glava + 1, state.glava.length)
                ]
            }
            
            
            
        case SET_FILTER: 
            return {
                ...state,
                filter: action.payload
            }
    }
    return state
}
