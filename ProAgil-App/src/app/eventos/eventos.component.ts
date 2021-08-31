import { EventoService } from './../services/evento.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Evento } from '../models/Evento';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  eventosFiltrados?: Evento[];
  eventos: Evento[] = [];
  imagemLargura = 50;
  imagemMargem = 2;
  mostrarImagem = false;
  modalRef!: BsModalRef;

  _filtroLista = '';

  constructor(
    private eventoService: EventoService,
    private modalService: BsModalService
    ) { }

  get filtroLista(): string {
    return this._filtroLista;
  }

  set filtroLista(value: string) {
    this._filtroLista = value;
    this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;
  }

  openModal(templete: TemplateRef<any>) {
    this.modalRef = this.modalService.show(templete);
  }

  ngOnInit() {
    this.getAllEventos();
  }

  filtrarEventos(filtrarPor: string) : Evento[] {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      (evento: { tema: string; }) => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  alternarImagem() {
    this.mostrarImagem = !this.mostrarImagem;
  }

  getAllEventos() {
    this.eventoService.getAllEvento().subscribe(
      (_eventos: Evento[]) => {
       this.eventos = _eventos;
       console.log(_eventos);
      }, error => {
        console.log(error);
    });
  }

}
