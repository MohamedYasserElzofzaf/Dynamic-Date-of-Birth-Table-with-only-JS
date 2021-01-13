let months = [
    "jan",
    "feb",
    "march",
    "april",
    "may",
    "june",
    "july",
    "aug",
    "sept",
    "oct",
    "nov",
    "dec",
];

let table = "";
let rows = 2,
    columns = 3,
    dayColumn = " ",
    monthColumn = " ",
    yearColumn = " ";

//                  To make a caption
// table += "<tr>";
// table += "<td>" + "\t Date of Birth" + "</td>";
// table += "</tr>";

//--------------------------------------------------------
//     the first row ( Head row)
table += "<tr>";
table += "<td>" + "Day" + "</td>";
table += "<td>" + "Month" + "</td>";
table += "<td>" + "Year" + "</td>";
table += "</tr>";

//----------------------------------------------------------
//        the selection row
table += "<tr>";
for (let d = 1; d <= 30; d++) {
    dayColumn += "<option>" + d + "</option>";
}
const dayselect = "<select>" + dayColumn + "</select>";
for (let m = 0; m <= months.length; m++) {
    monthColumn += "<option>" + m + "</option>";
}
const monthselect = "<select>" + monthColumn + "</select>";
for (let y = 1950; y <= 2021; y++) {
    yearColumn += "<option>" + y + "</option>";
}
const yearselect = "<select>" + yearColumn + "</select>";
table += "<td>" + dayselect + "</td>";
table += "<td>" + monthselect + "</td>";
table += "<td>" + yearselect + "</td>";
table += "</tr>";

//--------------------------------------------------------
//         conect it with html file
document.write("<table border=2>" + table + "</table>");