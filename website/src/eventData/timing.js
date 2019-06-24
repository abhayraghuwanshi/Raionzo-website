import React, { Component } from 'react';
import './panel.css';
import date from '../components/images/date.png'
import time from '../components/images/time.png'
import map from '../components/images/venue.png'
import contact from '../components/images/contact.png'
import Mediaquery from 'react-responsive'

function timing(props) {
	if(props.page==1)
		return(
			 <div className='timing'>
			     <div className ='IA'>
			         <p className='nam'>International Affairs of India</p>
			         <div className='nam2'>
			         <Mediaquery query='(min-width:414px)'>
			             <p className='dat dd'>31 August<br/>2 PM</p>
			             <p className='dat dd1'>MAC</p>
			         </Mediaquery>
			         <Mediaquery query='(max-width:414px)'>
			             <p className='dat dd'>31 August</p>
			             <p className='dat dd'>2 PM</p>
			             <p className='dat dd1'>MAC</p>
			         </Mediaquery>    
			         </div>
			     </div>
			     <div className ='IA'>
			         <p className='nam'>Women in Tech</p>
			         <div className='nam2'>
			             <p className='dat dd'>31 August</p>
			             <p className='dat dd'>2 PM</p>
			             <p className='dat dd1'>MAC</p>
			         </div>
			     </div>
			 </div>
		);
	if(props.page==4)
		return(<div className='timing'>
	             <div className='date'>
	                 <p className='nam'>Finance</p>
	                 <p className='dat'>31 August<br/>3 - 7 PM</p>
	             </div>
	             <div className='date'>
	                 <p className='nam'>Design</p>
	                 <p className='dat'>31 August<br/>3 - 7 PM</p>
	             </div>
	             <div className='date'>
	                 <p className='nam'>ML/AL</p>
	                 <p className='dat'>31 August<br/>3 - 7 PM</p>
	             </div>
	             <div className='date'>
	                 <p className='nam'>Web-D</p>
	                 <p className='dat'>31 August<br/>3 - 7 PM</p>
	             </div>    
	         </div>
	         );

	return ( <div className='timing'>
	             <div className='date'>
	                 <img className='timing-icons' src={date}></img>
	                 <p className='nam'>Date</p>
	                 <p className='dat'>{props.date}</p>
	             </div>
	             <div className='date'>
	                 <img className='timing-icons' src={time}></img>
	                 <p className='nam'>Time</p>
	                 <p className='dat'>{props.time}</p>
	             </div>
	             <div className='date'>
	                 <img className='timing-icons spec' src={map}></img>
	                 <p className='nam'>Venue</p>
	                 <p className='dat'>MAC IIT,<br/>Roorkee</p>
	             </div>
	             <div className='date'>
	                 <img className='timing-icons' src={contact}></img>
	                 <p className='nam'>Contact</p>
	                 <p className='dat'>9833020496,<br/>9833020496</p>
	             </div>    
	         </div>
	         
		    );

}

export default timing;
