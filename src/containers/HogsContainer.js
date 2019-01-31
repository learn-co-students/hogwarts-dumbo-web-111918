import React, { Component } from "react"
import HogCard from '../components/HogCard'
import { Card } from 'semantic-ui-react'

class HogsContainer extends Component {

  state = {}

  render() {
    let hogList = this.props.hogs.map((hog, i) => <HogCard key={i} hog={hog}/>)
    return (
      <Card.Group>
        {hogList}
      </Card.Group>
      )
    }
  }

export default HogsContainer








