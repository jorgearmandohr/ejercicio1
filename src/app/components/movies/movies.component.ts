import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../service/movies.service';
import { MovieInfo } from 'src/app/dtos/movies';
import { MovieDetail } from 'src/app/dtos/movie-detail';



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movieName: string;
  movieList: MovieInfo[];
  movieDetail: MovieDetail;
  constructor(private moviesService: MoviesService) { }

  ngOnInit() {

  }

  search() {
    //alert(this.movieName);
    this.moviesService.searchMovies(this.movieName).subscribe(response => this.movieList = response.Search);
  }

  getInfo(id: string) {
    this.moviesService.getMovieById(id).subscribe(response => this.movieDetail = response);
  }

}
