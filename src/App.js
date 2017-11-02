import React, { Component } from 'react';
import axios from 'axios';
//import logo from './logo.svg';
import './App.css';

// import Components
import List from './components/List.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    }
    this.getCharacters = this.getCharacters.bind(this);
  }

  getCharacters() {
    return (
      axios.get('https://swapi.co/api/people')
        .then((response) => {
          console.log(response.data);
          // set people state to request
          this.setState({
            people: response.data.results
          })
        })
        .catch(((error) => {
          console.log('An error occured: ' +error)
        }))
    );
  }

  componentDidMount() {
    this.getCharacters();
  }
  render() {
    const { people } = this.state
    return (
      <div className="App">
        <List people={people} />
      </div>
    );
  }
}

export default App;
