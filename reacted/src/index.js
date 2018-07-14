import React from "react";
import ReactDOM from "react-dom";
import Header from './components/Header'
import Box from './components/Box'

class ThisApp extends React.Component {
	constructor(props){
		super(props)

		this.state = {
			boxes : [
				{
					id:1,
					filled: true,
					cls: 'empty'
				},
				{
					id:2,
					cls: 'empty'				
				},
				{
					id:3,
					cls: 'empty'				
				},
				{
					id:4,
					cls: 'empty'
				},
				{
					id:5,
					cls: 'empty'					
				},
			]
		}

		this.draggedOver = this.draggedOver.bind(this)
		this.dragEntered = this.dragEntered.bind(this)
		this.dragLeft = this.dragLeft.bind(this)
		this.dragDropped = this.dragDropped.bind(this)
	}

	draggedOver(e){
		e.preventDefault();
	}

	dragEntered(e){
		e.preventDefault();

		//get this divId
		let thisDivID = parseInt(e.target.id);
		
		//update state...
		this.setState((curState) => {
			//find this box in current state
			const thisBoxInState = curState.boxes.find((b) => b.id == thisDivID )
			//set the class name of this box
			thisBoxInState.cls = 'empty hovered'
			//return the initial state
			return ({ boxes: Object.assign(curState.boxes,thisBoxInState) })
		})

	}

	dragLeft(e){
		console.log('react dragLeft')
		//get this divId
		let thisDivID = parseInt(e.target.id);

		//update state...
		this.setState((curState) => {
			//find this box in current state
			const thisBoxInState = curState.boxes.find((b) => b.id == thisDivID )
			//set the class name of this box
			thisBoxInState.cls = 'empty'
			//return the initial state
			return ({ boxes: Object.assign(curState.boxes,thisBoxInState) })
		})
	}

	dragDropped(e){
		console.log('react dragDropped')
		//get this divId
		let thisDivID = parseInt(e.target.id);

		//update state...
		this.setState((curState) => {
			//find this box in current state
			const thisBoxInState = curState.boxes.find((b) => b.id == thisDivID )
			//set the class name of this box
			thisBoxInState.cls = 'empty'
			thisBoxInState.filled = true
			//return the initial state
			return ({ boxes: Object.assign(curState.boxes,thisBoxInState) })
		})
	}

    render() {
    	console.log('rendering!')

    	let theseBoxes = this.state.boxes.map((b) => {
    		return <Box 
    			dragEnt={this.dragEntered} 
    			dragLft={this.dragLeft} 
    			dragOv={this.draggedOver} 
    			dragDr={this.dragDropped} 
    			key={b.id}
    			boxID={b.id} 
    			boxFilled={b.filled}
    			classProp={b.cls}
    		/>
    	})
        return <div>			
            <Header/>
            <div className="container">
                <h1 style={{color: 'white'}}>Hello {this.props.name}</h1>
                {theseBoxes}
            </div>
        </div>
    }
}

let App = document.getElementById("app");

ReactDOM.render(<ThisApp name="Jake!" />, App);

function dragEntered(e){
	e.preventDefault();
	this.className += ' hovered'
}

function dragLeft(e){
	console.log('dragLeft')
	this.className = 'empty';
}

function dragDropped(e){
	this.className = 'empty';
	this.append(filled);
	console.log('dropped')
	console.log(this)
}

function dragStart(e) {
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'), 0);
}

function endDragging(e){
	this.className = 'fill';
}


const filled = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

//Listeners for filled boxes
filled.addEventListener('dragstart', dragStart);
filled.addEventListener('dragend', endDragging)

//Listeners for empty boxes
for(let emp of empties){
	// emp.addEventListener('dragleave', dragLeft);
	// emp.addEventListener('drop', dragDropped);
}



