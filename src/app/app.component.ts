import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  disable = false;
  animation = true;
  ratedIcon = "star";
  notRatedIcon = "star_outline"
  ratedIconColor = "#faca51"
  ratingCount = 5;

  getRating(nrOfstars: number){
    console.log(nrOfstars)
  }
}
