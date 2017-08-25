import React from 'react'; 
import Notif from './Notif.jsx'
import profileImg from '../styles/images/Profile.png';
import NotificationBox from './NotificationBox.jsx';


export default class App extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			showNotificationBox: false,
		}
	}
	showNotif(){
		this.setState({showNotificationBox: !this.state.showNotificationBox})
	}

	renderNotification(){
		if (this.state.showNotificationBox == true){
			return (<NotificationBox />);
		}
		else if(this.state.showNotificationBox == false){
			return (null);
		}
	}

  render() {
    return (
      <nav>
      	<div className="navEl">
      		<div className="pathway">
      			<h1>Pathway</h1>
      		</div>
      		<div className="options">
      			<h2 className="pages"><a onClick = {()=>{this.props.changeBody("MyProjects")}}>My Projects</a></h2>
      			<h2 className="pages"><a onClick ={() => this.props.changeBody("MyTeam")}>My Team</a></h2>
      			<h2 className="pages"><a onClick={()=> {this.props.changeBody("Find")}}>Find Projects</a></h2>
      			<h2 className="pages"><a onClick={()=> {this.props.changeBody("Resources")}}>Resources</a></h2>
      			<div onMouseDown={this.showNotif.bind(this)}>
      				<Notif />
      			</div>
      			{this.renderNotification()}
      			<img className="profile" src={profileImg} />
      		</div>
      	</div>
      </nav>
    )
  }
}
