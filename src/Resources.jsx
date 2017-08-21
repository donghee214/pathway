import React from 'react';
import '../styles/index_jeffery.scss';

export default class Resources extends React.Component {
  render() {
    return (
      <div>
	    <div className="resources">
	        <p className="title">Resources</p>
	        <p className="subtitle">Design Research How-To's</p>
	        <div className="block">
	        	<div className="info">
	        		<p className="resourceLink"><a href="#">How to conduct usability studies</a></p>
	        		<p className="desc">Short summary here for how to conduct user research.</p>
	        	</div>
	        	<div className="meta">
	        		<p className="date">Last edited on 08/15/17</p>
	        		<p className="name">Written by <a href="#">Nielsen Norman Group</a></p>
	        	</div>
	        </div>
	        <div className="block">
	        	<div className="info">
	        		<p className="resourceLink"><a href="#">How to conduct user research</a></p>
	        		<p className="desc">Short summary here for how to conduct user research.</p>
	        	</div>
	        	<div className="meta">
	        		<p className="date">Last edited on 08/16/17</p>
	        		<p className="name">Written by <a href="#">Employee Digital Experience Architecture</a></p>
	        	</div>
	        </div>
	        <div className="block">
	        	<div className="info">
	       			<p className="resourceLink"><a href="#">How to select the appropriate user experience research methods</a></p>
	        		<p className="desc">Short summary here for how to select the appropriate user-experience research methods.</p>
	        	</div>
	        	<div className="meta">
	        		<p className="date">Last edited on 07/20/17</p>
	        		<p className="name">Written by <a href="#">IDEO</a></p>
	        	</div>
	        </div>
	        <div className="block">
	        	<div className="info">
	    			<p className="resourceLink"><a href="#">How to collaborate with stakeholders on UX research</a></p>
	        		<p className="desc">Short summary here for how to collaborate with stakeholders on UX research.</p>
	        	</div>
	        	<div className="meta">
	        		<p className="date">Last edited on 06/14/17</p>
	        		<p className="name">Written by <a href="#">Adi Shwarma</a></p>
	        	</div>
	        </div>
	    </div>
      </div>
    )
  }
}
