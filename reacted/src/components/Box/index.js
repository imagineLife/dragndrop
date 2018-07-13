import React from 'react';
import './Box.css';
import BoxContent from '../BoxContent'

export default function Box(props){
	let filled = (props.filledClass) ? props.filledClass : 'empty';

	var classes = `${filled}`;

	console.log(props.dragEv)
	if(props.boxFilled){
		return(
			<div onDragOver={props.dragEv} id={props.boxID} className={classes}>
				<BoxContent />
			</div>
		)
	}else{
		return(
			<div onDragOver={props.dragEv} id={props.boxID} className={classes}></div>
		)
	}
}