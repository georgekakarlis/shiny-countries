import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../../models/country';
@Component({
  selector: 'country-item',
  templateUrl: './country-item.component.html',
  styleUrls: ['./country-item.component.scss']
})
export class CountryItemComponent implements OnInit {
  @Input() country: Country
  constructor() { }

  ngOnInit(): void {
  }

}
