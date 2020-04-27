export function useCalendarWeeksGenerator({ month, year }) {

    let currentDay = new Date(year, month - 1, 1)
    let days = [currentDay]

    while (currentDay.getMonth() + 1 === month) {
        const prev = days[days.length - 1]
        currentDay = new Date(prev.getFullYear(), prev.getMonth(), prev.getDate() + 1)
        if (currentDay.getMonth() + 1 === month) {
            days.push(currentDay)
        }
    }

    let weekIndex = 0;
    let dateByWeeks = []
    days.forEach(day => {
        if (!dateByWeeks[weekIndex]) dateByWeeks[weekIndex] = []
        dateByWeeks[weekIndex].push({day, enabled: true})
        if (day.getDay() === 6) weekIndex++
    })

    let prevMonthDays = []
    let nextMonthDays = []

    let firstWeek = dateByWeeks[0]
    let firstDay = firstWeek[0].day

    let missing = 7 - firstWeek.length
    for (let i = missing; i > 0; i--) {
        const day = new Date(firstDay);
        day.setDate(day.getDate() - i)
        prevMonthDays.push({day, enabled: false})
    }

    let lastWeek = dateByWeeks[dateByWeeks.length - 1]
    let lastDay = lastWeek[lastWeek.length - 1].day

    missing = 7 - lastWeek.length
    for (let i = 1; i <= missing; i++) {
        const day = new Date(lastDay);
        day.setDate(day.getDate() + i)
        nextMonthDays.push({day, enabled: false})
    }

    dateByWeeks[0] = [...prevMonthDays, ...dateByWeeks[0]]
    dateByWeeks[dateByWeeks.length - 1] = [...dateByWeeks[dateByWeeks.length - 1], ...nextMonthDays]

    return dateByWeeks
}