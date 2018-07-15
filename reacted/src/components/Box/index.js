import React from 'react';
import './Box.css';
import BoxContent from '../BoxContent'

export default function Box(props){
	if(props.boxFilled){
		return(
			<div 
				id={props.boxID}
				className={props.classProp}>
				<BoxContent 
					filledID={props.filledID}
					filledClass={props.filledClass}
					dragStart={props.filledStart}
				/>
			</div>
		)
	}else{
		return(
			<div 
				onDragOver={props.dragOv} 
				onDragLeave={props.dragLft}
				onDragEnter={props.dragEnt}
				onDrop={props.dragDr}
				id={props.boxID} 
				className={props.classProp}>
			</div>
		)
	}
}