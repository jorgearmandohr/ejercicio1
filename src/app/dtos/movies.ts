
// import { MovieInfo } from './movie-info';

export interface Movies {
    Search: MovieInfo[];
}

export interface MovieInfo {
    Title: string;
    Year: string;
    Type: string;
    Poster: string;
}
