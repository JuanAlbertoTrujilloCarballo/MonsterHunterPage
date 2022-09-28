import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {

  endpoint = 'http://localhost:8080/monsters';

  constructor(private httpClient: HttpClient) { }

  getMonsters(){
    return this.httpClient.get(this.endpoint);
  }
}
