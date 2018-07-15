//Drag fns

function draggedOver(e){
	e.preventDefault();
}

function dragEntered(e){
	console.log('dragEntered')
	console.log(this)
	e.preventDefault();
	this.className += ' hovered'
}

function dragLeft(e){
	console.log('dragLeft this')
	console.log(this)
	this.className = 'empty';
}

function dragDropped(e){
	console.log('dragDropped this')
	console.log(this)
	this.className = 'empty';
	this.append(filled);
}

function dragStart(e) {
	console.log('dragStart this')
	console.log(this)
	// console.log(e.path[0])
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'), 0);
}

function endDragging(e){
	console.log('endDragging this')
	console.log(this)
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



