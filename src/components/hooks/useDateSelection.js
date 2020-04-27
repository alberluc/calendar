import {useContext} from "react";
import {GlobalContext} from "./useGlobalState";

const location = {
    SELECTION_START: 'selectionStart',
    SELECTION_BETWEEN: 'selectionBetween',
    SELECTION_END: 'selectionEnd'
}

export function useDateSelection(date) {
    const [state] = useContext(GlobalContext)

    if (date === state.from) return location.SELECTION_START
    if (date === state.to) return location.SELECTION_END
    if (state.from && state.to && date > state.from && date < state.to) return location.SELECTION_BETWEEN

    return null
}