'use sctrict';
// document.getElementById('senate-data').innerHTML = JSON.stringify(data,null,2);
//One initial thought was to start with a blank string (var finalContent = '';), then loop over the data object and concatonate onto the blank string until table is complete, then asign to table by calling document.getElementById('senate-data').innerHTML(finalContent);


// InnerHTML (string) gets modified here. Youre sending strings to the inner html (the children) fo the elements in the dom that have a 'senate-data' id tag.
// tableElement.innerHTML = '';
// tableElement.innerHTML += '<div>MY DIV</div>';
// tableElement.innerHTML += '<div>MY DIV</div>';
// tableElement.innerHTML += '<div>MY DIV</div>';
// tableElement.innerHTML += '<div>MY DIV</div>';
// Chrome reacts by rebuilding tableElement.
  // Delete the contents
  // Read in the new innerHTML and attempt to interpret the string as HTML.
  // After interpreting, build all the required elements
  // Add the new elements to tableElement
  // This is not best practice because all the elements in the dom must be deleted and rebuilt every time you assign tableElement.innerHTML to something.

// var divElement = document.createElement('div');
// divElement.textContent = 'MY NEW DIV CONTENT';

// NO NEED FOR Chrome to rebuild the tableElement HTMLElement. Instead it just adds the new HTMLElement (divElement) to its childNodes.
// tableElement.appendChild(divElement);



var thElement = document.createElement('th');
var tr, td, th, row, tbl, counter,
// append heading row to table
// var headElement = document.getElementById('tableHeadTag');
// The /**/ signifies that it accepts unlimited arguments.
//
// headElement.forEach(function(/**/) {
//   arguments.forEach(desiredHead) {}
// }



tbl = document.getElementById('senate-data');
// Append row for each member
counter = 0;

// var buildTable = (/**/) =

data.results[0].members.forEach(memberRow => {
  tbl.appendChild(document.createElement('tr'));
    counter ++;
    var a = document.createElement('td');
    a.appendChild(document.createTextNode(counter));
    tbl.appendChild(a);

    var b = document.createElement('td');
    b.appendChild(document.createTextNode(memberRow.first_name));
    tbl.appendChild(b);

    var c = document.createElement('td');
    c.appendChild(document.createTextNode(memberRow.middle_name));
    tbl.appendChild(c);

    var d = document.createElement('td');
    d.appendChild(document.createTextNode(memberRow.last_name));
    tbl.appendChild(d);

    var e = document.createElement('td');
    e.appendChild(document.createTextNode(memberRow.party));
    tbl.appendChild(e);

    var f = document.createElement('td');
    f.appendChild(document.createTextNode(memberRow.total_votes));
    tbl.appendChild(f);

    // Why doesnt this work then?
    // document.createElement('td').appendChild(document.createTextNode(data.results[0].members[0].last_name));
    // tbl.appendChild(document.createElement('td'));
});





// document.getElementById('senate-data').innerHTML += '<div>X</div>' + miNuevoTexto + ' ' + unNombre;
// document.getElementById('senate-data').innerHTML += '<div>X</div>' + miNuevoTexto + ' ' + unNombre;
//
// var miRow = '<tr><td>UNA ROW MAS LOCA</td></tr>';
