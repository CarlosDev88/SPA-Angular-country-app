import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [],
})
export class PaisInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter(); //esto son eventos
  @Output() onDEbounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject(); //esto es un observable

  termino: string = '';
  buscar() {
    this.onEnter.emit(this.termino);
  }
  constructor() {}

  ngOnInit(): void {
    //esto se dispara una unica vez cuando el componente esta inicializado

    this.debouncer.pipe(debounceTime(300)).subscribe((valor) => {
      this.onDEbounce.emit(valor);
    });
  }

  teclaPrecionada() {
    this.debouncer.next(this.termino);
  }
}
