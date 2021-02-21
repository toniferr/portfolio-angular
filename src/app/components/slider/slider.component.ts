import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

declare var $:any;

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() anchura !: number;
  @Input('etiquetas') captions !: boolean;
  @Output() conseguirAutor = new EventEmitter();

  public autor : any;

  constructor() { 
    this.autor = {
      nombre: "Toni",
      website: "toniferr.github.io",
      pais: "España"
    }
  }

  ngOnInit(): void {
    $("#logo").click(function(){
      //e.preventDefault();
      $("header").css("background","green")
      .css("height","50px");
    });

    $('.galeria').bxSlider({
      mode: 'fade',
      captions: this.captions,
      slideWidth: this.anchura
    });

    //se podria lanzar event     
    //this.conseguirAutor.emit(this.autor);
  }

  lanzar(event: any){
    this.conseguirAutor.emit(this.autor);
  }

}
