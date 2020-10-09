import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  mensaje: string = ""
  constructor(public _cs: ChatService) { 7

    this._cs.cargarMensajes().subscribe()

  }

  ngOnInit() {
  }

  enviarMensaje() {
    console.log(this.mensaje);
    if (this.mensaje.length == 0) {
      return;
    }
    this._cs.agregarMensaje(this.mensaje)
            .then(() => this.mensaje = "")
            .catch((err) => console.log('Error al enviar', err))
  }

}
