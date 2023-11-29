import React , {useState} from 'react'

function Clock() {
    const [time, setTime] = useState(new Date().toString())

    function showDate() {
        setTime(new Date().toString())
    }

    setInterval(showDate, 1000)

    return <div>{time}</div>

}
export default Clock