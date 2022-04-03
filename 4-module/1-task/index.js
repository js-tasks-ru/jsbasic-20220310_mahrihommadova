function makeFriendsList(friends) {
  let ul = document.createElement('ul');
  ul.className = "jsArray";
  
  const newArr = [];    
  for (let i = 0; i < friends.length; i++) {
    newArr.push(`${friends[i].firstName} ${friends[i].lastName}`);
  }
  
  for (const person of newArr) {
    const newList = document.createElement('li');
    newList.classList.add('new-person');
    newList.textContent = person;
    ul.append(newList);
  }
    
  return ul;
}
