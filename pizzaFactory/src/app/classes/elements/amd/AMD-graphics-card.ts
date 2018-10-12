import {GraphicsCard} from '../graphics-card';

export class AMDGraphicsCard implements GraphicsCard {
  private price: number;

  process(): void {
    console.log('Preparing AMD graphics card...');
  }

  getPrice(): number {
    return this.price;
  }

  setPrice(value: number): void {
    this.price = value;
  }
}
