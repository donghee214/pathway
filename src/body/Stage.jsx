import React from 'react';
import '../../styles/index.scss';
import Exit from './Exit.jsx';
import Down from './Down.jsx'
import Method from './Method.jsx'
export default class Stage extends React.Component {

	constructor(props){
		super(props)
		this.state ={
			methodTags: [],
		}
		var date = (new Date());
		var month = date.getMonth() + 1
		var conDate  = date.getDate() + '/' + month + '/' + date.getFullYear()
		this.state ={
			conDate: conDate
		}
	}

	renderChildren(){
		if (this.props.methods.length == 0){
			return (null)
		}
		else {
		      const boxesList = this.props.methods.map((box) =>
		        <Method key={box[1]} currentInfo={box} />
		    );
		    return (boxesList)
		}
	}
  render() {
    return (
    	<div style = {{width: '100%'}}>
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
		     {this.renderChildren()}
		</div>
    )
  }
}
