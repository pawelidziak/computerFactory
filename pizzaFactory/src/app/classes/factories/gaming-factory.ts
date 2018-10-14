import {ComputerFactory} from './computer-factory';
import {Computer} from '../Computer';
import {GamingComputer} from '../gaming-computer';
import {DockingStation} from '../accessories/docking-station';
import {Monitor} from '../accessories/monitor';

export class GamingFactory extends ComputerFactory {

  constructor() {
    super();
    this.computer = new GamingComputer();
    setTimeout(()=> this.addAccessories(), 3000);
  }

  getComputer(): Computer {
    return this.computer;
  }

  addAccessories(): void {
    setTimeout(()=> this.computer = new DockingStation(this.computer), 1000);
    this.computer = new Monitor(this.computer);
  }

}
