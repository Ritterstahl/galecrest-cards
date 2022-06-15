//var x = Math.floor((Math.random() * 40) + 1);
//document.getElementById("demo").innerHTML = x;

var cards = [];
var voyage = 1;
var card = 0;

for (var i = 1; i <= 40; i++) {
   cards.push(i);
}

function chooseCard() {
  var c = Math.floor((Math.random() * 40) + 1);
  var i = cards.indexOf(c);
  if (i !== -1) {
    cards.splice(i, 1);
  }
  console.log(c);
  console.log(cards); 
}

$( "#choose" ).click(function() {
  card++;
  if (card <= 6) {
    console.log("card number "+card);
    chooseCard();
  } 
  if (card == 6) {
     voyage ++;
  }
});
