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

  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

constructor(private httpClient: HttpClient) { }

//   getMonsters(){
//   return this.httpClient.get(this.endpoint);
// }

getMonster(id): Observable<Monster[]> {
  return this.httpClient.get<Monster[]>(this.endpoint + '/' + id)
    .pipe(
      tap(_ => console.log(`Monster fetched: ${id}`)),
      catchError(this.handleError<Monster[]>(`Get monster id=${id}`))
    );
}

getMonsters(): Observable<Monster[]> {
  return this.httpClient.get<Monster[]>(this.endpoint)
    .pipe(
      tap(monsters => console.log('Monsters retrieved!')),
      catchError(this.handleError<Monster[]>('Get Monster', []))
    );
}

createMonster(monster: Monster): Observable<any> {
  const data = new URLSearchParams();
  data.append('name',monster.name);
  data.append('title',monster.title);
  data.append('weakness',monster.weakness);
  return this.httpClient.post<Monster>(this.endpoint, data.toString(), this.httpOptions)
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
  const data = new URLSearchParams();
  data.append('name',monster.name);
  data.append('title',monster.title);
  data.append('weakness',monster.weakness);
  return this.httpClient.put(this.endpoint + '/' + id, data.toString(), this.httpOptions)
    .pipe(
      tap(_ => console.log(`Monster updated: ${id}`)),
      catchError(this.handleError<Monster[]>('Update monster'))
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