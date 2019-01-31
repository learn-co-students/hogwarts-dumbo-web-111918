import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogsContainer from './HogsContainer'
import hogs from '../porkers_data';
import Filter from './Filter'

class App extends Component {

  state = {
    hogs: hogs,
    greasedFilter: false,
    filterId: ""
  }

  clickhandler = (e) => {
    let id = e.target.id
    
    if (id === "greased-filter"){
      if(e.target.checked){
        this.setState({
         greasedFilter: true
        })
      } else {
        this.setState({
          greasedFilter: false
         })
      }
    } else{
      this.setState({
        filterId: id
       })
    }
  }

  render() {
    return (
      <div className="App">
          < Nav />
          < Filter clickhandler={this.clickhandler}/>
          < HogsContainer hogs={this.state.hogs} filterId={this.state.filterId} greasedFilter={this.state.greasedFilter} />
      </div>
    )
  }
}

export default App;
