function showSalary(users, age) {
  let arr = [];
  for(let i = 0; i < users.length; i++){
    if(users[i].age <= age){
      arr.push(`${users[i].name}, ${users[i].balance}`);
    }
  }
  return arr.join('\n');
}
