(function() {

  var myButton = document.getElementById("myButton");
  myButton.addEventListener('click', createBox);
  
  var mainContainer = document.getElementsByTagName("main")[0];
  var colCounter = 0;
  var row;

  function createBox() {
    // console.log('create box');

    // if starting a new row
    if (colCounter % 4 === 0) {
      row = createRow();
      // insert a new row after the first row (if this is the first insert)
      // or after the last inserted row
      mainContainer.insertBefore(row, mainContainer.children[colCounter / 4 + 1]);
    }

    var column = createColumn();
    row.appendChild(column);
  }

  function createRow() {
    // console.log('create row');

    var row = document.createElement("div");
    row.className = "row";

    return row;
  }

  function createColumn() {
    var col = document.createElement("div");
    col.className = "col-lg-3";

    var textBox = document.createElement("div");
    textBox.className = "text-box";

    var headerDate = document.createElement("div");
    headerDate.className = "header-date";

    var headerDateInner = document.createElement("div");
    headerDateInner.className = "inner";

    var date = new Date();
    var dateText = document.createTextNode(
      (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear());

    var h5 = document.createElement("h5");
    var h5Text = document.createTextNode("Row: " + Math.floor(colCounter / 4 + 1));

    var div = document.createElement("div");
    var divText = document.createTextNode("Column: " + (colCounter % 4 + 1));

    headerDateInner.appendChild(dateText);
    headerDate.appendChild(headerDateInner);
    textBox.appendChild(headerDate);

    h5.appendChild(h5Text);
    textBox.appendChild(h5);

    div.appendChild(divText);
    textBox.appendChild(div);

    col.appendChild(textBox);

    colCounter++;
    return col;
  }

}());
