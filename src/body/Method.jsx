import React from 'react';
import '../../styles/index.scss';
import Exit from './Exit.jsx';
import Down from './Down.jsx';
import Create from './Create.jsx';
export default class Stage extends React.Component {

	constructor(props){
		super(props)
		var date = (new Date());
		var month = date.getMonth() + 1
		var conDate  = date.getDate() + '/' + month + '/' + date.getFullYear()
		this.state ={
			conDate: conDate
		}
	}

	dummyCaller(){
		return
	}
	// returnDate(){
	// 	var Date = new Date()
	// 	var Day = Date.getDay()
	// 	console.log(Day)
	// }
  render() {
    return (
    	<div className="methodContainer">
    	
	     <div className = "method">	
	     
	     <div className="topContent">
    		<h1 className="methodTitle">
    			{this.props.currentInfo[1]}
    		</h1>
    		<div className="inquiry">
    			?
    		</div>

    		<div className="tag">
		  		Method
		    </div>
			</div>
    		<h2>
    			Last edited by <a className="blue">Emily Kim</a> on 04/21/16 12:44 pm EST
    		</h2>    	
    		<p>
    			{this.props.currentInfo[2]}
    		</p>
    		<div className="buttonGroupMethod">
    			<div className="buttonMethod">
    			Upload File
    			</div>
    			<div className="buttonMethod">
    			Create New File
    			</div>
    		</div>
    			<p className="files">
    				Recent Files
    			</p>
    			<ul className="items">
    				<li>
    					link1.txt
    				</li>
    				<li>
    					loren.txt
    				</li>
    				<li>
    					ipsum.png
    				</li>
    				<li>
    					somefillerfile.png
    				</li>
    				<br/>
    				<li>
    					View more files
    				</li>
    			</ul>
    		<div className="miniButton">
    				<Create />
    				<Down expandView={this.dummyCaller.bind(this)}/>
    		</div>
	     </div>
	     <div className="methodLine"/>
	     </div>
    )
  }
}
