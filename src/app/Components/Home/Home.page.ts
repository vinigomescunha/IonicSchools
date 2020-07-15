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
  @Input() errorMsg: string = "";
  formInput: FormGroup;

  constructor(private auth: AuthService, private nav: NavController) { }

  hasError(): boolean {
    return this.errorMsg !== "" ? true : false;
  }
  submitForm(form): void {
    const { username, password } = form.value;
    this.auth.authenticate(username, password)
      .then((auth: boolean) => {
        if (auth) {
          this.errorMsg = "";
          this.nav.navigateRoot("/routes/crud-route");
        } else {
          this.errorMsg = "Login Invalido";
        }
      })
      .catch(e => {
        this.errorMsg = "Houve um erro durante a autenticação!";
      });
  }
  clearToken(): void {
    this.auth.clearToken();
  }
}
