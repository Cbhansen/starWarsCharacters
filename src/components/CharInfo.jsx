import React, { Component } from 'react';
import './CharInfo.css';

class CharInfo extends React.Component {
    constructor(props) {
        super(props);
        // bind function to this
        this.toggleInfo = this.toggleInfo.bind(this);
        // set state
        this.state = {
            expanded: false
        }
    }
    // toggle info box
    toggleInfo() {
        this.setState({
            expanded: !this.state.expanded
        })
    }

    render() {
        // if not expanded - show toggle - else show hide
        const charInfo = this.props.charInfo;
        if(!this.state.expanded) { // expanded state: false
            return <p className="btn btn-info" onClick={this.toggleInfo}>Show Info</p>
        } else {
            return (
                <div className="charInfo"> 
                    <p className="btn btn-warning" onClick={this.toggleInfo}>Hide</p>
                    <ul className="list-group">
                        <li>
                            <p>Birth date: {charInfo.birth_year}</p>
                            <p>Gender: {charInfo.gender}</p>
                            <p>Height: {charInfo.height}</p>
                            <p>Hair color: {charInfo.hair_color}</p>
                            <p>Eye color: {charInfo.eye_color}</p>
                        </li>
                    </ul>
                </div>
            )
        }
    }
}

export default CharInfo;