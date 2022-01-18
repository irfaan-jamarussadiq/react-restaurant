function DaySchedules() {
    const daySchedules = [
        {
            day: 'Monday through Friday',
            startTime: '9:00am',
            endTime: '5:00pm'
        },
        {
            day: 'Saturday',
            startTime: '1:00pm',
            endTime: '7:00pm'
        },
        {
            day: 'Sunday',
            startTime: '10:00am',
            endTime: '3:00pm'
        },
    ]

    return (
        <div className="page-container">
            <h2>Hours</h2>
            <table class="shadow-lg" id="schedule">
                <tbody>
                    {daySchedules.map(daySchedule => 
                        <DaySchedule 
                            key={daySchedule.day}
                            day={daySchedule.day} 
                            startTime={daySchedule.startTime}
                            endTime={daySchedule.endTime}
                        />
                    )}
                </tbody>
            </table>
        </div>
    )
}

function DaySchedule({ day, startTime, endTime }) {
    // Need to improve this!
    return (
        <tr className="table-row">
            <td>{day}</td>
            <td className="table-cell-gap"></td>
            <td>
                <span>{startTime}</span>
            </td>
            <td className="dash-container">
                <span>-</span>
            </td>
            <td>
                <span>{endTime}</span>
            </td>
        </tr>
    )
}

export default DaySchedules