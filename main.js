// // Get references to the two tables
// var table1 = document.getElementById("table1");
// var table2 = document.getElementById("table2");

// // Get references to the cells we want to copy from and to
// var sourceCell = table1.rows[1].cells[1];
// var targetCell = table2.rows[0].cells[0];

// // Get the value of the source cell and copy it to the target cell
// var value = sourceCell.innerHTML;
// targetCell.innerHTML = value;


//Success message on Button click
// Get the button element
var button = document.getElementById("submit");

// Add an event listener to the button
// button.addEventListener("click", function() {
//   // Execute the JavaScript code here
//   alert("Button clicked!");
// }); 
//  success message
var successMessage = document.getElementById("successMessage");
var closeButton = document.getElementById("closeButton");

button.addEventListener("click", function() {
  successMessage.style.display = "block";
});

closeButton.addEventListener("click", function() {
  successMessage.style.display = "none";
});


//  Backend calculation on table cells.

var pmt=document.getElementById("pmt");
var mta=document.getElementById("mta")

var sourceCell=pmt.rows[3].cells[2];
var targetCell=mta.rows[3].cells[2];

var value=sourceCell.innerHTML;
targetCell.innerHTML=value;

pmt.addEventListener("change",function(){
    document.write(value);
});