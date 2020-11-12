import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import CaroselStyles from './Carosel.module.css';
const Carosel: React.FC<{}> = (props) => {
    const images = ['https://in.bookmyshow.com/entertainment-news/wp-content/uploads/2020/01/tanhaji-unsung-warrior.jpg', 'https://ccplohio.org/wp-content/uploads/2019/10/the-lion-king-poster-002.jpg', 'https://see.news/wp-content/uploads/2020/02/amirhosein-naseri-desktop-screenshot-2019-04-03-18-17-47-11.jpg', 'https://gamespot1.cbsistatic.com/uploads/screen_kubrick/1578/15789737/3515433-endgamedek.jpg'];
    const imgcontainerRef: React.RefObject<HTMLDivElement> = React.createRef()

    const scrollHandler =(isleft:boolean)=>{
        let scrollDiv = imgcontainerRef.current ? imgcontainerRef.current : null;
        if(scrollDiv){
            if(isleft)
            {
				scrollDiv.scrollLeft -= 500;
			} else {
				scrollDiv.scrollLeft += 500;
			}
        }
    }
	return (
		<div className={CaroselStyles.carosel_container}>
			<div className={CaroselStyles.carosel_container__nav_control} style={{ left: 0 }} onClick={()=>scrollHandler(true)}>
				<FontAwesomeIcon icon={faArrowLeft} />
			</div>
			<div className={CaroselStyles.carosel_container__img_container} ref={imgcontainerRef}>
				{images.map((item) => (
					<img src={item} key={item} />
				))}
			</div>
			<div className={CaroselStyles.carosel_container__nav_control} style={{ right: 0 }} onClick={()=>scrollHandler(false)}>
				<FontAwesomeIcon icon={faArrowRight} />
			</div>
		</div>
	);
};

export default Carosel;
