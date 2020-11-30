//varibale to hold table body
var tableBod = d3.select("#tbodyid")

// from data.js
var tableData = data;

// Copy data into rows on HTML 
function appendTable(data) {
    d3.select("tbody").html("");
    data.forEach((selection) => {
        var tableRow = d3.select("tbody").append("tr");
        Object.values(selection).forEach((value) => {
            var tableData = tableRow.append("td");
            tableData.text(value);
        });
    })
}
appendTable(tableData);

d3.select("#filter-btn").on("click", filterDate);

// Set Filter button function to filter by date
function filterDate() {
    d3.event.preventDefault();
    var date = d3.select("#datetime").property("value");
    var filterDateTime = tableData;
    if (date) {
        filterDateTime = filterDateTime.filter((row) => row.datetime === date);
    }
appendTable(filterDateTime);
};
var clearButton = d3.select("#clear-btn");
clearButton.on("click", function(){
    location.reload();
});