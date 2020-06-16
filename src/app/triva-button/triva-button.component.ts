import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-triva-button',
  templateUrl: './triva-button.component.html',
  styleUrls: ['./triva-button.component.scss']
})
export class TrivaButtonComponent implements OnInit {

  @Input()
  text: string;

  constructor() { }

  ngOnInit(): void {
  }

}
