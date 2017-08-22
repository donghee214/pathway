import React from 'react';
import '../styles/index_emily.scss';
import myProjects from '../styles/images/tutorial_myprojects.png';
import add from '../styles/images/add.svg';

export default class Profile extends React.Component {
	
  render() {
    return (
      <div className="profileContainer">
        <div className="profilePage">
          <h1>My Profile</h1>
          <p> Edit your profile settings </p>
          <div className="circle"></div>

          <form className="profileDetails">
            <div className="formLeft">
              <div className="firstLast">
                <div className="firstName">
                  <input className="fields" type="text" required />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>First Name</label>
                </div>
                <div className="lastName">
                  <input className="fields"type="text" required />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Last Name</label>
                </div>
              </div>
              <div className="email">
                <div className="firstName">
                  <input className="fields"type="text" required />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>RBC Email</label>
                </div>
              </div>
              <div className="jobTitle">
                <div className="firstName">
                  <input type="text" required />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Job Title</label>
                </div>
              </div>
              <input className="submitButton" type="submit" value="Done"/>
            </div>
            <div className="formRight">
              <div className="researchInterests">
                  <input type="text" required />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Research Interests</label>
              </div>
              <div>
                  <h4 className="suggestions">Suggestions:</h4>
                  <div className="tagGroup">
                    <p className="tags"><img src={add}/> Millennials</p>
                    <p className="tags"><img src={add}/>Agile</p>
                    <p className="tags"><img src={add}/>Design Thinking</p>
                    <p className="tags"><img src={add}/>Customer Experience</p>
                    <p className="tags"><img src={add}/>Experience Mapping</p>
                  </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
