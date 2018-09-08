// from data.js
var tableData = data;

// SELECT BY DATE & BUILD TABLE
var submit = d3.select("#filter-btn");

var table = d3.select("#ufo-table");
var tbody = d3.select("tbody");
function buildTable(data) {
  data.forEach(function(ufoFinder) {
//  console.log(ufoFinder);
    var row = tbody.append("tr");
    Object.entries(ufoFinder).forEach(function([key, value]) {
      var cell = tbody.append("td");
      cell.text(value);
  });
});
};
table.attr("class", "table table-bordered");


submit.on("click", function() {
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");


    console.log(inputValue);
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue) 
        console.log(filteredData)

    var city = filteredData.map(sighting => sighting.city);
    var state = filteredData.map(sighting => sighting.state);
    var country = filteredData.map(sighting => sighting.country);
    var shape = filteredData.map(sighting => sighting.shape)
    var duration = filteredData.map(sighting => sighting.durationMinutes);
    var comments = filteredData.map(sighting => sighting.comments)

        buildTable(filteredData) 
  
});

/*
// SELECT BY COUNTRY 
var submit = d3.select("#filter-btn");
submit.on("click", function() {
    d3.event.preventDefault();
    var inputElement = d3.select("#country");
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    var filteredData = tableData.filter(sighting => sighting.country === inputValue);
    console.log(filteredData);

    buildTable(filteredData)
});

//SELECT BY STATE
var submit = d3.select("#filter-btn");
submit.on("click", function() {
    d3.event.preventDefault();
    var inputElement = d3.select("#state");
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    var filteredData = tableData.filter(sighting => sighting.state === inputValue);
    console.log(filteredData);

    buildTable(filteredData)
});

// SELECT BY CITY
var submit = d3.select("#filter-btn");
submit.on("click", function() {
    d3.event.preventDefault();
    var inputElement = d3.select("#city");
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    var filteredData = tableData.filter(sighting => sighting.city === inputValue);
    console.log(filteredData);

    buildTable(filteredData)
});

// SELECT BY SHAPE
var submit = d3.select("#filter-btn");
submit.on("click", function() {
    d3.event.preventDefault();
    var inputElement = d3.select("#shape");
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    var filteredData = tableData.filter(sighting => sighting.shape === inputValue);
    console.log(filteredData);

    buildTable(filteredData);
});
*/






