import { ComplaintType } from './../../class/complaint-type';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-complaint-type',
  templateUrl: './complaint-type.component.html',
  styleUrls: ['./complaint-type.component.scss'],
})
export class ComplaintTypeComponent implements OnInit {


  @Input() complaitType:ComplaintType;
  
  constructor() { 

    console.log('>>'+this.complaitType);
  }

  ngOnInit() {}

}
