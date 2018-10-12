import {Processor} from '../elements/processor';
import {GraphicsCard} from '../elements/graphics-card';

export interface ComputerFactory {
  getProcessor(): Processor;
  getGraphicsCard(): GraphicsCard;
}
