import React from 'react';
import '../styles/index.scss';
import Notif from './Notif.jsx'
import profileImg from '../styles/images/Profile.png';
// import notifBoxImg from '../styles/images/notificationBox.svg';

export default class NotificationBox extends React.Component {
  render() {
    return (
      <div className="notifBox">
        <div className="notifArrow"></div>
          <div className="notifContent">
            <ul>
              <li>Vanessa Rementilla has invited you to collaborate on WealthManagement</li>
              <hr></hr>
              <li>Your teammate has added problemframing.doc to WealthManagement</li>
              <hr></hr>
              <li>Notification3</li>
              <hr></hr>
              <li>Notification4</li>
              <hr></hr>
              <li>Notification1</li>
              <hr></hr>
              <li>Notification2</li>
              <hr></hr>
              <li>Notification3</li>
              <hr></hr>
              <li>Notification4</li>
            </ul>
          </div>
      </div>
    )
  }
}
