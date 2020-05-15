import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complanit-card',
  templateUrl: './complanit-card.component.html',
  styleUrls: ['./complanit-card.component.scss'],
})
export class ComplanitCardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}

    showComment(){

  //  this.router.navigateByUrl("/add-comment");

  }

}
