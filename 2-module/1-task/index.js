function sumSalary(salaries) {
  let result = 0;
  for (let key in salaries) {
    if (isNaN(salaries[key]) || salaries[key] == Infinity || salaries[key] == -Infinity) {
    result += 0;
    } else if (typeof salaries[key] == "number"){
      result += salaries[key];
    }
  }
  return result;
}
