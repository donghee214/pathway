import React from 'react';
import '../../styles/index.scss';
import Exit from './Exit.jsx';
import Down from './Down.jsx'
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


	// returnDate(){
	// 	var Date = new Date()
	// 	var Day = Date.getDay()
	// 	console.log(Day)
	// }
  render() {
    return (
	     <div className = "method">	
    		<h1 className="methodTitle">
    			{this.props.currentInfo[1]}
    		</h1>
    		<div className="tag">
		  		Method
		    </div>
    		<h2>
    			Last edited by <a className="blue">Emily Kim</a> on 04/21/16 12:44 pm EST
    		</h2>    	
    		<p>
    			{this.props.currentInfo[2]}
    		</p>
	     </div>
    )
  }
}
