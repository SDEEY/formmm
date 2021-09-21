const SET_INFO = 'SET_INFO'

const initialState = {
    info: null
}

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INFO:
            return {
                ...state,
                info: action.payload.info
            }
        default:
            return state
    }
}

export const setInfo = (info) => ({type: SET_INFO, payload: {info}})

export default formReducer