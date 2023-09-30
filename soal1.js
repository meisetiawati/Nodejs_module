const shapes = require('./shapes');

// Menggunakan modul untuk menghitung luas dan keliling
const squareSide = 6;
const squareArea = shapes.calculateSquareArea(squareSide);
const squarePerimeter = shapes.calculateSquarePerimeter(squareSide);
const rectangleLength = 7;
const rectangleWidth = 5;
const rectangleArea = shapes.calculateRectangleArea(rectangleLength, rectangleWidth);
const rectanglePerimeter = shapes.calculateRectanglePerimeter(rectangleLength, rectangleWidth);

console.log('Luas Persegi:', squareArea);
console.log('Keliling Persegi:', squarePerimeter);
console.log('Luas Persegi Panjang:', rectangleArea);
console.log('Keliling Persegi Panjang:', rectanglePerimeter);
