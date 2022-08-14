// hours of operation for a particular day
function DayHours({ day, hours }) {
    return (
        <tr className="table-row">
            <td className="day">{day}</td>
            <td>{hours}</td>
        </tr>
    )
}

function HoursOfOperation() {
    return (
        <div className="page-container" id="hours">
            <h2>Hours of Operation</h2>
            <table className="shadow-lg" id="schedule">
                <tbody>
                    <DayHours day="Monday" hours="9:00am - 5:00pm"/>
                    <DayHours day="Tuesday" hours="Closed"/>
                    <DayHours day="Wednesday" hours="11:00am - 4:00pm"/>
                    <DayHours day="Thursday" hours="11:00am - 4:00pm"/>
                    <DayHours day="Friday" hours="11:00am - 4:00pm"/>
                    <DayHours day="Saturday" hours="1:00pm - 7:00pm"/>
                    <DayHours day="Sunday" hours="9:00am - 3:00pm"/>
                </tbody>
            </table>
        </div>
    )
}

export default HoursOfOperation