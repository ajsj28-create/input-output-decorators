import { Component, OnInit } from '@angular/core';
import { fairsArray } from '../../const/fair-array';
import { Ifair } from '../../model/fair';


@Component({
  selector: 'app-fair-dash',
  templateUrl: './fair-dash.component.html',
  styleUrls: ['./fair-dash.component.scss']
})
export class FairDashComponent implements OnInit {

  fairsArray: Array<Ifair> = fairsArray

  selectedFair: string = 'ISS Washington DC Fair'

  getSelectedFair(fair: string) {
    this.selectedFair = fair
  }

  constructor() {}

  ngOnInit(): void {}

}
