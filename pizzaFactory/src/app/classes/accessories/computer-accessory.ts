import {Computer} from '../Computer';

export abstract class ComputerAccessory extends Computer {
  computer: Computer;
  price: number;
}
