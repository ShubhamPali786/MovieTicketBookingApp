import { faArrowLeft, faArrowRight, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { MoviesModel } from '../../models/api-models';
import GirdListStyles from './GridList.module.css';

interface GirdListProps {
	movieslist?: MoviesModel[];
	onClickHandler:(id:string)=>void;
}

const GridListComponent: React.FC<GirdListProps> = (props) => {
	const moviecontainerRef: React.RefObject<HTMLDivElement> = React.createRef();

	const getStarRating = (ratings: number) => {
		let ratingHtml: any[] = [];
		for (let i = 0; i < ratings; i++) {
			ratingHtml.push(<FontAwesomeIcon key={i} icon={faStar} color={'#FFCB25'} />);
		}
		return ratingHtml;
	};

	const scrollHandler = (isleft: boolean) => {
		let scrollDiv = moviecontainerRef.current ? moviecontainerRef.current : null;
		if (scrollDiv) {
			if (isleft) {
				scrollDiv.scrollLeft -= 500;
			} else {
				scrollDiv.scrollLeft += 500;
			}
		}
	};
	return (
		<div className={GirdListStyles.grid_container}>
			<div
				className={GirdListStyles.grid_container__nav_control}
				style={{ left: 0 }}
				onClick={() => scrollHandler(true)}
			>
				<FontAwesomeIcon icon={faArrowLeft} />
			</div>
			<div className={GirdListStyles.grid_container__movie_container} ref={moviecontainerRef}>
				{props.movieslist?.map((item) => {
					return (
						<div
							key={item._id}
							className={GirdListStyles.grid_container__movie_container___detail_container}
							onClick={()=>props.onClickHandler(item._id)}
						>
							<div
								className={
									GirdListStyles.grid_container__movie_container___detail_container__img_container
								}
							>
								<img src={item.imageUrl} />
							</div>
							<div
								className={
									GirdListStyles.grid_container__movie_container___detail_container__moviedetail_container
								}
							>
								<div style={{ display: 'flex' }}>
									<div>
										<h4>{item.name}</h4>
									</div>
									<div
										className={
											GirdListStyles.grid_container__movie_container___detail_container__moviedetail_container__starcontainer
										}
									>
										{getStarRating(item.rate).map((item) => item)}
									</div>
								</div>
								<p>{item.type}</p>
							</div>
						</div>
					);
				})}
			</div>
			<div
				className={GirdListStyles.grid_container__nav_control}
				style={{ right: 0 }}
				onClick={() => scrollHandler(false)}
			>
				<FontAwesomeIcon icon={faArrowRight} />
			</div>
		</div>
	);
};

export default GridListComponent;
