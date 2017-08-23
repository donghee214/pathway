import React from 'react';
import '../../styles/index_emily.scss';
import person1 from '../images/person1.png'
import person2 from '../images/person2.png'
import person3 from '../images/person3.png'
import person4 from '../images/person4.png'
import person5 from '../images/person5.png'
import Exit from './Exit.jsx'
export default class Card extends React.Component {
  render() {
    return (
	      <div className="card">
		      <div className="cardContent">
		      	<Exit/>
		        <h1 className="cardTitle">
		        	Title_Filler
		        </h1>
		        <div className="peopleFaces">
		        	<img className="pad" src={person1} />
		        	<img className="pad" src={person2} />
		        	<img className="pad" src={person3} />
		        	<img className="pad" src={person4} />
		        	<img className="pad" src={person5} />
		        </div>
		    
		        <p className="cardDescription">
			        This is a filler description, blah blah blah jeff smells bad blah blah blah
			    </p>
		
		        <div className="recentDocs">
		        	<p className="uploadTitle">
		        		Recent Uploads
		        	</p>
		        	<div className="link">
		        		sadtimez.docs
		    		</div>
		    		<div className="link">
		    			getyourResearch.png
		    		</div>
		        </div>
		        <div onClick={() => {this.props.changeBody("ViewTree")}}  className="viewTree">
		        	View
		        </div>
		      </div>
	      </div>
    )
  }
}
