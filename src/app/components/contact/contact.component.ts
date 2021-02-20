import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $("#logo").click(function(){
      //e.preventDefault();
      $("header").css("background","green")
      .css("height","50px");
    });

    $('.galeria').bxSlider({
      mode: 'fade',
      captions: false,
      slideWidth: 400
    });
  }

}
