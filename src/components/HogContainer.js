import React, { Component } from 'react';
import '../App.css';
import HogCard from '../components/HogCard'
import hogs from '../porkers_data';

class HogContainer extends Component {


  state = {
    hogList: hogs,
    filterOn: false
  }

  sortWeightHandler =  () => {
    let weightArray = [...this.state.hogList]
    weightArray.sort((a, b) =>
    (a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
    - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']))
    this.setState({
      hogList: weightArray
    })
  }

  sortAZHandler =  () => {
    let nameArray = [...this.state.hogList]
    nameArray.sort((a, b) => a.name.localeCompare(b.name))

    this.setState({
      hogList: nameArray
    })
  }

  toggleFilter = () => {
    this.setState({
      filterOn:  !this.state.filterOn
    })
  }


  mapHogs = () => {
    return this.state.hogList.map(hog =>
      (<HogCard key={hog.name} name={hog.name} specialty={hog.specialty} greased={hog.greased} clickHandler={this.clickHandler}
      medal={hog['highest medal achieved']}
      weight={hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}/>)
    )
  }

  render () {
    return (
      <div><button onClick={this.sortWeightHandler}>Sort By Weight</button>
      <button onClick={this.sortAZHandler}>Sort By Name</button>
      <button onClick={this.toggleFilter}>Filter Greasy Bois</button>
      <div className="ui grid container">
      {this.mapHogs()}
      </div></div>
    )
  }

}

export default HogContainer
