function namify(users) {
  let nameArr = [];
  for (let i = 0; i < users.length; i++) {
      nameArr.push(`${users[i].name}`);
  }
  return nameArr;
}
