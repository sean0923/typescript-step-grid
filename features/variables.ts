let str: string = 'asdf';
let num: number = 1;
let bool: boolean = true;

// JS Object
let now: Date = new Date();

// Class
class Car {}

let car: Car = new Car();

// Array
let nums: number[] = [1, 2, 3];

// object
let obj: { x: number; y: string } = {
  x: 1,
  y: 'str',
};

// function
let func: (i: number) => void = (i) => {
  console.log(i);
};

// * When to use annotation

// 1) When the function returns the 'any' type
let some: string = JSON.parse('asdf');
// JSON.parse can returen numb obj arr ...

// 2) When we declare a variable on one line then initialize it lager
let isRequired: boolean;
isRequired = true;

// 3) variable that might have multi type
let arrOrStr: number[] | string = 'str';

arrOrStr = [1];
