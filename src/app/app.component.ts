import { Component, OnInit} from '@angular/core';

import { createOfflineCompileUrlResolver } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Lab 10';
  //declare variable to hold response and make it public to be accessile from components.html
//   public campers;
//   //initialize the call using StudentService
//   constructor(private _myService: CamperService) { }
   ngOnInit() {
//     this.getCampers();
//   }
//   //method called OnInit
//   getCampers() {
//     this._myService.getCampers().subscribe(
//       //read data and assign to public variable students
//       data => { this.campers = data},
//       err => console.error(err),
//       () => console.log("finished loading")
//     );
//   }
//   onDelete(camperId: string) {
//     this._myService.deleteCamper(camperId);
   }
 }
