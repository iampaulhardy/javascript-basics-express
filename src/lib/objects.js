const createPerson = (name, age) => {
  return {
    name: name,
    age: age,
  }
}

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  if (object[property]) {
    return true;
  } else {
    return false;
  }
};

const isOver65 = person => {
  if (person.age > 65) {
    return true;
  } else {
    return false;
  }
};

const getAges = people => {
  var result = people.map(person => person.age);
  return result;
};

const findByName = (name, people) => {
  let findName = people.find(people => people.name === name);
  return findName;
};

const findHondas = cars => {
  let hondaCars = cars.filter(car => car.manufacturer === "Honda");
  return hondaCars;
};

const averageAge = people => {
  let avAge = people.reduce((ac,a) => a.age + ac,0)/people.length
  return avAge;
};

const createTalkingPerson = (name, age) => {
  return age;
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
