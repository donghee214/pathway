import React from 'react';
import '../styles/index_emily.scss';
import Nav from './nav_emily.jsx';
import Modal2 from './tutorial2.jsx';
import Profile from './profile.jsx';
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Profile />
        
      </div>
    )
  }
}
