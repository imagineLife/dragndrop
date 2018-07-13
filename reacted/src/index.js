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
					filled: true
				},
				{
					id:2
				},
				{
					id:3
				},
				{
					id:4
				},
				{
					id:5
				},
			]
		}

		this.draggedOver = this.draggedOver.bind(this)
		this.dragEntered = this.dragEntered.bind(this)
	}

	draggedOver(e){
		e.preventDefault();
	}

	dragEntered(e){
		console.log('dragEntered!')
		e.preventDefault();
		this.className += ' hovered'
	}

    render() {

    	let theseBoxes = this.state.boxes.map((b) => {
    		return <Box 
    			dragEnt={this.dragEntered} 
    			dragOv={this.draggedOver} 
    			key={b.id}
    			boxID={b.id} 
    			boxFilled={b.filled}
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
	this.className = 'empty';
}

function dragDropped(e){
	this.className = 'empty';
	this.append(filled);
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
console.log('empties -->')
console.log(empties)

//Listeners for filled boxes
filled.addEventListener('dragstart', dragStart);
filled.addEventListener('dragend', endDragging)

//Listeners for empty boxes
for(let emp of empties){
	emp.addEventListener('dragenter', dragEntered);
	emp.addEventListener('dragleave', dragLeft);
	emp.addEventListener('drop', dragDropped);
}



