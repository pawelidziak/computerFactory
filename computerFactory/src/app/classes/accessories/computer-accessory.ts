import {Computer} from '../Computer';

export abstract class ComputerAccessory extends Computer {
  computer: Computer;
  private _accessoryPrice: number;

  get accessoryPrice(): number {
    return this._accessoryPrice;
  }

  set accessoryPrice(value: number) {
    this._accessoryPrice = value;
  }

}
