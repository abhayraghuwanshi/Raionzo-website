import React, { Component } from 'react';
import footeradd from './images/footeradd.png';
import footerno from './images/footerno.png';
import footerweb from './images/footerweb.png';
import footerfb from './images/footerfb.png';
import footerlinkedin from './images/footerlinkedin.png';
import footerinsta from './images/footerinsta.png';
import './css/Footer.css';

class Footer extends Component{
	render(){
		return(
			<div className="footer">
				<Raionzo2019 />
				<div className="empty-div div1"></div>
				<UsefulLinks />
				<div className="empty-div div2"></div>
				<Events />
				<div className="empty-div div3"></div>
				<Contact />
				<div className="empty-div div4"></div>
				<Help />
				<div className="empty-div div5"></div>
				<Follow />
			</div>
		);
	}
}

function Raionzo2019() {
	return(
		<div className="footer-raionzo footer-child-1 grid-item">
			<div className="footer-raionzo-head">
				Raionzo 2019
			</div>
			<div className="footer-raionzo-cont footer-cont-all">
				RAIONZO gives alumni an opportunity to share their treasured experiences with 
				students who are about to step into the corporate world in a few years thus guiding 
				them towards a better and bright future.
			</div>
		</div>
	);
}

function UsefulLinks() {
	return(
		<div className="footer-links footer-child-1 grid-item">
			<div className="footer-links-head footer-subhead">
				Useful Links
			</div>
			<div className="footer-links-cont footer-cont-all">
				<div className="footer-list footer-list-links">
					<div>Schedule</div>
					<div>Speakers</div>
					<div>Register</div>
					<div>About Us</div>
					<div>Contact Us</div>
				</div>
			</div>
		</div>
	);
}

function Events() {
	return(
		<div className="footer-events footer-child-1 grid-item">
			<div className="footer-events-head footer-subhead">
				Events
			</div>
			<div className="footer-events-cont footer-cont-all">
				<div className="footer-list footer-list-events">
					<div>Group interactions and workshops</div>
					<div>Leadership talk</div>
					<div>Panel discussions</div>
					<div>Placement and Internship talk</div>
					<div>Idea pitch competition</div>
					<div>Cultural night</div>
				</div>
			</div>
		</div>
	);
}

function Contact() {
	return(
		<div className="footer-contact footer-child-1 grid-item">
			<div className="footer-contact-cont footer-cont-all">
				<table>
					<tbody>
						<tr>
							<td className="footer-contact-data"><img src={footeradd} alt="Location" className="contact-img" /></td>
							<td className="footer-contact-data">Raionzo Office, Student Activity Centre, IIT Roorkee, Uttrakhand, India</td>
						</tr>
						<tr>
							<td className="footer-contact-data"><img src={footerno} alt="Phone" className="contact-img" /></td>
							<td className="footer-contact-data">
								<div className="conatct-no">+91 987 6543 722</div>
								<div className="conatct-no">+91 854 8736 478</div>
							</td>
						</tr>
						<tr>
							<td className="footer-contact-data"><img src={footerweb} alt="Website" className="contact-img" /></td>
							<td className="footer-contact-data">@website_link</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

function Help() {
	return(
		<div className="footer-help footer-child-1 grid-item">
			<div className="footer-help-head footer-subhead">
				Help
			</div>
			<div className="footer-help-cont footer-cont-all">
				<div className="footer-list footer-list-help">
					<div>Feedback</div>
					<div>Support</div>
				</div>
			</div>
		</div>
	);
}

function Follow() {
	return(
		<div className="footer-follow footer-child-1 grid-item">
			<div className="footer-follow-cont footer-cont-all">
				Follow us on
				<div className="follow-links">
					<img src={footerfb} alt="Facebook" className="follow-img" />
					<img src={footerlinkedin} alt="LinkedIn" className="follow-img" />
					<img src={footerinsta} alt="Instagram" className="follow-img" />
				</div>
			</div>
		</div>
	);
}

export default Footer;