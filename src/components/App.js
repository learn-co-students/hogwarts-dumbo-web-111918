import React, {Component} from 'react';
import '../App.css';
import Nav from './Nav'
import Hogs from './Hogs'
import Filter from './Filter'
import hogsData from '../porkers_data';

class App extends Component {
  state = {
    hogs: hogsData,
    parsedHogs: hogsData,
    sortName: "name",
    greased: false
  }

  toggleGreased = () => {
    this.setState({
      greased: !this.state.greased
    }, this.sortHogs);

  }
  toggleSort = (e) => {
    this.setState({
      sortName: e.target.id
    }, this.sortHogs);
  }

  sortHogs = () => {
    if (this.state.sortName === "name") {
      this.setState({
        parsedHogs: [...this.state.hogs].sort((a, b) => a.name.localeCompare(b.name))
      })
    } else if (this.state.sortName === "weight") {
      this.setState({
        parsedHogs: [...this.state.hogs].sort((a, b) => {
          let prop = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water';
          return a[prop] - b[prop];
        })
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Nav/>
        <Filter toggleSort={this.toggleSort} toggleGreased={this.toggleGreased} />
        <Hogs hogs={this.state.greased ? this.state.parsedHogs.filter(hog => hog.greased) : this.state.parsedHogs}/>
      </div>
    )
  }
}

export default App;
