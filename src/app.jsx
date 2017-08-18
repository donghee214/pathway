import React from 'react';
import '../styles/index.scss';
import Body from './body/body.jsx'
import Nav from './Nav.jsx'

export default class App extends React.Component {
  render() {
    return (
      <div>
      	<Nav />
        <Body/>
      </div>
    )
  }
}
