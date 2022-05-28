import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() text: string = ''; //RECIBE del comp header el texto y el color del boton
  @Input() color: string = '';
  
  @Output() btnClick = new EventEmitter( );//EMITE al comp el evento

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.btnClick.emit(  );

  }

}
