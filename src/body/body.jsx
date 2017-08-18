import React from 'react';
import '../../styles/index.scss';
import MyProj from './MyProj.jsx';
import MyTeam from './MyTeam.jsx';
import Find from './Find.jsx'

export default class Body extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			fill: "MyProj"
		}
	}

	renderBody(){
		if (this.props.bodyDisplay === "MyProjects"){
			return(<MyProj />)
		}

		if(this.props.bodyDisplay === "Find"){
			return (<Find />)
		}
		if (this.props.bodyDisplay === "MyTeam"){
			return <MyTeam />
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
