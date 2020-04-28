import {useContext} from "react";
import {GlobalContext, types} from "./useGlobalState";

const location = {
    SELECTION_START: 'selectionStart',
    SELECTION_BETWEEN: 'selectionBetween',
    SELECTION_END: 'selectionEnd'
}

export function useDateSelection(date) {
    let selectionState = null
    const [state, dispatch] = useContext(GlobalContext)

    function addDayToSelection() {
        let type = !state.from ? types.SET_FROM_DAY : types.SET_TO_DAY
        let payload = date

        if (date === state.from) {
            type = types.SET_FROM_DAY
            payload = null
        }
        if (date === state.to) {
            type = types.SET_TO_DAY
            payload = null
        }

        if (state.from && date < state.from) {
            dispatch({ type: types.SET_FROM_DAY, payload: date })
            dispatch({ type: types.SET_TO_DAY, payload: state.from })
        } else {
            dispatch({ type, payload })
        }
    }

    if (date === state.from) selectionState = location.SELECTION_START
    if (date === state.to) selectionState = location.SELECTION_END
    if (state.from && state.to && date > state.from && date < state.to) selectionState = location.SELECTION_BETWEEN

    return {selectionState, addDayToSelection}
}