import {Processor} from '../processor';

export class AMDProcessor implements Processor {
  private price: number = 90;

  process(): void {
    console.log('Preparing AMD processor...');
  }

  getPrice(): number {
    return this.price;
  }

  setPrice(value: number): void {
    this.price = value;
  }
}
