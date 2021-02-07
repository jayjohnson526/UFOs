// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Define a function to create the UFO data table
function buildTable(data) {
    // Remove filters and clear existing
    tbody.html("");
    // Use a forEach loop to add UFO data to the table row by row
    data.forEach((dataRow) => {
        // Append a new row to the table body
        let row = tbody.append("tr");

        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}

// Define a function to filter the data
function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select('#datetime').property('value');
    let filteredData = tableData;

    // Check to see if a date was entered and filter the 
    // data using the date
    if (date) {
        // Apply 'filter' to the table data to only keep the
        // rows where the 'datetime' value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    }

    // Rebuild the table using the filtered data
    // @Note: If no date was entered, the filteredData will
    // just be the original tableData
    buildTable(filteredData);
}

// Tell D3 to 'listen' for a user click
d3.selectAll("filter-btn").on("click", handleClick);

// Build the final table when the page loads
buildTable(tableData);