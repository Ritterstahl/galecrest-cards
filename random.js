//var x = Math.floor((Math.random() * 40) + 1);
//document.getElementById("demo").innerHTML = x;

var cards = [];
var day = 1;
var card = 0;

for (var i = 1; i <= 40; i++) {
   cards.push(i);
}

function chooseCard() {
  var c = Math.floor((Math.random() * 40) + 1);
  var myIndex = cards.indexOf(c);
  if (myIndex !== -1) {
    cards.splice(myIndex, 1);
  }
}

$( "#choose" ).click(function() {
  card++;
  if (card <= 6) {
     console.log("card number "+card);
     chooseCard();
  } 
});
