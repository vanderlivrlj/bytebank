import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})


export class NovaTransferenciaComponent{

  @Output() aoTransferir = new EventEmitter<any>();

  title = 'bytebank';
  destino: number = 0;
  valor: number = 0;

  transferir (){

    console.log('valor', this.valor);
    console.log('destino', this.destino);


  }

}
