import React from 'react';
import '../../styles/index.scss';
import person1 from '../images/person1.png'
import person2 from '../images/person2.png'
import person3 from '../images/person3.png'
import person4 from '../images/person4.png'
import person5 from '../images/person5.png'
import Card from './Card.jsx'

export default class MyTeam extends React.Component {
  render() {
    return (
    	<div>
	    	<div className="welcomeText">
		    	<h1 className="welcomeTitle">
		    		Employee Digital Experience Architecture 
		    	</h1>
		    	<h2>
		    	Enterprise Architecture, Technology & Operations
		    	</h2>
		    	<div className="peopleFaces">
		        	<img className="pad" src={person1} />
		        	<img className="pad" src={person2} />
		        	<img className="pad" src={person3} />
		        	<img className="pad" src={person4} />
		        	<img className="pad" src={person5} />
		        </div>
		    	<p className="welcomeDescription">
		    		We are a group of UX designers, researchers and Design Thinkers who are working towards improving internal employee experiences across RBC. Some of our most recent projects include redesigning the RBC Intranet, delivering design research workshops and improving HR wellness services.
		    	</p>
	    	</div>

	      <div className="cardView">
	        <Card />
	        <Card />
	        <Card />
	        <Card />
	      </div>
      </div>
    )
  }
}
