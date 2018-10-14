import {Computer} from '../Computer';

export abstract class ComputerFactory {
  protected computer: Computer;

  abstract addAccessories(): void;
  abstract getComputer(): Computer;
}
