import React from 'react';
import '../styles/index_jeffery.scss';

export default class Modal1 extends React.Component {
  render() {
    return (
    	<div className="modalContainer">
	    	<div className="modal">
		    	<p className="modalTitle">Welcome, Dan!</p>
		    	<p className="modalDesc">Pathway is here to help you prosper as a design researcher. With Pathway you’ll be able to collaborate with your team on projects, track your design process and learn about other design research projects being conducted across the organization. Are you ready to discover your path?</p>
          <button onClick={this.props.nextClicked.bind(this)}>Learn more</button>
		    	<a onClick={this.props.skip.bind(this)}>Skip</a>
	    	</div>
    	</div>
    )
  }
}