import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    myHomeData = 'Data From home.component.ts Hari Kiran !!!';
    
  constructor(private logger: LoggingService) { }
  
  logIt(){
    this.logger.log('home.component');
  }

  ngOnInit() {
  }

}
