import { Injectable } from "@angular/core";
import { Storage } from '@ionic/storage';
import { RequestService } from './RequestService';

const TOKEN_KEY = "token";

@Injectable()
export class AuthService {

    constructor(private storage: Storage, private request: RequestService) { }

    public async setToken(token: string): Promise<any> {
        return await this.storage.set(TOKEN_KEY, token);
    }

    public async getToken(): Promise<string> {
        return await this.storage.get(TOKEN_KEY);
    }

    public async clearToken() {
        return await this.storage.remove(TOKEN_KEY);
    }

    public async hasToken(): Promise<boolean> {
        const token = await this.getToken();
        return token ? true : false;
    }

    public async authenticate(username: string, password: string): Promise<boolean> {
        const token = await this.request.authenticate(username, password);
        if(token) {
            await this.setToken(token);
            return true;
        }
        return false;
    }
}