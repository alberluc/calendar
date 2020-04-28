import React, {useEffect} from "react";
import {CalendarMonth} from "./components/CalendarMonth";
import {useCalendarMonthsGenerator} from "./hooks/useCalendarMonthsGenerator";
import './Calendar.css';
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';
import {SeletedDates} from "./components/SeletedDates";

export function Calendar() {

    const months = useCalendarMonthsGenerator({
        startAt: {
            month: 4,
            year: 2020
        },
        count: 12
    })

    useEffect(() => {
        new Swiper('.swiper-container', {
            slidesPerView: 2,
            spaceBetween: 30,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        })
    }, [])

    const monthsBlocks = months.map(({month, year}, index) =>
        <div key={index} className={'swiper-slide'}>
            <CalendarMonth month={month} year={year}/>
        </div>
    )

    return (
        <>
            <div className={'Calendar swiper-container'}>
                <div className="Calendar-blocks swiper-wrapper">
                    {monthsBlocks}
                </div>
                <div className="swiper-button-prev"/>
                <div className="swiper-button-next"/>
            </div>
            <SeletedDates/>
        </>
    )
}