import { Component, OnInit } from '@angular/core';
import { ClassService } from 'src/app/services/class.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css'],
  providers: [ClassService]
})
export class ClassComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
