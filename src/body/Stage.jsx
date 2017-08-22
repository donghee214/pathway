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
	     <div className = "stage">	
	     	<h1 className="stageTitle">
	     		{this.props.currentInfo[1]}
	     	</h1>
	     	<div className="tag">
	     		Stage
	     	</div>
	     	<h2>
	     		{this.state.conDate}
	     	</h2>
	     	<p className="stageText">
	     		{this.props.currentInfo[2]}
	     	</p>
	     	<Down />
	     </div>
    )
  }
}
