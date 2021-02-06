// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tobdy");

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