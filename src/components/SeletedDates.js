import React, {useContext} from "react";
import {GlobalContext} from "../hooks/useGlobalState";
import './SelectedDates.css'
import moment from 'moment'

export function SeletedDates() {
    const [state] = useContext(GlobalContext)
    return (
        <div className={'SelectedDates'}>
            <p>
                <span>Date de début : </span>
                <span className={'SelectedDates-value'}>{
                    state.from
                        ? moment(state.from).format("dddd Do MMMM YYYY")
                        : 'Non défini'
                }</span>
            </p>
            <p>
                <span>Date de fin : </span>
                <span className={'SelectedDates-value'}>{
                    state.to
                        ? moment(state.to).format("dddd Do MMMM YYYY")
                        : 'Non défini'
                }</span>
            </p>
        </div>
    )
}