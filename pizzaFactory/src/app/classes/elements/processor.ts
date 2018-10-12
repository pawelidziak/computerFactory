export interface Processor {
  process(): void;
  getPrice(): number;
  setPrice(value: number): void;
}
