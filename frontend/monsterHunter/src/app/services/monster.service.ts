import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Monster {
  _id: number;
  name: string;
  title: string;
  weakness: string;
}

@Injectable({
  providedIn: 'root'
})

export class MonsterService {

  endpoint = 'http://localhost:8080/monsters';

  httpOptions ={

  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

constructor(private httpClient: HttpClient) { }

//   getMonsters(){
//   return this.httpClient.get(this.endpoint);
// }

getMonsters(): Observable<Monster[]> {
  return this.httpClient.get<Monster[]>(this.endpoint)
    .pipe(
      tap(monsters => console.log('Monsters retrieved!')),
      catchError(this.handleError<Monster[]>('Get Monster', []))
    );
}

createMonster(monster: Monster): Observable<any> {
  return this.httpClient.post<Monster>(this.endpoint, JSON.stringify(monster), this.httpOptions)
    .pipe(
      catchError(this.handleError<Monster>('Error occured'))
    );
}

deleteMonster(id): Observable<Monster[]> {
  return this.httpClient.delete<Monster[]>(this.endpoint + '/' + id, this.httpOptions)
    .pipe(
      tap(_ => console.log(`Monster deleted: ${id}`)),
      catchError(this.handleError<Monster[]>('Delete Monster'))
    );
}

updateMonster(id, monster: Monster): Observable<any> {
  return this.httpClient.put(this.endpoint + '/' + id, JSON.stringify(monster), this.httpOptions)
    .pipe(
      tap(_ => console.log(`User updated: ${id}`)),
      catchError(this.handleError<Monster[]>('Update user'))
    );
}

private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error);
    console.log(`${operation} failed: ${error.message}`);
    return of(result as T);
  };
  }  
}