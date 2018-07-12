import React from 'react';
import './Box.css';

export default function Box(props){
	return(
		<div id={props.boxID} className="empty {props.filledClass}"></div>
	)
}