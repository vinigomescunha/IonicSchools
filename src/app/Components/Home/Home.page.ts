import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/Services/AuthService';
import { FormGroup, Validators } from "@angular/forms";
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'Home.page.html',
  styleUrls: ['../../app.component.scss']
})
export class HomePage {
  @Input() msg: string = "";
  formInput: FormGroup;

  constructor(private auth: AuthService, private nav: NavController) { }

  public hasMsg(): boolean {
    return this.msg !== "" ? true : false;
  }
  
  public submitForm(form): void {
    const { username, password } = form.value;
    this.auth.authenticate(username, password)
      .then((auth: boolean) => {
        if (auth) {
          this.msg = "";
          this.nav.navigateRoot("/routes/crud-route");
        } else {
          this.msg = "Login Invalido";
        }
      })
      .catch(e => {
        this.msg = "Houve um erro durante a autenticação!";
      });
  }

  public clearToken(): void {
    this.auth.clearToken();
  }
}
