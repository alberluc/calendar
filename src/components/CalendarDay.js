import React, {useContext} from 'react'
import './CalendarDay.css'
import {GlobalContext, types} from "./hooks/useGlobalState";
import {useDateSelection} from "./hooks/useDateSelection";
import {ClassList} from "../helpers/ClassList";

export function CalendarDay({ date, enabled }) {

    const [state, dispatch] = useContext(GlobalContext)
    const classList = new ClassList(`CalendarDay`)

    const location =  useDateSelection(date)
    if (location) classList.add(`CalendarDay-${location}`)

    function onClick(e) {
        if (!enabled) return false

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

    if (!enabled) {
        classList.add('CalendarDay-disabled')
    }

    return (
        <div className={classList.toString()} onClick={e => onClick(e)}>
            {date.getDate()}
        </div>
    )
}