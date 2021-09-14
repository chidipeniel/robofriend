import React, { Component } from 'react';
import ShowList from '../components/ShowList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      peniel: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ peniel: users})});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { peniel, searchfield } = this.state;
    const filteredPeniel = peniel.filter(peniel =>{
      return peniel.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !peniel.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <ShowList peniel={filteredPeniel} />
          </Scroll>
        </div>
      );
  }
}

export default App;
