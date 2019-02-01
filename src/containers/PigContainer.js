import React from 'react';
import PigCard from '../components/PigCard'

class PigContainer extends React.Component {
    //why would the parent care that I changed the clicked state 

    render () {
        // console.log(this.props)
        let hogCardsArr = this.props.hogs.map(hog => <PigCard key={hog.name} hogData={hog} />)
        return (
            <div className="ui grid container">{hogCardsArr}</div>
        )
    }
}

export default PigContainer;

