import React from "react";
import ReactDOM from "react-dom";
import Header from './components/Header'

class ThisApp extends React.Component {
    render() {
        return <div>
            <Header/>
            <div className="container">
                <h1>Hello {this.props.name}</h1>
            </div>
        </div>
    }
}

let App = document.getElementById("app");

ReactDOM.render(<ThisApp name="Jake!" />, App);

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



