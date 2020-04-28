import React, {useContext} from "react";
import {CalendarRow} from './common/CalendarRow';
import {CalendarCell} from './common/CalendarCell';
import {useCalendarWeeksGenerator} from '../hooks/useCalendarWeeksGenerator';
import './CalendarMonth.css';
import moment from "moment";
import {CalendarDay} from "./CalendarDay";

export function CalendarMonth({month, year}) {

    const weeks = useCalendarWeeksGenerator({month, year})
    const label = moment([year, month - 1]).format('MMMM')

    return (
        <div className={'CalendarMonth'}>
            <h3 className={'CalendarMonth-label'}>{label} {year}</h3>
            <div className={'CalendarBlock-rows'}>
                <CalendarRow>
                    <CalendarCell>Lun</CalendarCell>
                    <CalendarCell>Mar</CalendarCell>
                    <CalendarCell>Mer</CalendarCell>
                    <CalendarCell>Jeu</CalendarCell>
                    <CalendarCell>Ven</CalendarCell>
                    <CalendarCell>Sam</CalendarCell>
                    <CalendarCell>Dim</CalendarCell>
                </CalendarRow>
                {weeks.map((week, weekIndex) =>
                    <CalendarRow key={weekIndex}>
                        {week.map(({day, enabled}, dayIndex) =>
                            <CalendarCell key={`${weekIndex}${dayIndex}`}>
                                <CalendarDay enabled={enabled} date={day}/>
                            </CalendarCell>
                        )}
                    </CalendarRow>
                )}
            </div>
        </div>
    );
}
