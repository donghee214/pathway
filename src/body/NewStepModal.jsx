import React from 'react';
import '../../styles/index.scss';
import Exit from './Exit.jsx'
import Upload from './upload.jsx'

export default class Tree extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			showNotificationBox: false,
      stage: true,
      name: '',
      email: '',
      stepInfo: ['','','','','']
		}

	}

  stageClicked(){
    this.setState({stage: true});
  }

  stageUnclicked(){
    this.setState({stage: false});
  }

  createStage(){
    const items = this.state.stepInfo
    items[0] = this.state.stage
    items[1] = this.refs.stepName.value
    items[2] = this.refs.description.value
    items[3] = this.refs.privacy.value
    this.setState({stepInfo: items})
    this.props.renderNewBoxes(this.state.stepInfo)
    this.props.newStepToggle()
  }
  render() {
    return (
     <div className="backgroundDark">
        <form className = "modal">
          <Exit newStepToggle={this.props.newStepToggle.bind(this)}/>
          <h1 className="decreaseMargin">
            Add new step
          </h1>
          <h2 className="step">
          Step Type
          </h2>
          <h2>
            A stage is a key step in the design process while a method is a UX Research technique used in that stage.
          </h2>
          <div className="buttonGroup">
           <div className={"button " + (this.state.stage ? 'buttonClicked' : '')} onClick={this.stageClicked.bind(this)}>
              Stage
            </div>
            <div className={"button " + (this.state.stage ? '' : 'buttonClicked')} onClick={this.stageUnclicked.bind(this)}>
              Method
            </div>
          </div>
          <div className="group newStepForm">
              <input ref="stepName" type="text" required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Step Name</label>
         </div>
          <div className="group newStepForm">
              <input ref="description" type="text" required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Description</label>
         </div>
        
          <h1 className="gallery">
            Gallery
          </h1>
          <h2>
            Add pictures to allow others to see how you did this step.
          </h2>
          <div className="uploadImage">
            <Upload/>
            <h2 className="blue">Upload Image</h2>
          </div>
          <p className="privacySetting">
            Privacy Settings
          </p>
            <select ref="privacy" className="privacy" name="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
            </select>
          <div className="finishButton">
            <div onClick={this.props.newStepToggle} className="button">
            Cancel
            </div>
             <div onClick={this.createStage.bind(this)}className="button backblue">
              Done
            </div>
          </div>
        </form>
     </div>
    )
  }
}
