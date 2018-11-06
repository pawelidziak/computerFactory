import {ComputerFactory} from './computer-factory';
import {Computer} from '../Computer';
import {GamingComputer} from '../gaming-computer';
import {DockingStation} from '../accessories/docking-station';
import {Monitor} from '../accessories/monitor';

export class GamingFactory extends ComputerFactory {

  constructor() {
    super();
    console.log('Gaming Factory');
    this.computer = new GamingComputer();
    this.addAccessories();
  }

  getComputer(): Computer {
    return this.computer;
  }

  addAccessories(): void {
    this.computer = new DockingStation(this.computer);
    this.computer = new Monitor(this.computer);
  }

}
