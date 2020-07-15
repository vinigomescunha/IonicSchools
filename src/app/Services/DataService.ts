import { Injectable } from "@angular/core";
import { Storage } from '@ionic/storage';
import { RequestService } from './RequestService';
import { AuthService } from './AuthService';

const TOKEN_KEY = "token";

@Injectable()
export class DataService {

    constructor(private auth: AuthService, private request: RequestService) { }

    public async getSchools(): Promise<Array<any>> {
        const token = await this.auth.getToken();
        const schools = await this.request.getSchools(token);
        return schools;
    }

    public async getClasses(schoolId: string): Promise<Array<any>> {
        const token = await this.auth.getToken();
        const classes = await this.request.getClass(token, schoolId);
        return classes;
    }

    public async addSchool(data): Promise<boolean> {
        const token = await this.auth.getToken();
        const isAdd = await this.request.addSchool(token, data);
        return isAdd;
    }
}