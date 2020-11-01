import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      let type = params.type;
      let muscle = params.muscle;
     
    });

  }

}
