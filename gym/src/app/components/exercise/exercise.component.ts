import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Exercises } from 'src/app/models/exercise/exercises';
import { ExerciseService } from 'src/app/services/exercise/exercise.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css'],
  providers: [ExerciseService]
})
export class ExerciseComponent implements OnInit {
  public exercises : Exercises[];
  public ejerciciosTabla: any[];
  constructor(
    private _route: ActivatedRoute,
    private _exerciseService: ExerciseService
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      let muscle = params.muscle;
      this.getExercises(muscle); 
    });
    

  }
  getExercises(muscle){
    this._exerciseService.getExercises(muscle).subscribe(
      response => {
        this.exercises = response.ejercicios;
        this.ejerciciosTabla = new Array();
        response.ejercicios.forEach((element,index)=> {
          let nombre = element.nombre;
          let pesoRepeticion =  { [nombre] : [{"peso": 0, "repeticiones":0}]};
          
          this.ejerciciosTabla.push(pesoRepeticion);
          //let pesoRepeticion2= {"peso": 3, "repeticiones":4};
          //this.ejerciciosTabla[index][nombre].push(pesoRepeticion2);
          
        });;
      }
    )
  }

}
