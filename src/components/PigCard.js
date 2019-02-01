import React from 'react';
import HogInfo from './HogInfo'

class PigCard extends React.Component {
    state = {
        click:false
    }
    handleClick = () =>{
        this.setState({
            click:!this.state.click
        })
    }
 
    render () {
        const hogImages = this.props.hogData.name.split(" ").map(word => word.toLowerCase()).join("_") + ".jpg"
        
        let hogMoreInfo = this.state.click === true ? <HogInfo key={this.props.hogData.name} hogData={this.props.hogData} /> :null
        return (
            <div className="ui eight wide column" onClick={this.handleClick} > 
                
                <h3>{this.props.hogData.name} </h3>
                <img alt="" src={require(`../hog-imgs/${hogImages}`)} />
                {hogMoreInfo}
            </div>
        )
    }
}

export default PigCard;