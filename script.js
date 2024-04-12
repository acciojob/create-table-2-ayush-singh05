function createTable() {
    //Write your code here
  let row = prompt("Input number of rows");
  let col = prompt("Input number of columns");
  row = parseInt(row);
  col = parseInt(col);
  console.log(typeof row);
  const table = document.getElementById("myTable");
  for (let i = 0; i < row; i++) {
    let row = table.insertRow();
    for (let j = 0; j < col; j++) {
      let cell = row.insertCell();
      cell.textContent = "Row-" + (i) + " Column-" + (j);
    }
  }
  document.body.appendChild(table);
}
