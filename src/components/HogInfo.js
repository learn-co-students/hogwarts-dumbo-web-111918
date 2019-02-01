import React from 'react';
//show the hog's details upon a user's click
//need to pass down props 
const HogInfo = (props) =>{
    console.log(props.hogData)
    return <div>
        <p>Specialty: {props.hogData['specialty']} </p>
        <p>Greased: {props.hogData['greased'].toString()} </p>
        <p>Weight: {props.hogData['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']} </p>
        <p>Highest Medal: {props.hogData['highest medal achieved']} </p>
         </div>
}
export default HogInfo;
