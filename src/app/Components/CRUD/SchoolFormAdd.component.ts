import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Colegio } from 'src/app/Models/Colegio';
import { DataService } from 'src/app/Services/DataService';

@Component({
  selector: 'app-school-form-add',
  templateUrl: 'SchoolFormAdd.component.html',
  styleUrls: ['../../app.component.scss'] // dessa forma centralizo os estilos, fica um local somente para edição
})
export class SchoolFormAddPage {

  public mesg: string = "";
  @Output() statusChanged = new EventEmitter<boolean>();

  constructor(private data: DataService) { }
  public ionViewWillEnter() {
  }

  // adicionar colegio, CRUD
  public addSchool(form): void {
    const { name } = form.value;
    this.data.addSchool({ name })
      .then((isAdd: boolean) => {
        this.statusChanged.emit(isAdd);
      })
      .catch(e => {
        this.statusChanged.emit(false);
      });
  }
 

}
