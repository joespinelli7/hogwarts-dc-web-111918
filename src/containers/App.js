import React, { Component } from 'react';
import '../App.css';
import Nav from '../components/Nav'
import FiltersContainer from './FiltersContainer'
import HogsContainer from './HogsContainer'
import hogs from '../porkers_data';

const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
class App extends Component {
  constructor() {
    super()
    this.state = {
      hogsData: hogs,
      sort: 'name',
      greased: false
    }
  }

  //take all hogs and sort them based on certain criteria
  handleSortHogs = () => {
    let currentHogs = [...this.state.hogsData]
    let sortedHogs = this.state.sort === 'name' ?
        currentHogs.sort((a, b) => a.name.localeCompare(b.name))
      :
        currentHogs.sort((a, b) => b[weight] - a[weight])

    return sortedHogs
  }

  setSortState = (valueOfSelect) => {
    this.setState({
      sort: valueOfSelect
    })
  }

  setGreasedState = () => {
    this.setState({
      greased: !this.state.buttered
    })
  }

  filterGreased = () =>{
    return this.state.greased ? this.handleSortHogs().filter( hogObj => hogObj.greased === true) : this.handleSortHogs()
  }

  render() {
    return (
      <div className="App">
          <Nav />
          <FiltersContainer
            setSortState={this.setSortState}
            setGreasedState={this.setGreasedState}
            greasedState={this.state.greased}
          />
          <HogsContainer ourHogs={this.filterGreased()}/>
      </div>
    )
  }
}

export default App;
