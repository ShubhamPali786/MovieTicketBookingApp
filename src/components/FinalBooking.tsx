import React from 'react';
import { BookingModel, MoviesDetailModel } from '../models/api-models';
import FinalBookingStyles from './FinalBooking.module.css';
import QRCode from 'qrcode.react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faTicketAlt } from '@fortawesome/free-solid-svg-icons';
interface FinalBookingProps {
	bookingData: BookingModel;
	MovieDetail: MoviesDetailModel;
}

const FinalBooking: React.FC<FinalBookingProps> = (props) => {
	return (
		<div className={FinalBookingStyles.finalbooking_ctn}>
			<div className={FinalBookingStyles.bookingconfirm}>
				<FontAwesomeIcon
					icon={faCheckCircle}
					size={'2x'}
					style={{ marginLeft: '0.5em', marginRight: '0.5em' }}
				/>
				<h2>Congratulations, Your Tickets are Booked !</h2>
			</div>
			<div className={FinalBookingStyles.bookingdetails_ctn}>
				<div className={FinalBookingStyles.bookingdetails_ctn_img}>
					<img src={props.MovieDetail.imageUrl} />
				</div>
				<div className={FinalBookingStyles.bookingdetails_ctn_detail}>
					<h2>{props.MovieDetail.name}</h2>
					<div className={FinalBookingStyles.showtime}>
						<span>{props.bookingData.showtime}</span>
						<span className={FinalBookingStyles.showtime_date}>{props.bookingData.showdate}</span>
					</div>
					<h3>Quantity: {props.bookingData.noofseats}</h3>
				</div>
                <div className={FinalBookingStyles.bookingdetails_ctn_qrcode}>
				<QRCode value={JSON.stringify(props.bookingData)} size={250} />
			</div>
			</div>
			<div>
				<FontAwesomeIcon icon={faTicketAlt}  size={'9x'}/>
			</div>
			
		</div>
	);
};

export default FinalBooking;
