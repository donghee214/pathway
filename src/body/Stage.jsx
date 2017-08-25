import React from 'react';
import '../../styles/index.scss';
import Exit from './Exit.jsx';
import Down from './Down.jsx'
import Create from './Create.jsx'
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
			conDate: conDate,
			expandView: true
		}
	}

	renderChildren(){
		this.renderContents()

		if (this.state.expandView === true)
	{	
		if (this.props.methods.length == 0){
				return (null)
			}
			else {
			      const boxesList = this.props.methods.map((box) =>
			        <Method key={box[1]} currentInfo={box} />
			    );
			    return (boxesList)
			}}
			else{
				return null
			}
	}

	expandCaller(){
		this.setState({expandView: !this.state.expandView})
	}

	renderContents(){
		if (this.props.methods.length === 0){
						return (<li>No Methods To Show</li>)
					}
		else
		{	
		const content = this.props.methods.map((method) =>
			<li key={method[1]}>{method[1]}</li>);
			return content}
		}
  render() {
    return (
    	<div style = {{width: '100%'}}>
		     <div className = "stage">	
		     <div className="topContent">
		     	<h1 className="stageTitle">
		     		{this.props.currentInfo[1]}
		     	</h1>
		     	<div className="tag">
		     		Stage
		     	</div>
		     	</div>
		     	<h2>
		     		{this.state.conDate}
		     	</h2>
		     	<div className="bottomStage">
		     	<p className="stageText">
		     		{this.props.currentInfo[2]}
		     	</p>
		     	<ul className="stageItems">
		     		<p className="noMargin">
		     		Contents
		     		</p>
   					{this.renderContents()}
    			</ul>
    			</div>
		     	<div className="miniButton">
    				<Create />
    				<Down expandView={this.expandCaller.bind(this)}/>
    		</div>  		
		     </div>
		     {this.renderChildren()}
		</div>
    )
  }
}
