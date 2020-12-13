export const ADD_GLAVA = 'ADD_GLAVA'
export const ADD_ZAGOLOVOK = 'ADD_ZAGOLOVOK'
export const CHECK_CHECKBOX = 'CHECK_CHECKBOX'
export const SET_FILTER = 'SET_FILTER'
export const CHECK_TITLE = 'CHECK_TITLE'

export const addGlava = (text, number) => ({
    type: ADD_GLAVA,
    payload: text,
    number: number
})

export const addZagolovok = (text, number) => ({
    type: ADD_ZAGOLOVOK,
    payload: text,
    number: number
})

export const checkbox = (el, index, numberGlava) => ({
    type: CHECK_CHECKBOX,
    payload: el,
    index: index,
    glava: numberGlava
})
export const checkTitle = (numberGlava) => ({
    type: CHECK_TITLE,
    glava: numberGlava
})

export const setFilter = (filterText) => ({
    type: SET_FILTER,
    payload: filterText
})
