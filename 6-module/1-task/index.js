/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = this.render();
  }

  render() {
    const tableElem = document.createElement('table');
    const tableHead = document.createElement('thead');
    const tableBody = document.createElement('tbody');
    const tHeadRows = 
      `<tr>
        <th>Имя</th>
        <th>Возраст</th>
        <th>Зарплата</th>
        <th>Город</th>
        <th></th>
      </tr>`;

    const rowItems = this.rows.map(item => {
      return `
      <tr>
        <td>${item.name}</td>
        <td>${item.age}</td>
        <td>${item.salary}</td>
        <td>${item.city}</td>
        <td><button>X</button></td>      
      </tr>`
    }).join('');

    tableHead.insertAdjacentHTML('beforeend', tHeadRows);
    tableBody.insertAdjacentHTML('beforeend', rowItems);
    tableElem.append(tableHead);
    tableElem.append(tableBody);
    
    tableBody.addEventListener('click', (e) => {
      let trElem = e.target;
      let parentElem = trElem.closest("tr");
      parentElem.parentElement.removeChild(parentElem);
    });

    return tableElem;
  }
}
