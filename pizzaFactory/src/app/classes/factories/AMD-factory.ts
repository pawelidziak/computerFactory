import {ComputerFactory} from './computer-factory';
import {AMDGraphicsCard} from '../elements/amd/AMD-graphics-card';
import {GraphicsCard} from '../elements/graphics-card';
import {Processor} from '../elements/processor';
import {AMDProcessor} from '../elements/amd/AMD-processor';

export class AMDFactory implements ComputerFactory{

  getProcessor(): Processor {
    return new AMDProcessor();
  }

  getGraphicsCard(): GraphicsCard {
    return new AMDGraphicsCard();
  }
}
