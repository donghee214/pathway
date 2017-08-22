import React from 'react';
import '../styles/index_jeffery.scss';
import findprojects from "/Users/jefferyli/Desktop/Pathway/images/findprojects.png";

export default class Modal4 extends React.Component {
  render() {
    return (
    	<div className="modalContainer">
	    	<div className="modal">
		    	<p className="modalTitle">Find Projects</p>
		    	<img src={findprojects} alt="Find Projects" width="40%"/>
		    	<p className="modalDesc">Find other projects across the organization, learn about other team’s research processes and see the output of their work.</p>
		    	<button onClick={this.props.nextClicked.bind(this)}>Next</button>
		    	<a onClick={this.props.skip.bind(this)}>Skip</a>
	    	</div>
    	</div>
    )
  }
}