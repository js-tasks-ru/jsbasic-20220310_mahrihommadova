function highlight(table) {
  let tableBody = table.tBodies[0];
  let tableCell, tableGender, tableAge;
  for (let i = 0; i < tableBody.rows.length; i++) {
    tableCell = tableBody.rows[i].cells[3];
    if (!tableCell.hasAttribute('data-available')) {
      tableBody.rows[i].setAttribute('hidden', true);
    } else if(tableCell.getAttribute('data-available') == 'true') {
      table.tBodies[0].rows[i].classList.add('available');
    } else if(tableCell.getAttribute('data-available') == 'false') {
      table.tBodies[0].rows[i].classList.add('unavailable');
    }
      
    tableGender = tableBody.rows[i].cells[2];
    if (tableGender.innerHTML == 'm'){
      table.tBodies[0].rows[i].classList.add('male');
    } else if (tableGender.innerHTML == 'f') {
      table.tBodies[0].rows[i].classList.add('female');
    }

    tableAge = tableBody.rows[i].cells[1];
    if (tableAge.innerHTML < 18){
      table.tBodies[0].rows[i].style.textDecoration = 'line-through';
    }
  }
}
