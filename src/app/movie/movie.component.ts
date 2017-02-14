import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LoggingService } from '../logging.service';
import { DataService } from '../data.service';
import 'rxjs/Rx'; 

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers:[DataService]
})
export class MovieComponent implements OnInit {
    movies = [];
 
  constructor(private logger: LoggingService, private dataService: DataService) { }
  
  logIt(){
    this.logger.log('directory.component');
  }
 
  
  ngOnInit() {
        this.dataService.fetchData().subscribe(
            (data) => this.movies = data,
            err => this.logError(err),
            () => console.log('Movie Details Fetch Complete')
        );
      
    }
 
    logError(err) {
        console.error('There was an error: ' , err);
    }

}
