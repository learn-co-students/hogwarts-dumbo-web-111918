import React, { Component } from 'react';
import '../App.css';


class HogCard extends Component {

state = {
  clicked: false
}

clickHandler = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render () {
    return (
      <div className ="ui eight wide column">
        <div className="pigTile">
          <h3>{this.props.name}</h3>
            <img onClick={this.clickHandler} alt="pig" src={`./hog-imgs/${this.props.name.replace(/\s/g, '_')}.jpg`} /><br></br>
            {this.state.clicked ? (<div>
            <p>Hog Specialty: {this.props.specialty}</p>
            <p>Greased Status: {this.props.greased ? "Greasy" : "Not yet greasy"}</p>
            <p>Highest Medal Acheived: {this.props.medal}</p>
            <p>Weight Ratio: {this.props.weight}</p></div>): "" }
          </div>
       </div>
    )
  }
}

export default HogCard
