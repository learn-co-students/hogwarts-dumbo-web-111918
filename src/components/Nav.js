import piggy from '../porco.png'
import React from 'react'


//allow users to sort the hogs based on name and weight 
//and filter the hogs that are greased

const Nav = (props) => {
	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<a href="https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231">
					<img src={piggy} className="App-logo" alt="piggy" />
				</a>
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
			<div>
				<button onClick={props.filterFunc}>Filter hogs</button> 
				<button onClick={props.sortFunc}>Sort Hogs By Name</button> 
				<button onClick={props.weightFunc}>Sort Hogs By Weight</button> 
			
			</div>
		</div>
	)
}

export default Nav
