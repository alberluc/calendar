import React from 'react'
import './CalendarDay.css'
import {useDateSelection} from "../hooks/useDateSelection";
import {ClassList} from "../helpers/ClassList";

export function CalendarDay({date, enabled}) {

    const {selectionState, addDayToSelection} = useDateSelection(date)
    const classList = new ClassList(`CalendarDay`)

    if (selectionState) classList.add(`CalendarDay-${selectionState}`)
    if (!enabled) classList.add('CalendarDay-disabled')

    function onClick() {
        if (enabled) addDayToSelection()
    }

    return (
        <div className={classList.toString()} onClick={() => onClick()}>
            <span>{date.getDate()}</span>
        </div>
    )
}