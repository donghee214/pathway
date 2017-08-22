import React from 'react';
import '../../styles/index_emily.scss';
import Card from './Card.jsx'

export default class MyProj extends React.Component {
  render() {
    return (
    	<div>
	    	<div className="welcomeText">
		    	<h1 className="welcomeTitle">
		    		My Projects
		    	</h1>
		    	<p className="welcomeDescription">
		    		Use My Projects to keep track of all of your research artifacts. Easily document your design process as you go.
		    	</p>
	    	</div>

	      <div className="cardView">
	        <Card changeBody={this.props.changeBody}/>
	    

	      </div>
      </div>
    )
  }
}
