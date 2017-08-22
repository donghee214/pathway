import React from 'react';
import '../../styles/index.scss';

export default class Card extends React.Component {
  render() {
    return (
		   <svg className="down" fill="#0D78D2" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
		    <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"/>
		    <path d="M0-.75h24v24H0z" fill="none"/>
		</svg>
    )
  }
}
