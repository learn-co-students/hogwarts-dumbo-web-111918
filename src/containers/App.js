import React, { Component } from 'react';
import '../App.css';
import Nav from '../components/Nav' //go one folder up
import hogs from '../porkers_data';
import PigContainer from './PigContainer';

class App extends Component {
  state={
    hogsArr:hogs,
    filterOn: false,
    sortNameOn: false,
    sortWeightOn: false
  }
 
  toggleFilterHandler = () =>{
    //listening for listener
    console.log('clicked')
    this.setState({
      filterOn: !this.state.filterOn
    })
    //purpose of this lab is to change the state of the filterOn
  }

  toggleSortNameOnHandler = () =>{
    this.setState({
      sortNameOn: !this.state.sortNameOn
    })
  }

  toggleWeightHandler = () =>{
    this.setState({
      sortWeightOn: !this.state.sortWeightOn
    })
  }
  //pass in state and the toggler 
  //To ASK: why pass in state? other than to see if it has changed

  //i need to on true of the state render the correct array that I want to pass down to container
  whatArrToRender = (arr)=>{
    let newCopyOfHogsArr = [ ...this.state.hogsArr ]

    if (this.state.filterOn === true){
      console.log('true')
      return newCopyOfHogsArr.filter((hog)=>{
        return hog['greased'] === true;
    })
    } 
    if (this.state.sortNameOn === true) {
      console.log('inside sort')
        return newCopyOfHogsArr.sort((a,b)=> (a.name.localeCompare(b.name)))
    }
    if (this.state.sortWeightOn === true) {
      console.log('inside weight sort')
      return newCopyOfHogsArr.sort((a, b) => a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'])

    } else{
      return this.state.hogsArr
    }
  }

  render() {
   //pass in state as props and we can see that state is changed
   //pass in the toggle function which is the cb func that will be called onClick
   //to setState and rerender the DOM
   console.log(this.whatArrToRender())
    return (
      <div className="App">
        <Nav 
          filterOn={this.state.filterOn}
          filterFunc={this.toggleFilterHandler}
          
          sortNameOn={this.state.sortNameOn}
          sortFunc={this.toggleSortNameOnHandler}

          sortWeightOn={this.state.sortWeightOn}
          weightFunc={this.toggleWeightHandler} />

        <PigContainer hogs={this.whatArrToRender()} />
      </div>
    )
  }
}

export default App;
