//varibale to hold table body
var tableBod = d3.select("#tbodyid")

//Variable to hold data
var Data = data;

var filterButton = d3.select('#filter-btn');
filterButton.on('click', function() {
    //prevent page from refreshing
    d3.event.preventDefault()

    var date = d3.select("#datetime");
    var city = d3.select("#city");
    var state = d3.select("#state");
    var country = d3.select("#country");
    var shape = d3.select("#shape");

    //create variables to get and hold values from inputs
    var dateValue = date.property("value");
    var cityValue = city.property("value").toLowerCase().trim();
    var stateValue = state.property("value").toLowerCase().trim();
    var countryValue = country.property("value").toLowerCase().trim();
    var shapeValue = shape.property("value").toLowerCase().trim();
    //console.log()

    //Create multiple filter elements
    if (dateValue !== "") {
        Data = Data.filter(entry => entry.datetime === dateValue);
    }
    if (cityValue !== "") {
        Data = Data.filter(entry => entry.city === cityValue);
    }
    if (stateValue != "") {
        Data = Data.filter(entry => entry.state === stateValue);
    }
    if (countryValue !== "") {
        Data = Data.filter(entry => entry.country === cityValue);
    }
    if (shapeValue !== "") {
        Data = Data.filter(entry => entry.shape === shapeValue);
        //console.log(Data)
    }
    retrieveData();
});
function retrieveData() {
    tableBod.empty();
    Data.forEach((item) => {
        var row = tableBod.append("tr");
        Object.entries(item).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}
var filteredClear = d3.select("#clear-btn")
filteredClear.on("click", function () {
    location.reload();
});
retrieveData();
