import React, { Component } from 'react';

class HogTile extends Component {

    state = {
        front: true
    }

    showOtherSide = () => {
        this.setState({
            front: !this.state.front
        })
    }

    front = (<img alt="" src={require(`../hog-imgs/${this.props.object.name.toLowerCase().split(" ").join("_")}.jpg`)} onClick={this.showOtherSide} ></img>)
    back = (
        <div onClick={this.showOtherSide} >
        <h3>Specialty: {this.props.object.specialty}</h3>
        <h3>Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {this.props.object['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</h3>
        <h3>Greased: {this.props.object.greased.toString()}</h3>
        </div>
    )
    render() {
        return (
            <article className="pigTile">
                <h2>{this.props.object.name}</h2>
                {this.state.front ? this.front:this.back}                
            </article>
        )
    }
  }
  
  export default HogTile;