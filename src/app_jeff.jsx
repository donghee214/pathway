import React from 'react';
import '../styles/index_jeffery.scss';
import Resources from './Resources.jsx';
import Books from './Books.jsx';
import Modal1 from './modal1.jsx';
import Modal2 from './modal2.jsx';
import Modal3 from './modal3.jsx';
import Modal4 from './modal4.jsx';
import Modal5 from './modal5.jsx';

export default class App extends React.Component {
	constructor(props){
	super(props)
	this.state ={
		modalArray :[<Modal1 nextClicked={this.nextClicked.bind(this)} skip={this.skip.bind(this)}/>, <Modal2 nextClicked={this.nextClicked.bind(this)} skip={this.skip.bind(this)}/>, <Modal3 nextClicked={this.nextClicked.bind(this)} skip={this.skip.bind(this)}/>, <Modal4 nextClicked={this.nextClicked.bind(this)} skip={this.skip.bind(this)}/>,<Modal5 skip={this.skip.bind(this)}/>],
		nextModal: false,
		skip: false,
		counter: 0,
		}
	}

	nextClicked(){
		this.setState({
			counter: this.state.counter + 1,
		})
	}

	skip(){
		this.setState({
			skip: true,
		})
	}

	renderModal(){
		if(this.state.skip === true){
			return (null)
		}
		return (this.state.modalArray[this.state.counter])
	}
  render() {
    return (
      <div>
       {this.renderModal()}
       <Resources/>
       <Books/>
      </div>
    )
  }
}
