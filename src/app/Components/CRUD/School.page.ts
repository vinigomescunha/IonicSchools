import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Colegio } from 'src/app/Models/Colegio';
import { DataService } from 'src/app/Services/DataService';

@Component({
  selector: 'app-school',
  templateUrl: 'School.page.html',
  styleUrls: ['../../app.component.scss'] // dessa forma centralizo os estilos, fica um local somente para edição
})
export class SchoolPage {
  public schools: Colegio[] = [];

  public page: number = 1;

  public limit: number = 2;

  public mesg: string = "";

  public action: Actions = Actions.LIST;

  constructor(public nav: NavController, private data: DataService) { }

  public ionViewWillEnter() {
    this.retrieveSchools();
  }

  public retrieveSchools(): Promise<any> { // esse é Promise de any mesmo, ou Promise<void> :/
    return this.data.getSchools().then(schools => this.schools = schools); //nesse caso n trato o catch pq retorno vazio em caso de erro
  }

  public goToClass(id: string): void {
    this.nav.navigateRoot(`/routes/crud-route/class?collegeId=${id}`);
  }

  public getSchools(): Array<Colegio> {
    return this.schools.slice(0, (this.page * this.limit));
  }

  public hasDisplayAllSchools(): boolean {
    return (this.page * this.limit) >= this.schools.length;
  }

  public scrollMore() {
    this.page++;
  }

  public setPage(page: number): void {
    this.page = page;
  }

  public addSchool(form): void {
    const { name } = form.value;
    this.data.addSchool({ name })
      .then((isAdd: boolean) => {
        if (isAdd) {
          this.retrieveSchools();
          this.mesg = "Adicionado com sucesso!";
        } else {
          this.mesg = "Ocorreu um erro ao adicionar o Colegio";
        }
      })
      .catch(e => {
        this.mesg = "Houve um erro no processamento, tente mais tarde!";
      });
  }

  public isDisplay(action: Actions): boolean {
    return this.action === action;
  }

  public toggleForm(): void {
    // nesse caso so tem duas alternativas
    this.action = this.action === Actions.DISPLAY ? Actions.LIST: Actions.DISPLAY;
  }

  public toggleFormLabel(): string {
    return this.action === Actions.DISPLAY ? '': '';
  }

}

enum Actions {
  LIST = 'list',
  DISPLAY = 'display'
}