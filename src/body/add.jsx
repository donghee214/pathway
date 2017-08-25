import React from 'react';
import '../../styles/index.scss';


export default class Add extends React.Component {

  render() {
    return (
      <div onClick={this.props.showModal.bind(this)} className="add">
      	+
      </div>
    )
  }
}
