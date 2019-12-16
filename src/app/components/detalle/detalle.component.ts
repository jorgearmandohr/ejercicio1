import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/service/movies.service';
import { MovieDetail } from 'src/app/dtos/movie-detail';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  id: string;
  movie: MovieDetail;
  constructor(private ar: ActivatedRoute, private movieService: MoviesService) { }

  ngOnInit() {
    this.id = this.ar.snapshot.params.id;
    this.movieService.getMovieById(this.id).subscribe(response => this.movie = response);
  }
}
