import { Component, OnInit, Input } from '@angular/core';
import { CamperService } from "../camper.service";
import {Router} from '@angular/router';
import {ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-new-camper-form',
  templateUrl: './new-camper-form.component.html',
  styleUrls: ['./new-camper-form.component.css']
})
export class NewCamperFormComponent implements OnInit {
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() emergencyContact: string;
  @Input() campground: string;
  private mode = 'add'; //default mode
  private id: string; //camper ID

  constructor(private _myService: CamperService, private router:Router, public route: ActivatedRoute) { }
  onSubmit(){
    console.log("You Submitted: " + this.firstName + " " + this.lastName + " " + this.emergencyContact + " " + this.campground)
    if(this.mode == 'add')
      this._myService.addCampers(this.firstName, this.lastName, this.emergencyContact, this.campground);
    if(this.mode == 'edit')
      this._myService.updateCamper(this.id, this.firstName, this.lastName, this.emergencyContact, this.campground);
    this.router.navigate(['/listCampers']);
  }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap ) => {
      if (paramMap.has('_id'))
        { this.mode = 'edit'; /*request had a parameter _id */ 
          this.id = paramMap.get('_id');
          this.firstName = paramMap.get('firstName');
          this.lastName = paramMap.get('lastName');
        }
      else {this.mode = 'add';
          this.id = null; }
    });
    //
 
  }

}
