import React from 'react';
import '../styles/index_jeffery.scss';
import book1 from "/Users/jefferyli/Desktop/Pathway/images/interviewingusers.png";
import book2 from "/Users/jefferyli/Desktop/Pathway/images/universalmethods.png";
import book3 from "/Users/jefferyli/Desktop/Pathway/images/sprint.png";
import book4 from "/Users/jefferyli/Desktop/Pathway/images/empathy.png";


export default class Resources extends React.Component {
  render() {
    return (
      <div>
	    <div className="resources">
	    	<p className="title">Books</p>
	    	<div className="block">
	    	<div className="book">
	    		<img src={book1} alt="Interviewing Users By Steve Portigal" width="50%"/>
	    		<p className="bookLink"><a href="#">Interviewing Users</a></p>
	    		<p className="author">By Steve Portigal</p>
	    	</div>
	    	<div className="book">
				<img src={book2} alt="The Pocket Universal Methodsof Design" width="75%"/>
	    		<p className="bookLink"><a href="#">The Pocket Universal Methods of Design</a></p>
	    		<p className="author">By Bella Martin & Bruce Hanington</p>
	    	</div>
	    	<div className="book">
	    		<img src={book3} alt="Sprint: How to Solve Big Problems and Test New Ideas in Just Five Days" width="50%"/>
	    		<p className="bookLink"><a href="#">Sprint: How to Solve Big Problems and Test New Ideas in Just Five Days</a></p>
	    		<p className="author">By Jake Knapp, John Zeratsky & Braden Kowitz</p>
	    	</div>
	    	<div className="book">
	    		<img src={book4} alt="Practical Empathy" width="50%"/>
	    		<p className="bookLink"><a href="#">Practical Empathy</a></p>
	    		<p className="author">By Indi Young</p>
	    	</div>
	    	</div>
	    </div>
      </div>
    )
  }
}
