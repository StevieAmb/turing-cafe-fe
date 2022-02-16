import React, { Component } from 'react';
import ReservationBook from '../ReservationBook';
import { getReservations } from '../apiCalls';
import './App.css';
import ReservationMaker from '../ReservationMaker';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  addReservation = (newReservation) => {
    this.setState({reservations: [...this.state.reservations, newReservation]})
  }

  componentDidMount() {
    getReservations()
    .then(data => this.setState({reservations: data}))
  }

  
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
        <ReservationMaker addReservation={this.addReservation} />
        </div>
        <div className='resy-container'>
          <ReservationBook reservations={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
