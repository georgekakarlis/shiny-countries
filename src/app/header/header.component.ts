import { Component, OnInit } from '@angular/core';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  //Dark mode Icon for Initial Page load.
  faIcon = faMoon;
  //Mode Text for for Initial Page load.
  mode = 'Dark Mode';
  constructor() { }

  ngOnInit(): void {

  }

  changeMode() {//Function to change theme of the application.
    const element = document.body;
    if (this.mode === 'Dark Mode') {
      element.classList.remove("light-theme")
      element.classList.toggle("dark-theme");
      this.mode = 'Light Mode'
      this.faIcon = faSun;
    } else {
      element.classList.remove("dark-theme")
      element.classList.toggle("light-theme");
      this.mode = 'Dark Mode'
      this.faIcon = faMoon;
    }
  }

}
