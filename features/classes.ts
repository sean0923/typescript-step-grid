class LongVehical {
  color: string;

  constructor(color: string) {
    this.color = color;
  }

  log() {
    console.log(this.color);
  }
}

const longVehical = new LongVehical('red');
longVehical.log();

class ShortVehical {
  constructor(public color: string) {}

  protected logColor() {
    console.log(this.color);
  }
}

const shortCar = new ShortVehical('orange');

class Car extends ShortVehical {
  constructor(public name: string, color) {
    super(color);
  }

  carLog() {
    console.log(`name: ${this.name}`);
    this.logColor();
  }
}

const car = new Car('civic', 'grey');
car.carLog();
