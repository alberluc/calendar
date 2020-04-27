import React, {createContext, useReducer} from "react";

export const types = {
    SET_FROM_DAY: 0,
    SET_TO_DAY: 1
}

const initialState = {
    from: null,
    to: null
}

function reducer(state, action) {
    switch (action.type) {
        case types.SET_FROM_DAY: {
            return {...state, from: action.payload}
        }
        case types.SET_TO_DAY: {
            return {...state, to: action.payload}
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

export const GlobalContext = createContext(null)

export const GlobalContextProvider = props => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <GlobalContext.Provider value={[state, dispatch]}>
            {props.children}
        </GlobalContext.Provider>
    );
};