import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.sass']
})
export class AccordionComponent implements OnInit {
  @Input() hasJustViewed: boolean;
  @Input() title: string;
  @Input() isHidden: false;

  constructor() { }

  ngOnInit(): void {
  }

}