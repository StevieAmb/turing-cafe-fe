import React from 'react'

const Reservations = ({name, date, time, number}) => {
  return (
    <div className='reservation-card'>
    <h2>{name}</h2>
    <h4>{date}</h4>
    <h4>{time}</h4>
    <h4>{number}</h4>
    </div>
  )
}


export default Reservations;