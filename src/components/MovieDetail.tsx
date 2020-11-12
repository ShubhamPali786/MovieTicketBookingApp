import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faCalendarAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { MoviesDetailModel } from '../models/api-models';
import movieDetailStyles from './MovieDetail.module.css';

interface MovideDetailProps {
	movieDetail: MoviesDetailModel;
	bookTicketClick:()=>void;
}

const MovieDetail: React.FC<MovideDetailProps> = (props) => {

	const getStarRating = (ratings: number) => {
		let ratingHtml: any[] = [];
		for (let i = 0; i < ratings; i++) {
			ratingHtml.push(<FontAwesomeIcon key={i} icon={faStar} color={'#FFCB25'} size={"lg"} />);
		}
		return ratingHtml;
	};

	return (
		<div className={movieDetailStyles.moviedetail}>
			<div className={movieDetailStyles.moviedetail__imgbanner_container}>
				<div
					style={{ backgroundImage: `url(${props.movieDetail.imageUrl})` }}
					className={movieDetailStyles.moviedetail__imgbanner}
				></div>
				<div className={movieDetailStyles.moviedetail__imgbanner_overlay}></div>
			</div>
			<div className={movieDetailStyles.moviedetail_details}>
				<div className={movieDetailStyles.moviedetail_details_img_cotainer}>
					<img src={props.movieDetail.imageUrl} />
				</div>
				<div className={movieDetailStyles.moviedetail_details_container}>
					<h3>{props.movieDetail.name}</h3>
					<div style={{ display: 'flex' }}>
						<div className={movieDetailStyles.moviedetail_details_container_certificate}>
							<span>UA</span>
						</div>
						<div className={movieDetailStyles.moviedetail_details_container_lang}>
							<p>{props.movieDetail.language}</p>
						</div>
					</div>
					<div style={{ display: 'flex', marginTop: '1em' }}>
						{props.movieDetail.type.split(',').map((item, value) => {
							return (
								<div key={value} className={movieDetailStyles.moviedetail_details_container_genre}>
									<p>{item}</p>
								</div>
							);
						})}
					</div>
					<div style={{ display: 'flex', marginTop: '1em' }}>
						<div className={movieDetailStyles.moviedetail_details_container__releaseinfo}>
							<FontAwesomeIcon icon={faCalendarAlt} color={'#ffff'} size={'lg'} />
							<span>{props.movieDetail.releasedate}</span>
						</div>
						<div className={movieDetailStyles.moviedetail_details_container__releaseinfo}>
							<FontAwesomeIcon icon={faClock} color={'#ffff'} size={'lg'} />
							<span>{props.movieDetail.duration}</span>
						</div>
					</div>
					<div className={movieDetailStyles.moviedetail_details_container_synosis}>
						{getStarRating(props.movieDetail.rate).map(item=>item)}

						<h3>Synopsis</h3>
						<p>{props.movieDetail.synopsis}</p>
					</div>
				</div>
				<div className={movieDetailStyles.moviedetail_details_booknow_ctn}>
						<div onClick={()=>props.bookTicketClick()} className={movieDetailStyles.moviedetail_details_booknow_ctn_booknow}>
						<span >Book Tickets</span>
						</div>
				</div>
			</div>
		</div>
	);
};

export default MovieDetail;
