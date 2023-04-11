import { Component } from 'react';
import './App.css';
import Tricks from '../Tricks'
import getAllTricks from '../../ApiCalls'
import Form from '../Form'

class App extends Component {
  constructor() {
    super();
    this.state = {
      tricks: []
    }
  }
  componentDidMount() {
    getAllTricks()
      .then(data => {
        console.log(data)
        this.setState({ tricks: data})
        console.log(data)
      })
  }
  addTrick = (newTrick) => {
    this.setState({tricks: [...this.state.tricks, newTrick]})
  }
  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Form addTrick={this.addTrick} />
        <Tricks tricks={this.state.tricks}/>
      </div>
    );
  }
}

export default App;