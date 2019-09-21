import {Component, OnInit} from '@angular/core';
import {CardsService} from './cards.service';
import {CardModel} from '../models/card.model';


@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.scss']
})
export class CardsContainerComponent implements OnInit {
  cards: CardModel[];
  cardsEvents: CardModel[] = [];

  constructor(private generatedCards: CardsService) {
  }

  ngOnInit() {
    this.generatedCards.cardsGenerator();
    this.cards = this.generatedCards.getCards();
  }

  cardEvent(event: CardModel) {
    if (this.cardsEvents.length <= 1) {
      this.cardsEvents.push(event);
      console.log('!!!' + this.cardsEvents.length);
    } else {
      if (this.cardsEvents[0].card_content === this.cardsEvents[1].card_content) {
        console.log('Equal!!!');
        this.cardsEvents.map((card) => card.flip_flag = true);
        this.generatedCards.flipperSubject.next(true);
      } else {
        console.log('Not Equal!!!');
        setTimeout(
          () => this.generatedCards.flipperSubject.next(true), 30000);
        this.generatedCards.flipperSubject.next(false);
      }
      this.cardsEvents = [];
    }
    // console.log(event);
  }
}
