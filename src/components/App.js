import React, { Component } from 'react';
import { Container, Divider } from 'semantic-ui-react'

import Nav from './Nav'
import hogs from '../porkers_data';
import HogsContainer from '../containers/HogsContainer'


class App extends Component {

  state = {
    hogs,
    filtered: false,
    sortedByName: false,
    sortedByWeight: false,
    key: ""
  }

  toggleFilter = () => {
    this.setState({filtered: !this.state.filtered})
  }

  sortByName = () => {
    this.setState({sortedByName: !this.state.sortedByName})
  }

  sortByWeight = () => {
    this.setState({sortedByWeight: !this.state.sortedByWeight})
  }

  search = (e) => {
    this.setState({key: e.target.value})
  }

  render() {
    const { hogs, filtered, sortedByName, sortedByWeight, key } = this.state
    let passedHogs = filtered ? hogs.filter(hog => hog.greased) : hogs
    if (sortedByName) passedHogs.sort( (a,b) => a.name.localeCompare(b.name))
    if (sortedByWeight) passedHogs.sort( (a,b) => b.weight - a.weight)
    if(key.length) passedHogs = passedHogs.filter(hog => hog.name.toLowerCase().includes(key))
    return (
      <Container fluid>
        <Divider section/>
        <Nav
          toggled={filtered}
          func={this.toggleFilter}
          sortByName={this.sortByName}
          sortedName={sortedByName}
          sortByWeight={this.sortByWeight}
          value={this.state.key}
          search={this.search}
        />
        <Divider section/>
        <Container fluid>
            <HogsContainer hogs={passedHogs}/>
        </Container>
      </Container>
    )
  }
}

export default App;
