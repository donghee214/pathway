import React from 'react';
import '../styles/index.scss';

export default class Modal1 extends React.Component {
	
  render() {
    return (
      <div className="modalContainer">
        <div className="modalFrame">
          <h1 className="welcome">Welcome, Vanessa</h1>
          <p className="intro">Pathway is here to help you prosper as a design researcher. With Pathway you’ll be able to collaborate with your team on projects, track your design process and learn about other design research projects being conducted across the organization. Are you ready to discover your path?</p>
          <button>Next</button>
          <p><a href="#">Skip</a></p>
        </div>
      </div>
    )
  }
}
