function sales(carsSold) {
  const total = {};

  for (car of carsSold) {
    if (!total[car.make]) {
      total[car.make] = car.price;
    } else {
      total[car.make] += car.price;
    }
  }

  return total;
}

module.exports = sales;
