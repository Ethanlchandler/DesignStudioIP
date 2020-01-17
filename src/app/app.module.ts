import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CamperService } from './camper.service';
import { HttpClientModule } from "@angular/common/http";
import { Routes, RouterModule } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCamperFormComponent } from './new-camper-form/new-camper-form.component';
import { MatFormFieldModule, MatMenuModule, MatIconModule } from "@angular/material";
import { MatInputModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material";
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { ListCampersComponent } from './list-campers/list-campers.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [ {
  path: '',                     //default component to display
   component: ListCampersComponent
 },       {
   path: 'addCamper',         //when Camper added 
   component: NewCamperFormComponent
 },       {
    path: 'editCamper/:_id',         //when Camper edited 
    component: NewCamperFormComponent
 },      
          {
   path: 'listCampers',       //when Camper listed
   component: ListCampersComponent
 },       {
   path: '**',                 //when path cannot be found
   component: NotFoundComponent
 }
];


@NgModule({
  declarations: [
    AppComponent,
    NewCamperFormComponent,
    NavigationMenuComponent,
    ListCampersComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CamperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
