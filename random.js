var cards;
var voyage;
var card;
var numCards;

function init() {
   cards = [];
   voyage = 1;
   card = 0;
   numCards = 40;
   for (var i = 1; i <= numCards; i++) {
      cards.push(i);
   }
}

init();

const randomCard = cards => cards.splice((Math.random() * cards.length) | 0, 1);

function chooseCard() {  
  var c = randomCard(cards);
  $('#card'+(card)).append(c);
  $('#card'+(card)).css("background-color", "#09848e");
  console.log(c);
  console.log(cards); 
}

$( "#choose" ).click(function() {
  card++;
  if (card <= 18) {
    console.log("card number "+card);
    chooseCard();
  } 
  if (card % 6 == 0) {
     voyage ++;
  }
});

$( "#reset" ).click(function() {
  init();
  
  for (var i = 1; i <= 18; i++) {
    $('#card'+(i)).empty();
    $('#card'+(i)).css("background-color", "#efefef");
  }
});
