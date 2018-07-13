import React from 'react';
import './Box.css';
import BoxContent from '../BoxContent'

export default function Box(props){
	if(props.boxFilled){
		return(
			<div 
				onDragOver={props.dragOv}
				onDragEnter={props.dragEnt}
				id={props.boxID}
				className={props.classProp}>
				<BoxContent />
			</div>
		)
	}else{
		return(
			<div 
				onDragOver={props.dragOv} 
				onDragEnter={props.dragEnt}
				id={props.boxID} 
				className={props.classProp}>
			</div>
		)
	}
}