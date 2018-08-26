var animal = 'dog';
function myAnimal() {
  return animal;
}
myAnimal();


function yourAnimal() {
  animal = 'cat';
  return animal;
}

yourAnimal();