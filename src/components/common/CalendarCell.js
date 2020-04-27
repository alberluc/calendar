import React from "react";
import './CalendarCell.css';

export function CalendarCell({ classList = '', children, ...props }) {
    return (
        <div className={['CalendarCell', classList].join(' ')} {...props}>
            {children}
        </div>
    )
}