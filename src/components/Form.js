import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
    constructor() {
        super();
        this.state = {
            stance: '',
            name: '',
            obstacle: '',
            tutorial: ''
        }
    }
    submitTrick = event => {
        event.preventDefault();
        const newTrick = {
            id: Date.now(),
            ...this.state
        }
        this.props.addTrick(newTrick);
        this.clearInputs();
    }

    clearInputs = () => {
        this.setState({stance: '', name: '', obstacle: '', tutorial: ''})
    }
    handleSubmit = (event) => {
        this.setState({stance: event.target.value})
    }
    handleChange = event => {
        console.log('this', event.target.name)
        this.setState({ [event.target.name]: event.target.value})
        console.log(this.state)
    }
    render() {
        return (
            <form>
             <select name='stance' 
              onChange={event => this.handleSubmit(event)}>
               <option value='regular'>Regular</option>
               <option value='switch'>Switch</option>
               </select>
               <input
               type="text"
               placeholder='Name of Trick'
               name='name'
               value={this.state.name}
               onChange={event => this.handleChange(event)}
               />
                <input
               type="text"
               placeholder='Choose Your Obstacle'
               name='obstacle'
               value={this.state.obstacle}
               onChange={event => this.handleChange(event)}
               />
                <input
               type="text"
               placeholder='Link to Tutorial'
               name='tutorial'
               value={this.state.tutorial}
               onChange={event => this.handleChange(event)}
               />
              <button onClick={event => this.submitTrick(event)}>Send It!</button> 
            </form>
        )
    }
}
export default Form;