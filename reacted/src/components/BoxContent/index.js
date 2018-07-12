import React from 'react';
import './BoxContent.css';

export default function BoxContent(props){
	console.log('boxContent props')
	console.log(props);

	return(
		<div id="thisID" className="fill" draggable="true"></div>
	)
}