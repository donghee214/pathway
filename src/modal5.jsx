import React from 'react';
import '../styles/index_jeffery.scss';

export default class Modal5 extends React.Component {
  render() {
    return (
    	<div className="modalContainer">
	    	<div className="modal">
		    	<p className="modalTitle">Ready to find your Pathway?</p>
		    	<p className="modalDesc">Let's fucking start fam and make ya damn tree for other ppl to steal ur ideas.</p>
		    	<button onClick={this.props.skip.bind(this)}>Let's start!</button>
	    	</div>
    	</div>
    )
  }
}