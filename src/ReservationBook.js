import React from "react";
import Reservations from "./Reservations";

const ReservationBook = ({reservations}) => {
  let allReservations = reservations.map(reservation => {
    return (
      <Reservations
        key={reservation.id}
        id={reservation.id}
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        number={reservation.number}
        />
    )
  })
  
  
  
  return (
    <div>
      {allReservations}
    </div>
  )
}

export default ReservationBook;