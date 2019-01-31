import React, { Component } from "react"
import { Card, Button, Image } from 'semantic-ui-react'

class HogCard extends Component {

  state = {
    details: false
  }

  toggleDetails = () => {
    this.setState({details: !this.state.details})
  }

  render() {
    const {name, specialty, greased, medal, weight} = this.props.hog
    const fileName = name.split(" ").map(word => word.toLowerCase()).join("_") + ".jpg"
    return (
      <Card centered>
        <Image fluid rounded alt="" src={`/hog-imgs/${fileName}`} />
        {this.state.details && <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>
            <span className='date'>{greased ? "Greased" : "Dry"}</span>
          </Card.Meta>
          <Card.Description>Specialty: {specialty}</Card.Description>
          <Card.Description>Top Medal: {medal}</Card.Description>
          <Card.Description>Ratio to Ref: {weight}</Card.Description>
        </Card.Content>}
        <Card.Content extra>
          <Button positive fluid onClick={this.toggleDetails}>{this.state.details ? "Hide" : "Details"}</Button>
        </Card.Content>
      </Card>
      )
  }
}

export default HogCard