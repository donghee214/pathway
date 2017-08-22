import React from 'react';
import '../styles/index_emily.scss';
import myProjects from '../styles/images/tutorial_myprojects.png';

export default class Modal2 extends React.Component {
	
  render() {
    return (
      <div className="modalContainer">
        <div className="modalFrame">
          <h1 className="welcome">My Projects</h1>
          <div className="details">
            <div>
              <img className="myProjectsImg" src={myProjects} />
            </div>
            <div>
              <p className="intro2"> My Projects is where you can keep track of all the work you’re doing as a research designer.</p>
              <button>Next</button>
              <p><a href="#">Skip</a></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
