import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'M5-TH-AngularColorSelection';
  background = '#00e067';
  constructor() {
  }
  // tslint:disable-next-line:typedef
  onChange(value){
    this.background = value;
  }

  ngOnInit(): void {
  }
}
