import React, { Component } from 'react';

class Filter extends Component {
    render() {
        return (
            <form className="searchForm" onClick={this.props.clickhandler}>
                <div>
                <label>Sort by Name</label>
                <input type="radio" name="sort" id="name-sort"/>
                </div>
                <div>
                <label>Sort by Weight</label>
                <input type="radio" name="sort" id="weight-sort"/>
                </div>
                <div>
                <label>Filter Greased</label>
                <input type="checkbox" name="greased" id="greased-filter"/> 
                </div>
            </form>
        )
    }
  }
  
export default Filter;