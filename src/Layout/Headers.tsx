import { faFilm, faTicketAlt, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import HeaderStyles from './Header.module.css';
const Headers: React.FC<any> = (props) => {
	return (
		<header>
			<div className={HeaderStyles.header_container}>
				<div className={HeaderStyles.header_container__content} style={{width:"5%"}}>
                    <FontAwesomeIcon icon={faFilm} size={"3x"} color={"white"}/>
                </div>
				<div style={{cursor:"pointer"}} className={HeaderStyles.header_container__content} onClick={()=>window.location.href='/'}>
                    <h2>Cinema Ticket Booking</h2>
                </div>
			</div>
		</header>
	);
};

export default Headers;
