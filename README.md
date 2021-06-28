# RatingComponent

A styleable rating component written in simple Typescript, that can create a widget with the user choosen properties. <br/>
The component uses angular materials for the rating icons.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.11.

## Development server

In order to use the component in the project directory, you can have to run:<br/>
  `npm init` then <br/>
  `ng serve`

The navigate to `http://localhost:4200/` to see the default component. The app will automatically reload if you change any of the source files.

## Usage

The component is located in the Components/rating-widget.component.ts file.
Add the component tag which is `<app-rating-widget></app-rating-widget>` in your html file.
You can custom the component using binding for the following inputs 
  * `disable` - make component disabled/enabled
  * `animation` - add or remove animation when clicking on the component
  * `ratedIcon` - specify a custom item from mat-icon for the rated stars, default value is star
  * `notRatedIcon` - specify a custom item from mat-icon for the not rated stars, default value is star-outline
  * `ratingCount` - specify the number of rating objects that the user will use
  * `ratedIconColor` - specify the color of the component
  * `ratingChange` - output - returns the rating number

## Example

`<app-rating-widget [disabled]="disable" [animation]="animation" [ratedIcon]="ratedIcon" [notRatedIcon]="notRatedIcon" [ratedIconColor]="ratedIconColor" [ratingCount]="ratingCount" (ratingChange)="getRating($event)"></app-rating-widget>`

where `disable,animation,ratedIcon,ratedIcon,ratedIconColor,ratingCount,getRating()` are declared in the .ts file as following: <br/>
`disable = false;` <br/>
  `animation = true;` <br/>
  `ratedIcon = "star";` <br/>
  `notRatedIcon = "star_outline"` <br/>
  `ratedIconColor = "#faca51"` <br/>
  `ratingCount = 5;` <br/>
  <br/>
  `getRating(nrOfstars: number){` <br/>
    `console.log(nrOfstars)` <br/>
  `}` <br/>
  
