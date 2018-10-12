import {Processor} from './elements/processor';
import {GraphicsCard} from './elements/graphics-card';
import {ComputerFactory} from './factories/computer-factory';

export class Computer {
  private serialNumber: number;
  private processor: Processor;
  private graphicsCard: GraphicsCard;

  private totalPrice = 0;

  constructor(serialNumber: number, factory: ComputerFactory) {
    this.serialNumber = serialNumber;
    this.processor = factory.getProcessor();
    this.graphicsCard = factory.getGraphicsCard();
    this.process();
  }

  private process() {
    console.log(`Starting to assemble a computer with a serial number: ${this.serialNumber}`);
    this.processor.process();
    this.graphicsCard.process();
    console.log(`End of computer assembly with a serial number: ${this.serialNumber}`);
  }

  public toString = () : string => {
    return `Computer (serial number: ${this.serialNumber})`;
  };

  public getTotalPrice(): number {
    console.log('dweew ' + this.processor.getPrice())
    this.totalPrice += this.processor.getPrice();

    // this.totalPrice += this.graphicsCard.getPrice();

    return this.totalPrice;
  }
}
