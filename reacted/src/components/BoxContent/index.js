import React from 'react';
import './BoxContent.css';

export default function BoxContent(props){
	console.log('inner box props')
	return(
		<div 
			id={props.filledID} 
			onDragStart={props.dragStart} 
			className="fill" 
			draggable="true"
			></div>
	)
}