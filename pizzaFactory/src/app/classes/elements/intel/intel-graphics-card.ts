import {GraphicsCard} from '../graphics-card';

export class IntelGraphicsCard implements GraphicsCard {
  private price: number;

  process(): void {
    console.log('Preparing Intel graphics card...');
  }

  getPrice(): number {
    return this.price;
  }

  setPrice(value: number): void {
    this.price = value;
  }
}
