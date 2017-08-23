import React from 'react';
import '../../styles/index.scss';
import Exit from './Exit.jsx'
import Upload from './upload.jsx'


export default class AdditionalOption extends React.Component {
  returnOptions(){
    var array = []
    for (var i=0; i < this.props.boxesStringList.length; i++){
        array.push(<option value="">{this.props.boxesStringList[i]}</option>)
    }
    return array

  }
  render() {
    return (
      <div className="">
        <p>Which stage would you like to put this method under?</p>
          <select ref="privacy" className="privacy" name="cars">
            {this.returnOptions()}
            </select>
       </div>
    )
  }
}
