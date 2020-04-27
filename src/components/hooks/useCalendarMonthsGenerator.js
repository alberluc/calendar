/**
 * Génère les mois et les années en fonction d'un début et du nombre désiré
 *
 * Input = startAt.years: 2020,
 *         startAt.month: 11,
 *         count: 3
 *
 * Output = [
 *  {month: 11, years: 2020},
 *  {month: 12, years: 2020},
 *  {month: 01, years: 2021},
 * ]
 *
 * @param startAt
 * @param count
 * @returns {[{month: *, year: *}]}
 */
export function useCalendarMonthsGenerator({startAt, count}) {

    let contexts = [startAt]
    let yearsPassed = 0

    for (let i = 1; i < count; i++) {
        const prev = contexts[contexts.length - 1]
        if (prev.month + 1 === 13) {
            yearsPassed++
            contexts.push({
                month: 1,
                year: prev.year + yearsPassed
            })
        } else {
            contexts.push({
                month: prev.month + 1,
                year: prev.year
            })
        }
    }

    return contexts
}