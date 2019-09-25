exports.getFact = number => {
  let factList = [];
  let fact = 2;
  if (number == 1) {
    return null;
  }
  while (number > 1) {
    if (number % fact == 0) {
      factList.push(fact);
      number = number / fact;
    } else {
      fact++;
    }
  }
  return factList;
};
