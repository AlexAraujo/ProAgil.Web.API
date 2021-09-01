import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from '../models/Evento';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  baseUrl = 'http://localhost:5000/api/Evento';

  constructor(private http: HttpClient) { }

  getAllEventos(): Observable<Evento[]> {
    return this.http.get<Evento[]>(this.baseUrl);
  }

  getEventoByTema(tema: string): Observable<Evento[]> {
    return this.http.get<Evento[]>(`${this.baseUrl}/getByTema/${tema}`);
  }

  getEventoById(id: number): Observable<Evento> {
    return this.http.get<Evento>(`${this.baseUrl}/${id}`);
  }
  //Cria evento
  postEvento(evento: Evento) {
    return this.http.post(this.baseUrl, evento)
  }
  //Atualiza evento
  putEvento(evento: Evento) {
    return this.http.put(`${this.baseUrl}/${evento.id}` , evento)
  }
  //Deleta o Evento
  deleteEvento(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
