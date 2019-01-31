import React from "react";

class Filter extends React.Component {

  render() {
    return (
      <div>
        <button onClick={this.props.toggleSort} id="name">Sort by Name</button>
        <button onClick={this.props.toggleSort} id="weight">Sort by Weight</button>
        <button onClick={this.props.toggleGreased} id="grease">Show Greased</button>
      </div>
    );
  }
}
export default Filter;
