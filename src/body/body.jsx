import React from 'react';
import '../../styles/index_emily.scss';
import MyProj from './MyProj.jsx';
import MyTeam from './MyTeam.jsx';
import Find from './Find.jsx';
import Resources from '.././Resources.jsx'
import Tree from './tree.jsx';

export default class Body extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			treeInfo: [""],
		}
	}

	renderBody(){
		if (this.props.bodyDisplay === "MyProjects"){
			return(<MyProj changeBody={this.props.changeBody}/>)
		}

		if(this.props.bodyDisplay === "Find"){
			return (<Find changeBody={this.props.changeBody}/>)
		}
		if (this.props.bodyDisplay === "MyTeam"){
			return <MyTeam changeBody={this.props.changeBody}/>
		}

		if (this.props.bodyDisplay === "Resources"){
			return <Resources />
		}

		if (this.props.bodyDisplay === "ViewTree"){
			return (<Tree />)
		}


	


	}
  render() {
    return (
      <div className="AppBody">
        {this.renderBody()}
      </div>
    )
  }
}
