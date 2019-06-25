import './panel.css';
import Panelicons from './panelicons'
import Timing from './timing'
import React from 'react';
import  EventComponent1  from './eventcomponent1.js';
import Speaker from './speaker.js';

class EventMainContainer extends React.Component{
	state={
	num:3,
	date:'30 September',
	time:'2:00 - 5:00 PM'
};
    render(){
  return (
  	<div>
  <EventComponent1 
   eventinfodata=" Panel discussions on the topics “International Affairs of India” and “Women in Tech” where the audience is exposed to new viewpoints and perspectives."
   eventcontainerheading="Panel Discussion"
   eventcontainerbutton="Panelist"
   eventcontainericon="paneldiscussion"  />
   <div>
	    <Panelicons  two={this.state.num}/>
	    <Timing date={this.state.date}
	            time={this.state.time}
	            page={this.state.num}/>
    </div>
    <Speaker speakername="Ishant Sharma" speakercontent="asjdhq qqqqq qqqqqqqqqqqqqq qqqqqqqqqqqq qqqqqqqqqqqqqqqq qqqqqqqqqq qqqqqq qqqqqqqqqqq qqqqqqqqqqqqq" speakerimg="one" />

              <div className="event-register">
                <div className="event-register-text">
                  To take part in this event
                </div>
                <div className="event-register-button">
                  Register Now
                </div>
              </div>
		</div>
  );
}
}

export default EventMainContainer;
