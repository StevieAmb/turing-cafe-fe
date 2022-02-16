import React, { Component } from "react";

class ReservationMaker extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  submitReservation = (event) => {
    event.preventDefault()
    const newReservation = {
      id: Date.now(),
      ...this.state
    }
    this.props.addReservation(newReservation)
    this.clearInput()
  }

  clearInput = () => {
    this.setState({name: '', date: '', time: '', number: '' })
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: [event.target.value]})
  }

  render() {
    return (
    <form>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Your name..."
        value={this.state.name}
        onChange={event => this.handleChange(event)}
        required
        />

      <input 
        type="text" 
        id="date" 
        name="date"
        placeholder="Date (dd/mm)"
        value={this.state.date}
        onChange={event => this.handleChange(event)}
        required
      />

      <input
        id="time"
        type="text"
        name="time"
        placeholder="Time"
        value={this.state.time}
        onChange={event => this.handleChange(event)}
        required
        />

      <input
        id="number"
        type="text"
        name="number"
        placeholder="Number of Guests"
        value={this.state.number}
        onChange={event => this.handleChange(event)}
        required
        />
      <button onClick={event => this.submitReservation(event)}>Make Reservation</button>
      </form>
    )
  }
}

export default ReservationMaker;