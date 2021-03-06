function getMinMax(str) {
  let arr, numArr = [];
  arr = str.split(' ');
  arr.forEach(element => {
    if(!isNaN(+element)){
      numArr.push(element);
    }; 
  });
  return {
    min: Math.min(...numArr),
    max: Math.max(...numArr),
  }
}
