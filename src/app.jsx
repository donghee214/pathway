import React from 'react';
import '../styles/index.scss';
import Nav from './nav.jsx'
import Modal1 from './tutorial1.jsx';
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Modal1/>
      </div>
    )
  }
}
