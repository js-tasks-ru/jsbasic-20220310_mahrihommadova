function filterRange(arr, a, b) {
  let newArr = arr.filter((num) => {
    return (num >= a && num <= b)
  });
  return newArr;
}
