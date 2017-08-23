import React from 'react';

import Nav from './nav_emily.jsx'
import Body from './body/body.jsx';
import '../styles/index.scss';

export default class App extends React.Component {
    constructor(props){
    super(props)
    this.state = {
      showNotificationBox: false,
      bodyDisplay: '',
    }
  }

  changeBody(choice){
    this.setState({bodyDisplay: choice})
  }


  render() {
    return (
      <div>
      	<Nav changeBody={this.changeBody.bind(this)}/>
        <Body changeBody={this.changeBody.bind(this)} bodyDisplay={this.state.bodyDisplay}/>
      </div>
    )
  }
}
