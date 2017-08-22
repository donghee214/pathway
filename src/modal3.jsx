import React from 'react';
import '../styles/index_jeffery.scss';
import myteam from "/Users/jefferyli/Desktop/Pathway/images/myteam.png";

export default class Modal3 extends React.Component {
  render() {
    return (
    	<div className="modalContainer">
	    	<div className="modal">
		    	<p className="modalTitle">My Team</p>
		    	<img src={myteam} alt="My Team" width="40%"/>
		    	<p className="modalDesc">My Team is your go to place to keep track of team projects and provide feedback on team members’ work.</p>
		    	<button onClick={this.props.nextClicked.bind(this)}>Next</button>
		    	<a onClick={this.props.skip.bind(this)}>Skip</a>
	    	</div>
    	</div>
    )
  }
}