var rIndex,
table = document.getElementById("table");

// check the empty input
function checkEmptyInput()
{
    var isEmpty = false,
        date = document.getElementById("date").value,
        location = document.getElementById("location").value,
        category = document.getElementById("category").value,
        distance = document.getElementById("distance").value,
        finishTime = document.getElementById("finishTime").value;

    if (date === ""){
    alert ("Please fill in information");
    isEmpty = true;
    }
    else if (location === "") {
    alert ("Please fill in information");
    isEmpty = true;
    }
    else if (category === ""){
    alert ("Please fill in information");
    isEmpty = true;
    }
    else if (distance === "") {
    alert ("Please fill in information");
    isEmpty = true;
    }
    else if (finishTime === "") {
    alert ("Please fill in information");
    isEmpty = true;
    }
    return isEmpty;
    }

// add row
function addHTMLTableRow()
{
// get the table by id 
// create a new row and cells 
// get value from input text
//set the values into row cell`s

if (!checkEmptyInput()){
var newRow = table.insertRow(table.length),
cell1 = newRow.insertCell (0),
cell2 = newRow.insertCell (1),
cell3 = newRow.insertCell (2),
cell4 = newRow.insertCell (3),
cell5 = newRow.insertCell (4),
date = document.getElementById("date").value,
location = document.getElementById("location").value,
category = document.getElementById("category").value,
distance = document.getElementById("distance").value,
finishTime = document.getElementById("finishTime").value;

cell1.innerHTML = date;
cell2.innerHTML = location;
cell3.innerHTML = category;
cell4.innerHTML = distance;
cell5.innerHTML = finishTime;

// call the function to set the event to the newrow
selectedRowToInput();
}
}
// display selected row data into input text
function selectedRowToInput()
{
for (var i = 0; i < table.rows.length; i++)
{
    table.rows[i].onclick = function ()
    {
        //get the selected row index
        rIndex = this.rowIndex;
        document.getElementById("date").value = this.cells[0].innerHTML;
        document.getElementById("location").value = this.cells[1].innerHTML;
        document.getElementById("category").value = this.cells[2].innerHTML;
        document.getElementById("distance").value = this.cells[3].innerHTML;
        document.getElementById("finishTime").value = this.cells[4].innerHTML;

    };
}

}
selectedRowToInput();

function editHTMLTableSelectedRow()
{
    var date = document.getElementById("date").value,
        location = document.getElementById("location").value,
        category = document.getElementById("category").value,
        distance = document.getElementById("distance").value,
        finishTime = document.getElementById("finishTime").value;
if(!checkEmptyInput())
{
        table.rows[rIndex].cells[0].innerHTML = date;
        table.rows[rIndex].cells[1].innerHTML = location;
        table.rows[rIndex].cells[2].innerHTML = category;
        table.rows[rIndex].cells[3].innerHTML = distance;
        table.rows[rIndex].cells[4].innerHTML = finishTime;
}


}

function removeSelectedRow()
{
table.deleteRow(rIndex);
// clear input text 
document.getElementById("date").value = "";
document.getElementById("location").value = "";
document.getElementById("category").value = "";
document.getElementById("distance").value = "";
document.getElementById("finishTime").value = "";
}
