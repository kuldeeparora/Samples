import {Component, OnChanges, Input, EventEmitter, Output} from "@angular/core";

@Component({
  selector: 'kd-star',
  templateUrl: 'app/shared/star.component.html',
  styleUrls: ['app/shared/star.component.css']
})

export class StarComponent implements OnChanges {
  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    this.starWidth = this.rating * 120/5;
  }

  onClick() : void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
  }

}
