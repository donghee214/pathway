import React from 'react';
import '../styles/index_jeffery.scss';
import myprojects from "/Users/jefferyli/Desktop/Pathway/images/myprojects.png";

export default class Modal2 extends React.Component {
  render() {
    return (
    	<div className="modalContainer">
	    	<div className="modal">
		    	<p className="modalTitle">My Projects</p>
		    	<img src={myprojects} alt="myprojects" width="40%"/>
		    	<p className="modalDesc">My Projects is where you can keep track of all the work you’re doing as a research designer.</p>
		    	<button onClick={this.props.nextClicked.bind(this)}>Next</button>
		    	<a onClick={this.props.skip.bind(this)}>Skip</a>
	    	</div>
    	</div>
    )
  }
}