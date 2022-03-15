import { Component, OnInit } from '@angular/core';
import { faSearch, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { CountryService } from '../service/country.service'

@Component({
  selector: 'filtercontainer',
  templateUrl: './filtercontainer.component.html',
  styleUrls: ['./filtercontainer.component.scss']
})
export class FiltercontainerComponent implements OnInit {
  faSearch = faSearch
  faAngleDown = faAngleDown
  //List of Region in Drop Down.
  RegionList = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']
  searchText = '';
  regionSelected = '';
  getregion ;
  constructor(private filter: CountryService) { }

  ngOnInit(): void {

  }
  changeRegion(event) {//Function to detect drop down value change
    this.regionSelected = event.target.value
    this.filterChange()
  }

  onSearchChange(searchValue: string) {//Function to detect Change in Input Search.
    this.searchText = searchValue;
    this.filterChange()
  }
  //This function will send to value to country-card component
  filterChange() {
    this.filter.raiseEvent({
      region: this.regionSelected,
      searchValue: this.searchText
    });
  }


}
