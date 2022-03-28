function camelize(str) {
  let delIndex;
  let arr = (str.split(''));
  for (let i = 0; i < arr.length; i++){
    if(arr.includes('-')){
        delIndex = arr.indexOf('-');
        arr.splice(delIndex, 1);
        arr[delIndex] = arr[delIndex].toUpperCase();
    }
  }
  str = arr.join('');
  return str;
}
