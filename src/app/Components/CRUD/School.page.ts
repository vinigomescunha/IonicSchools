import { Component } from '@angular/core';
import { Colegio } from 'src/app/Models/Colegio';
import { DataService } from 'src/app/Services/DataService';
import { Turma } from 'src/app/Models/Turma';

@Component({
  selector: 'app-school',
  templateUrl: 'School.page.html',
  styleUrls: ['../../app.component.scss'] // dessa forma centralizo os estilos, fica um local somente para edição
})
export class SchoolPage {
  // lista de colegios
  public schools: Colegio[] = [];
  // lista de turmas
  private classes: {
    [id: string]: Turma[]
  } = {};
  // paginação de colegios
  public page: number = 1;
  // limite da paginação de colegios
  public limit: number = 2;
  // mensagem do formulario
  public mesg: string = "";
  // ação tomada na pagina, default listar colegios
  public action: Actions = Actions.LIST;

  constructor(private data: DataService) { }
  // hook ionic quando entra na pagina, @see https://ionicframework.com/docs/angular/lifecycle
  public ionViewWillEnter() {
    // this.page = 1;  // ao entrar reinicio a paginacao ao inicio
    this.retrieveSchools();
  }
  // busco os colegios na API e coloco na lista de colegios do componente
  public retrieveSchools(): Promise<any> {
    return this.data.getSchools().then(schools => this.schools = schools); //nesse caso n trato o catch pq retorno vazio em caso de erro
  }
  // busco os colegios na lista de colegios do componente filtrado pela navegação
  public getSchools(): Array<Colegio> {
    return this.schools.reverse().slice(0, (this.page * this.limit));
  }
  // logica pra saber quando termina a paginação
  public hasDisplayAllSchools(): boolean {
    return (this.page * this.limit) >= this.schools.length;
  }
  // scroll da paginação
  public scrollMore(): void {
    this.page++;
  }
  // logica se é para mostrar formulario de add colegio
  public isDisplayForm(): boolean {
    return this.action === Actions.FORM;
  }
  // logica se é para mostrar lista de colegios
  public isDisplayList(): boolean {
    return this.action === Actions.LIST;
  }
  // botao toggle form e lista de colegios
  public toggleSchoolFormList(): void {
    this.action = this.action === Actions.FORM ? Actions.LIST : Actions.FORM;
  }
  // botão toggle form e lista de colegios
  public toggleSchoolFormListLabel(): string {
    return this.action === Actions.FORM ? ActionsLabel.LIST : ActionsLabel.FORM;
  }
  // obtenho as turmas de determinado colegio na lista de turmas do componente
  public getClasses(collegeId): Array<Turma> {
    return this.classes[collegeId] ? this.classes[collegeId] : [];
  }
  // carrego as turmas de determinado colegio
  public loadClasses(collegeId): void {
    this.data.getClasses(collegeId).then(classes => {
      // pra não poluir a tela eu limpo as classes(turmas buscadas anteriormente)
      // this.classes = {};
      this.classes[collegeId] = classes;
    });
  }

  public getInfo(): string {
    return `[Display ${this.page} of ${Math.round(this.schools.length / this.limit)}] [Total: ${this.schools.length}]`;
  }
  /**
   * Representa um event emitter que trata um bind de duas etapas no child component
   * @param status 
   */
  public childMdifyStatus(status: boolean): void {
    this.mesg = status ? 'Evento concluido com sucesso': 'Houve um problema ao processar e evento';
    this.retrieveSchools();
  }

}
// enumerado de ações na pagina de colegios, listar colegios e form add colegios
enum Actions {
  LIST = 'list',
  FORM = 'form'
}
// enumerado de labels da pagina de colegios, tem relação c/ as acoes
enum ActionsLabel {
  LIST = 'Listar Escolas',
  FORM = 'Adicionar Escola'
}