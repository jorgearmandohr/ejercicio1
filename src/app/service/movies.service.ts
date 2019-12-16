import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Movies, MovieInfo } from '../dtos/movies';
import { environment } from '../../environments/environment';
import { MovieDetail } from '../dtos/movie-detail';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  url: string;
  constructor(private http: HttpClient) { }

  searchMovies(movieName: string) {
    this.url = environment.urlBase + '?s=' + movieName + '&apiKey=' + environment.apikey;
    return this.http.get<Movies>(this.url);
  }

  getMovieById(idMovie: string) {
    this.url = environment.urlBase + '?i=' + idMovie + '&apiKey=' + environment.apikey;
    return this.http.get<MovieDetail>(this.url);
  }
}
