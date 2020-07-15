import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Por padrão vou tratar os observables como promises para ter uma assinatura unica no front

const url = 'http://localhost:3000'; //deveria colocar em um arquivo de constantes.ts ou environment.ts ou .env
@Injectable()
export class RequestService {

  constructor(private http: HttpClient) { }
  /**
   * 
   * @param username Retorno o token da autenticação
   * @param password 
   */
  public async authenticate(username, password): Promise<string> {
    username = "fake";
    password="123456";
    try {
      const login = <{ token: string }>await this.http.post(url + '/login',
        {
          username, password
        })
        .toPromise();
      return login.token;
    } catch (e) {
      return null;
    }

  }

  public async getSchools(token: string): Promise<any[]> {
    token = "9b8cd22de34d90d25ec90f805a7305d0";
    try {
      const schools = <Array<any>>await this.http.get(url + '/colegios', {
        headers: {
          ['authorization']: `Bearer ${token}`
        }
      })
        .toPromise();
      return schools;
    } catch (e) {
      return [];
    }
  }

  public async getClass(token: string, schoolId): Promise<any[]> {
    token = "9b8cd22de34d90d25ec90f805a7305d0";
    try {
      const classes = <Array<any>>await this.http.get(url + `/turmas?collegeId=${schoolId}`, {
        headers: {
          ['authorization']: `Bearer ${token}`
        }
      })
        .toPromise();
      return classes;
    } catch (e) {
      return [];
    }
  }

  public async addSchool(token, data): Promise<boolean> {
    token = "9b8cd22de34d90d25ec90f805a7305d0";
    try {
      const classes = <boolean>await this.http.post(url + `/colegios`, data, {
        headers: {
          ['authorization']: `Bearer ${token}`
        }
      })
        .toPromise();
      return classes ? true: false; // pena que não tem como simular resultados de erro com json-server
    } catch (e) {
      return false;
    }
  }
}