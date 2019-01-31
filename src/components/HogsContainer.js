import React, { Component } from 'react';
import HogTile from './HogTile'


class HogsContainer extends Component {
    render() {
        let piggies
        if (this.props.greasedFilter){
            let greased = this.props.hogs.filter(hog => hog.greased)
            if (this.props.filterId === "weight-sort"){
                piggies = greased.map(hog => hog).sort(function(a, b){return b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']-a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'];});
                piggies = piggies.map(hog => {
                    return < HogTile key={hog.name} object={hog}/>
                });
            } else if (this.props.filterId === "name-sort"){
                piggies = greased.map(hog => hog).sort((a, b) => a.name.localeCompare(b.name));
                piggies = piggies.map(hog => {
                    return < HogTile key={hog.name} object={hog}/>
                })
            } else {
                piggies = greased.map(hog => {
                    return < HogTile key={hog.name} object={hog}/>
                })
            }
        } else {
            if (this.props.filterId === "weight-sort"){
                piggies = this.props.hogs.map(hog => hog).sort(function(a, b){return b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']-a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'];});
                piggies = piggies.map(hog => {
                    return < HogTile key={hog.name} object={hog}/>
                });
            } else if (this.props.filterId === "name-sort"){
                piggies = this.props.hogs.map(hog => hog).sort((a, b) => a.name.localeCompare(b.name));
                piggies = piggies.map(hog => {
                    return < HogTile key={hog.name} object={hog}/>
                })
            } else {
                piggies = this.props.hogs.map(hog => {
                    return < HogTile key={hog.name} object={hog}/>
                })
            }
        }



        // if (this.props.filterId === "greased-filter"){
        //     let greased = this.props.hogs.filter(hog => hog.greased)
        //     piggies = greased.map(hog => {
        //         return < HogTile key={hog.name} object={hog}/>
        //     })
        // } else if (this.props.filterId === "weight-sort"){
        //     piggies = this.props.hogs.map(hog => hog).sort(function(a, b){return b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']-a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'];});
        //     piggies = piggies.map(hog => {
        //         return < HogTile key={hog.name} object={hog}/>
        //     });
        // } else if (this.props.filterId === "name-sort"){
        //     piggies = this.props.hogs.map(hog => hog).sort((a, b) => a.name.localeCompare(b.name));
            // piggies = piggies.map(hog => {
            //     return < HogTile key={hog.name} object={hog}/>
            // })
        // } else {
        //     piggies = this.props.hogs.map(hog => {
        //         return < HogTile key={hog.name} object={hog}/>
        //     })
        // }
    
        return (
            <div className="HogsContainer">
                {piggies}
            </div>
        )
    }
  }
  
  export default HogsContainer;