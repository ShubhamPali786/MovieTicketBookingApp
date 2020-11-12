import { faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { ShowTimingModel, MoviesDetailModel } from '../models/api-models';
import BookingStyles from './Booking.module.css';

interface BookingProps {
	showTimingModel: ShowTimingModel;
	movieDetailModel: MoviesDetailModel;
	showdates: {
		day: string;
		date: string;
		selected: boolean;
	}[];
	seats:{
		seat:number,
		selected:boolean
	}[]
	ondateClick: (date: string) => void;
	ontimeClick:(time:string)=>void;
	onseatnoClick:(seatno:number)=>void;
	onbookbtnClick:()=>void;
}

const Booking: React.FC<BookingProps> = (props) => {
	const seats = [1,2,3,4,5,6,7]
	return (
		<div className={BookingStyles.book_ctn}>
			<div className={BookingStyles.book_ctn__bookingdetails}>
				<h1>{props.movieDetailModel.name}</h1>
				<div className={BookingStyles.book_ctn__bookingdetails__adddetails}>
					<div className={BookingStyles.book_ctn__bookingdetails__adddetails__certificate}>
						<p>UA</p>
					</div>
					<div className={BookingStyles.book_ctn__bookingdetails__adddetails__genre}>
						{props.movieDetailModel.type.split(',').map((item, value) => {
							return <p key={value}>{item}</p>;
						})}
					</div>
					<div className={BookingStyles.book_ctn__bookingdetails__adddetails__releasedate}>
						<p>{props.movieDetailModel.releasedate}</p>
					</div>
					<div className={BookingStyles.book_ctn__bookingdetails__adddetails__duration}>
						<FontAwesomeIcon icon={faClock} color={'#ffff'} size={'lg'} />
						<p>{props.movieDetailModel.duration}</p>
					</div>
				</div>
			</div>
			<div className={BookingStyles.book_ctn__bookingdetails__timings}>
				{props.showdates.map((item, value) => {
					return (
						<div
							onClick={() => props.ondateClick(item.date)}
							key={value}
							className={
								item.selected
									? [
											BookingStyles.book_ctn__bookingdetails__timings_showtiming,
											BookingStyles.book_ctn__bookingdetails__timings_showtiming_selected,
									  ].join(' ')
									: BookingStyles.book_ctn__bookingdetails__timings_showtiming
							}
						>
							<p>{item.date}</p>
							<p>{item.day}</p>
						</div>
					);
				})}
			</div>
			<div className={BookingStyles.book_ctn__bookingdetails__bookingform_ctn}>
				<h3>Available Showtimings</h3>
				<div className={BookingStyles.book_ctn__bookingdetails__bookingform_ctn__showtimings}>
					{props.showTimingModel.showtimings.map(item=>
					<p
					key={item.showtime}
					className={
						item.selected
							?BookingStyles.book_ctn__bookingdetails__timings_showtiming_selected
							: ' '
					} onClick={() => props.ontimeClick(item.showtime)}
					>{item.showtime}</p>)}
				</div>
				<h3>How Many Seats?</h3>
				<div className={BookingStyles.book_ctn__bookingdetails__bookingform_ctn__showtimings}>
					{props.seats.map(item=>
						<p
						style={{paddingLeft:"1.5em",paddingRight:"1.5em"}}
						key={item.seat}
						className={
							item.selected
								?BookingStyles.book_ctn__bookingdetails__timings_showtiming_selected
								: ' '
						} onClick={() => props.onseatnoClick(item.seat)}
						>{item.seat}</p>
					)}
				</div>
				<div onClick={()=>props.onbookbtnClick()} className={BookingStyles.book_ctn__bookingdetails__bookingform_ctn__booknow}>
					<span >Book Now</span>
				</div>
			</div>	
		</div>
	);
};

export default Booking;
