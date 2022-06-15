//var x = Math.floor((Math.random() * 40) + 1);
//document.getElementById("demo").innerHTML = x;

var cards = [];
var voyage = 1;
var card = 0;
var numCards = 40;

for (var i = 1; i <= numCards; i++) {
   cards.push(i);
}

const randomCard = cards => cards.splice((Math.random() * cards.length) | 0, 1);

function chooseCard() {  
  var c = randomCard(cards);
  $('#card'+(card)).append(c);
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
