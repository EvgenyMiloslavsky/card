import {Injectable} from '@angular/core';
import {CardModel} from '../models/card.model';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  cards: CardModel[] = [];
  randomArray: number[] = [];

  flipperSubject: Subject<boolean> = new Subject();

  private quantity: number;

  constructor() {
  }


  cardsGenerator() {
    this.quantity = 8;
    this.randomArrayGenerator();

    for (let i = 0; i < this.randomArray.length; i++) {
      this.cards[i] = {
        card_content: this.randomArray[i],
        flip_flag: false,
        id: i
      };

      console.log(this.cards[i]);
    }
  }

  getCards() {
    return [...this.cards];
  }

  randomArrayGenerator() {
    let tempArray = [];
// Generate random element array
    while (tempArray.length < 4) {
      const r = Math.floor(Math.random() * 100) + 1;
      if (tempArray.indexOf(r) === -1) {
        tempArray.push(r);
      }
    }
// Duplicate elements
    tempArray = tempArray.reduce(function (res, current, index, array) {
      return res.concat([current, current]);
    }, []);

    this.shuffle(tempArray);
    console.log(tempArray);
    this.randomArray = tempArray;

  }

  cardFlipper(card: CardModel){

  }

  shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  contentCardGenerator() {
  }

}
