import React from 'react';
import './Box.css';
import BoxContent from '../BoxContent'

export default function Box(props){
	let filled = (props.filledClass) ? props.filledClass : 'empty';

	var classes = `${filled}`;
	console.log('box props')
	console.log(props)

	if(props.boxFilled){
		return(
			<div id={props.boxID} className={classes}>
				<BoxContent />
			</div>
		)
	}else{
		return(
			<div id={props.boxID} className={classes}></div>
		)
	}
}