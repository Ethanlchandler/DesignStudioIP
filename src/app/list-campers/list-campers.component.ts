import { Component, OnInit } from '@angular/core';
import { CamperService } from "../camper.service";

@Component({
  selector: 'app-list-campers',
  templateUrl: './list-campers.component.html',
  styleUrls: ['./list-campers.component.css']
})
export class ListCampersComponent implements OnInit {

  public campers;
  //initialize the call using StudentService
  constructor(private _myService: CamperService) { }
  ngOnInit() {
    this.getCampers();
  }
  //method called OnInit
  getCampers() {
    this._myService.getCampers().subscribe(
      //read data and assign to public variable students
      data => { this.campers = data},
      err => console.error(err),
      () => console.log("finished loading")
    );
  }
  onDelete(camperId: string) {
    this._myService.deleteCamper(camperId);
  }
}