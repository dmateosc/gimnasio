import { Component, OnInit } from '@angular/core';
import { Muscles } from 'src/app/models/muscle/muscles';
import { MuscleService } from 'src/app/services/muscle/muscle.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-muscle',
  templateUrl: './muscle.component.html',
  styleUrls: ['./muscle.component.css'],
  providers: [MuscleService]
})
export class MuscleComponent implements OnInit {

  public muscles : Muscles[];
  public url =  environment.url;
  constructor(
    
    private _muscleService : MuscleService

  ) { }

  ngOnInit(): void {
    
    this.getMuscles();


  }

  getMuscles(){

    this._muscleService.getMuscles().subscribe(
      response =>{
        this.muscles = response.muscles;
      }

    );

  }
  verEjercicios(){
    
  }

}
