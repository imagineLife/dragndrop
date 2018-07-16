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
			],
			filledID : 'thisID',
			filledClass: 'fill'
		}

		this.dragEnded = this.dragEnded.bind(this)
		this.draggedOver = this.draggedOver.bind(this)
		this.dragEntered = this.dragEntered.bind(this)
		this.dragLeft = this.dragLeft.bind(this)
		this.dragDropped = this.dragDropped.bind(this)
		this.dragStart = this.dragStart.bind(this)
		this.setToInvisible = this.setToInvisible.bind(this)
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
			const thisBoxInState = curState.boxes.find((b) => b.id === thisDivID )
			//set the class name of this box
			thisBoxInState.cls = 'empty hovered'
			//return the initial state
			return ({ boxes: Object.assign(curState.boxes,thisBoxInState) })
		})

	}

	dragEnded(e){
		console.log('DRAG ENDED!!');
		// this.className = 'fill';

		let thisDivID = parseInt(e.target.id);

		this.setState({ filledClass: 'fill' })

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

		console.log(`toggling ${thisDivID}`)
		this.setState((curState) => {
			const thisBoxInState = curState.boxes.find((per) => per.id === thisDivID)

			return {
				boxes: curState.boxes
					.map((curStateBox) => {

						if(curStateBox.id != thisDivID){
							return({
								id: curStateBox.id,
								filled: false,
								cls: 'empty'
							})
						}else{
							return({
								id: thisDivID,
								filled: true,
								cls: 'empty'
							})
						}
					}),
				filledClass: 'fill'

			}
		})
	}

	setToInvisible(){
		this.setState(() => {
			console.log('setting invisible!')
			//return an updated state
			return ({ filledClass: 'invisible' })
		})
	}

	dragStart(e) {
		console.log('dragStart')
		//get this divId
		let thisDivID = e.target.id;
		//update state...
		this.setState((curState) => {
			//return an updated state
			return ({ filledClass: curState.filledClass += ' hold' })
		})

	  	setTimeout(() => this.setToInvisible(), 0);
	}

    render() {
    	console.log('rendering STATE!')
    	console.log(this.state)

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
    			filledID={this.state.filledID}
    			filledClass={this.state.filledClass}
    			filledStart={this.dragStart}
    			filledEnd={this.dragEnded}
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

 function endDragging(e){
	console.log('JQ drag ending')
	console.log(this)
	this.className = 'fill';
 }


const filled = document.querySelector('.fill');

//Listeners for filled boxes
// filled.addEventListener('dragstart', dragStart);
// filled.addEventListener('dragend', endDragging)