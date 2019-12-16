
// import { MovieInfo } from '../dtos/movie-info';

export interface Movies {
    Search: MovieInfo[];
}

export interface MovieInfo {
    Title: string;
    Year: string;
    Type: string;
    Poster: string;
    imdbID: string;
}
