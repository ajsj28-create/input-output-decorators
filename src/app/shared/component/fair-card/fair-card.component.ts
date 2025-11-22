import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ifair } from '../../model/fair';

@Component({
  selector: 'app-fair-card',
  templateUrl: './fair-card.component.html',
  styleUrls: ['./fair-card.component.scss']
})
export class FairCardComponent implements OnInit {

  @Input() cardObj!: Ifair
  @Output() outFair: EventEmitter<string> = new EventEmitter()

  getFair(fair: string) {
    this.outFair.emit(fair)
  }

  constructor() { }

  ngOnInit(): void {}

}
