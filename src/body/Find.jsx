import React from 'react';
import '../../styles/index.scss';
import Card from './Card.jsx'

export default class MyProj extends React.Component {
  render() {
    return (
    	<div>
	    	<div className="welcomeText">
		    	<h1 className="welcomeTitle">
		    		Find Projects
		    	</h1> 
		    	<div className="group">
				      <input type="text" required />
				      <span className="highlight"></span>
				      <span className="bar"></span>
				      <label>What are you researching today?</label>
				 </div>

	    	</div>
	    	<h1 className="suggestedProjects">
	    	Suggested Projects
	    	</h1>
	      <div className="cardView">
	        <Card />
	        <Card />
	        <Card />
	        <Card />
	       	<Card />
	        <Card />
	        <Card />
	        <Card />
	        <Card />
	      </div>
      </div>
    )
  }
}
