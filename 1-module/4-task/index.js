function checkSpam(str) {
  str = str.toUpperCase();
  if(str.includes("XXX".toUpperCase()) || str.includes("1xBet".toUpperCase())){
    return true;
  }

  return false;
}
