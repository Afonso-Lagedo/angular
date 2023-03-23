import { Injectable } from '@angular/core';
import { Roupa } from '../Roupas';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';//para requisição

@Injectable({
  providedIn: 'root'
})
export class ListaTwoService {
  private apiUrl = 'http://localhost:3000/roupas';

  constructor(private http:HttpClient) { }

  remove(id:number){
    return this.http.delete<Roupa>(`${this.apiUrl}/${id}`)
  }

  getAll():Observable<Roupa[]>{
    return this.http.get<Roupa[]>(this.apiUrl);
  }

  getItem(id:number):Observable<Roupa>{
    return this.http.get<Roupa>(`${this.apiUrl}/${id}`)
  }
}
