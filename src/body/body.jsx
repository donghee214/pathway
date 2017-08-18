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
		if (this.state.fill === "MyProj"){
			return(<MyProj />)
		}

		if(this.state.fill === "MyProj"){
			return (<Find />)
		}
		if (this.state.fill === "MyProj"){
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
