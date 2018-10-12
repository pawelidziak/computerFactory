import {ComputerFactory} from './computer-factory';
import {GraphicsCard} from '../elements/graphics-card';
import {Processor} from '../elements/processor';
import {IntelProcessor} from '../elements/intel/intel-processor';
import {IntelGraphicsCard} from '../elements/intel/intel-graphics-card';

export class IntelFactory implements ComputerFactory{
  getProcessor(): Processor {
    return new IntelProcessor();
  }

  getGraphicsCard(): GraphicsCard {
    return new IntelGraphicsCard();
  }
}
