import React from 'react';
import '../styles/index_jeffery.scss';
import Resources from './Resources.jsx';
import Books from './Books.jsx';
export default class App extends React.Component {
  render() {
    return (
      <div>
       <Resources/>
       <Books/>
      </div>
    )
  }
}
