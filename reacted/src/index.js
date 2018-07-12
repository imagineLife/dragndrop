import React from "react";
import ReactDOM from "react-dom";
import Header from './components/Header'
import Box from './components/Box'


function draggedOver(e){
	e.preventDefault();
}

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
	console.log(e.path[0])
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
	emp.addEventListener('dragover', draggedOver);
	emp.addEventListener('dragenter', dragEntered);
	emp.addEventListener('dragleave', dragLeft);
	emp.addEventListener('drop', dragDropped);
}


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
	}

    render() {

    	let theseBoxes = this.state.boxes.map((b) => {
    		let filledClass = (b.filled) ? "filled" : null
    		return <Box key={b.id} boxID={b.id} filledClass={filledClass}/>
    	})
        return <div>
            <Header/>
            <div className="container">
                <h1>Hello {this.props.name}</h1>
                {theseBoxes}
            </div>
        </div>
    }
}

let App = document.getElementById("app");

ReactDOM.render(<ThisApp name="Jake!" />, App);





