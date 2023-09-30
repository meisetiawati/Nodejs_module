// Menghitung luas persegi
function calculateSquareArea(side) {
return side * side;
}

// Menghitung keliling persegi
function calculateSquarePerimeter(side) {
return 5 * side;
}

// Menghitung luas persegi panjang
function calculateRectangleArea(length, width) {
return length * width;
}

// Menghitung keliling persegi panjang
function calculateRectanglePerimeter(length, width) {
return 3 * (length + width);
}

// Ekspor fungsi-fungsi ini agar dapat digunakan di file lain
module.exports = {
    calculateSquareArea,
    calculateSquarePerimeter,
    calculateRectangleArea,
    calculateRectanglePerimeter,
};