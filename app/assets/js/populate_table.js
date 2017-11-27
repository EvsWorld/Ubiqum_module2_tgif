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
var tr, td, th, row, tbl, counter, i;
// append heading row to table
// The /**/ signifies that it accepts unlimited arguments.
//


// The /**/ signifies that it accepts unlimited arguments.
 function PopTable(/**/) {
   tbl = document.getElementById('senate-data');
   tbl.appendChild(document.createElement('tr'));
   var a = document.createElement('th');
   a.appendChild(document.createTextNode('Member Number'));
   tbl.appendChild(a);

   //Makes array from 'arguments'
   const argumentsArray = Array.from(arguments);
   // converts the given properties in the js object to more readable heading
   const prettyHeaders = argumentsArray.map((str) => {
     return str
          .toLowerCase()
          .split('_') // splits the words that are seperated by underscores.
          .map((word) => {
            console.log("First capital letter: "+word[0]);
            console.log("remain letters: "+ word.substr(1));
            return word[0].toUpperCase() + word.substr(1);
          })
          .join(' '); // Re-joins the elements (words) seperated by spaces.
   });
    // Builds headers
    for (i in arguments) {
      var b = document.createElement('th');
      b.appendChild(document.createTextNode(prettyHeaders[i]));
      tbl.appendChild(b);
    }

  // Populates table body
  counter = 0;
  data.results[0].members.forEach(memberRow => {
    tbl.appendChild(document.createElement('tr'));
      counter ++;
      var a = document.createElement('td'); // Will this work if it's const?
      a.appendChild(document.createTextNode(counter));
      tbl.appendChild(a);

      for (i in arguments) {
        var b = document.createElement('td');
        b.appendChild(document.createTextNode(memberRow[arguments[i]]));
        tbl.appendChild(b);
      }
    });
  }

  PopTable('first_name','middle_name','last_name','party', 'state', 'seniority', 'votes_with_party_pct','missed_votes');

  $('filterForm').change(function() {
      // do something
  }).click(function() {
      // do something
  });
      // Below is the manual version of the above loop

      // var b = document.createElement('td');
      // b.appendChild(document.createTextNode(memberRow[arguments[0]]));
      // tbl.appendChild(b);
      // var c = document.createElement('td');
      // c.appendChild(document.createTextNode(memberRow[arguments[1]]));
      // tbl.appendChild(c);
      // var d = document.createElement('td');
      // d.appendChild(document.createTextNode(memberRow[arguments[2]]));
      // tbl.appendChild(d);
      // var e = document.createElement('td');
      // e.appendChild(document.createTextNode(memberRow[arguments[3]]));
      // tbl.appendChild(e);
      // var f = document.createElement('td');
      // f.appendChild(document.createTextNode(memberRow[arguments[4]]));
      // tbl.appendChild(f);
      // var g = document.createElement('td');
      // g.appendChild(document.createTextNode(memberRow[arguments[5]]));
      // tbl.appendChild(g);
      // var h = document.createElement('td');
      // h.appendChild(document.createTextNode(memberRow[arguments[6]]));
      // tbl.appendChild(h);
      // Why doesnt this work then?
      // tbl.appendChild(document.createElement('td'));



// document.getElementById('senate-data').innerHTML += '<div>X</div>' + miNuevoTexto + ' ' + unNombre;
// document.getElementById('senate-data').innerHTML += '<div>X</div>' + miNuevoTexto + ' ' + unNombre;
//
// var miRow = '<tr><td>UNA ROW MAS LOCA</td></tr>';
