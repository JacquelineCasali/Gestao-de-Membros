import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = 'http://localhost:8000/';
  httpHeaders = new HttpHeaders({
    'X-CSRFToken': 'csrftoken',
    // 'Content-Type': 'applications/json',
  });

  //  interação com a api
  constructor(private http: HttpClient) {}

  getMember(id: any): Observable<any> {
    return this.http.get(this.baseUrl + 'menbers/' + id + '/', {
      headers: this.httpHeaders,
    });
  }
  // put atualizar o dado
  updateMember(menber: any): Observable<any> {
    let body = {
      name: menber.name,
      surname: menber.surname,
      phone: menber.phone,
    };

    return this.http.put(this.baseUrl + 'menbers/' + menber.id + '/', body, {
      headers: this.httpHeaders,
    });
  }
}
