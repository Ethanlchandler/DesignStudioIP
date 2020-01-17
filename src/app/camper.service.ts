import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
//we know that response will be in JSON format
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CamperService {
    constructor(private http:HttpClient) {}

    //uses http.get() to load data
    getCampers() {
        return this.http.get('http://localhost:8000/campers');
    }
    //uses http.post() to post data
    addCampers(firstName: string, lastName: string, emergencyContact: string, campground: string) {
        this.http.post('http://localhost:8000/campers',{ firstName, lastName, emergencyContact, campground })
        .subscribe((responseData) => {
            console.log(responseData)
        });
        //what should go here?!?!
    }
    deleteCamper(camperId: string) {
        this.http.delete("http://localhost:8000/campers/" + camperId)
        .subscribe(() => {
            console.log('Deleted: ' + camperId);
        });
        window.location.reload();
    }
    updateCamper(camperId: string, firstName: string, lastName: string, emergencyContact: string, campground: string) {

        //first and last names will be send as HTTP body parameters 
            this.http.put("http://localhost:8000/campers/" 
                 + camperId ,{ firstName, lastName, emergencyContact, campground })
              .subscribe(() => {
                  console.log('Updated: ' + camperId);
              });
              window.location.reload();
        }
    
}

