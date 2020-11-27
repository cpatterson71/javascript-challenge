//varibale to hold table body
var tableBod = d3.select("tbody")

//Variable to hold data
var Data = data;

//variable to hold filter data
var filteredData = d3.select("#filter-btn");
filteredData.on("click", function () {

    //prevent page from refreshing
    d3.event.preventDefault()

    var date = d3.select("#datetime");
    var city = d3.select("#city");
    var state = d3.select("#statename");
    var country = d3.select("#countryname");
    var shape = d3.select("#shapename");

    //create variables to get and hold values from inputs
    var dateValue = date.property("value")
    var cityValue = city.property("value").toLowerCase().trim();
    var stateValue = state.property("value").toLowerCase().trim();
    var countryValue = country.property("value").toLowerCase().trim();
    var shapeValue = shape.property("value").toLowerCase().trim();

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
        console.log(Data)
    }
});