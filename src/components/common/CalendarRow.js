import React from "react";
import './CalendarRow.css';

export function CalendarRow({ children }) {
    return (
        <div className={'CalendarRow'}>
            {children}
        </div>
    )
}