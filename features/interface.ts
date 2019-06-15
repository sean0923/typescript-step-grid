interface Vehical {
  name: string;
  year: number;
  broken: boolean;
}

const logCar = (car: Vehical): void => {
  console.log(`
    name: ${car.name}
    year: ${car.year}
    broken: ${car.broken}
  `);
};

const civic = {
  name: 'civic',
  year: 1989,
  broken: false,
};

logCar(civic);
