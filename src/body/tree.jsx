import React from 'react';
import '../../styles/index.scss';
import person1 from '../images/person1.png'
import person2 from '../images/person2.png'
import person3 from '../images/person3.png'
import person4 from '../images/person4.png'
import person5 from '../images/person5.png'
import Add from './add.jsx'
import NewStepModal from './NewStepModal.jsx'
import Stage from './Stage.jsx'

export default class Tree extends React.Component {
	constructor(props){
		super(props)
		this.state = {
      boxes: [],
      boxesOptions: [],
      boxesTag:[],
      currentInfo: [],
			showNotificationBox: false,
      showModal: false,
		}
	}

  addNewBoxOption(newBox){
    this.setState({ boxesOptions:this.state.boxesOptions.concat(newBox)})

  }

  newStep(){
    this.setState ({ showModal: !this.state.showModal})
  }

  renderNewBoxes(boxInfo){
    if (boxInfo[0] === true){
        this.state.boxes.push(boxInfo)
        this.giveKeys()
    }
    else{
      alert("wtf")
    }
  }
  

  giveKeys(){
      const boxesList = this.state.boxes.map((box) =>
        <Stage key={box} currentInfo={box} />
    );
    this.setState({boxesTag: boxesList})
  }

  // renderKeyedBoxes(boxesList){
  //   for (var i=0; i<boxesList.length); i++){

  //   }
  // }
  render() {
    return (
     <div>
        <div className="welcomeText">
          <h1 className="welcomeTitle">
            Sample Projects
          </h1>
          <h2>
            Last edited on 04/21/16 12:44 pm EST
          </h2>
            <div className="peopleFaces">
              <img className="pad" src={person1} />
              <img className="pad" src={person2} />
              <img className="pad" src={person3} />
              <img className="pad" src={person4} />
              <img className="pad" src={person5} />
            </div>
          <p className="welcomeDescription">
            You can look at sample processes in this project and play around with the research tool. Feel free to delete this project when you feel comfortable using the tool or you can choose to keep it as a reference.
          </p>
          <div className = "treeContainer">
            <div style={{zIndex:1}} className = "Created">
              <p className="treeContent">Project created on</p>
              <h2 className="treeContent">04/15/16</h2>
            </div>
            <div className="line" style={{zIndex:0}}>
            </div>
            {this.state.boxesTag}
            <Add showModal={this.newStep.bind(this)}/>
            {this.state.showModal ? <NewStepModal boxesOptions={this.state.boxesOptions} addNewBoxOption={this.addNewBoxOption.bind(this)} renderNewBoxes={this.renderNewBoxes.bind(this)} newStepToggle={this.newStep.bind(this)}/> : null}
          </div>
        
        </div>
     </div>
    )
  }
}
