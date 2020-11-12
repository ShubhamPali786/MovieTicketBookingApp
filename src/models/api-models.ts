export interface MoviesModel {
	_id: string;
	name: string;
	language: string;
	type: string;
	rate: number;
	imageUrl: string;
}

export interface MoviesDetailModel {
	id: string;
	name: string;
	language: string;
	type: string;
	rate: number;
	imageUrl: string;
	releasedate: string;
	duration: string;
	synopsis: string;
}
export interface BookingResponseModel {
	id: string;
	showtiming: string;
	date: string;
}

export interface ShowTimingModel {
	_id: string;
	showtimings: {
		showtime: string;
		selected: boolean;
	}[];
	date: string;
}

export interface BookingModel {
	id: string;
	movieid: string;
	showdate: string;
	showtime: string;
	noofseats: number;
}
export interface SeatModel {
	seat: number;
	selected: boolean;
}
export interface ShowDatesModel{
    day:string,
    date:string,
    selected:boolean
}