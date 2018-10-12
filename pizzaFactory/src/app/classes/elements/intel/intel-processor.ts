import {Processor} from '../processor';
export class IntelProcessor implements Processor {
  private price: number = 100;

  process(): void {
    console.log('Preparing Intel processor...');
  }

  getPrice(): number {
    return this.price;
  }

  setPrice(value: number): void {
    this.price = value;
  }
}
