//var x = Math.floor((Math.random() * 40) + 1);
//document.getElementById("demo").innerHTML = x;

var cards = [];
var day = 1;

for (var i = 1; i <= 40; i++) {
   cards.push(i);
}

var myIndex = cards.indexOf(5);
if (myIndex !== -1) {
    cards.splice(myIndex, 1);
}

$( "#choose" ).click(function() {
  alert( "Handler for .click() called." );
});
