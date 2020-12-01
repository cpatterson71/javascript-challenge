//varibale to hold table body
var tableBod = d3.select("#tbodyid")

// from data.js
var tableData = data;

// Copy data into rows on HTML upon loading
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

//create the event for the filter button
d3.select("#filter-btn").on("click", filterDate);

// Set Filter button function to filter by date, then for other items
function filterDate() {
    d3.event.preventDefault();
    var date = d3.select("#datetime").property("value");
    var city = d3.select("#city").property("value");
    var state = d3.select("#state").property("value");
    var country = d3.select("#country").property("value");
    var shape = d3.select("#shape").property("value");
    var filterDateTime = tableData;
    if (date) {
        filterDateTime = filterDateTime.filter((row) => row.datetime === date);
    }
    if (city){
        filterDateTime = filterDateTime.filter((row) => row.city === city);
    }
    if (state){
        filterDateTime = filterDateTime.filter((row) => row.state === state);
    }
    if (country){
        filterDateTime = filterDateTime.filter((row) => row.country === country);
    }
    if (shape){
        filterDateTime = filterDateTime.filter((row) => row.shape === shape);
    }
appendTable(filterDateTime);
};

//clear button to reload data
var clearButton = d3.select("#clear-btn");
clearButton.on("click", function(){
    location.reload();
});