import React from "react";
import Hog from "./Hog.js";

class Hogs extends React.Component {
  hogCards = () => {
    return this.props.hogs.map(hog => (<Hog key={hog.name} hog={hog} />));
  };

  render() {
    return (
      <div>
        {this.hogCards()}
      </div>
    );
  }
}
export default Hogs;
