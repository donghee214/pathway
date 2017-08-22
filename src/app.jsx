import React from 'react';
import '../styles/index_emily.scss';
import Nav from './nav_emily.jsx'
import Modal1 from './tutorial1.jsx';
import Modal2 from './tutorial2.jsx';
import Body from './body/body.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Modal2/>

      </div>
    )
  }
}
