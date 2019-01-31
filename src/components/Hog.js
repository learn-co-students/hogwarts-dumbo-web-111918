import React from "react";

class Hog extends React.Component {
  state = {
    shown: false
  }

  toggleDetails = () => {
    this.setState({
      shown: !this.state.shown
    });
  }

  default = (
    <img alt={this.props.hog.name} src={require(`../hog-imgs/${this.props.hog.name.split(" ").join("_").toLowerCase()}.jpg`)}/>
  );
  details = (
    <div>
      <p>Greased: {this.props.hog.greased.toString()}</p>
      <p>Weight: {this.props.hog["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]}</p>
      <p>Highest Medal Achieved: {this.props.hog["highest medal achieved"]}</p>
    </div>
  );

  render() {
    return (
      <div className="" onClick={this.toggleDetails}>
        <div className="pigTile">
          <h3>{this.props.hog.name}</h3>
          {this.state.shown ? this.details : this.default}
        </div>
      </div>
    );
  }
}
export default Hog;
