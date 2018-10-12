export interface GraphicsCard {
  process(): void;
  getPrice(): number;
  setPrice(value: number): void;
}
