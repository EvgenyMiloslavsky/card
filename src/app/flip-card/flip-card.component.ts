import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CardModel} from '../models/card.model';
import {CardsService} from '../cards-container/cards.service';

@Component({
  selector: 'app-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss']
})
export class FlipCardComponent implements OnInit {
  @Input() card;
  @Output() cardFlip = new EventEmitter();
  currentCard: CardModel;
  content: any;
  flipped = false;

  constructor(private cardService: CardsService) {
  }


  ngOnInit() {
    this.currentCard = this.card;
    this.cardService.flipperSubject.subscribe(() => {
      if (this.currentCard.flip_flag) {
        this.flipped = true;
      } else {
        this.flipped = false;
      }
      console.log('FLIP');
    });
  }

  onFlipped() {
    if (!this.currentCard.flip_flag) {
      this.flipped = true;
      // this.flipped = !this.flipped;
    }
    // this.flipped = true;
    this.cardFlip.emit(this.currentCard);
    console.log(this.flipped);
  }
}
