import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from 'src/app/Services/DataService';
import { TurmaModel } from 'src/app/Models/Turma';

@Component({
  selector: 'app-class',
  templateUrl: 'Class.page.html'
})
export class ClassPage {

  private classes: TurmaModel[];

  constructor(private route: ActivatedRoute, private data: DataService) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      console.log(params);
      if(params.collegeId) {
        this.data.getClasses(params.collegeId).then(classes => this.classes = classes);
      }
    });
  }

  getClasses() {
    return this.classes;
  }
}
