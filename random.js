let cards;
let cardIndex;
let selectedCardsInOrder;

/// Given a length, build an array of that length by calling `func` with the
/// index of that element in the array
const buildArray = (length, func) => Array.from({ length: length }, (_, i) => func(i));

// Select a random card from `cards`, remove it from the `cards`, and return it
const pickCard = () => {
  const i = Math.floor(Math.random() * cards.length);

  // Swap this card with the card at the front, then shift
  let card = cards[i];
  cards[i] = cards[0];
  cards.shift();

  return card
};

// Construct and sort a voyage of `length` cards
const makeVoyage = (length) => {
  const voyage = buildArray(length, () => pickCard());
  voyage.sort((lhs, rhs) => lhs - rhs);

  return voyage
};

/// Reset the state of the card picker
const init = () => {
  cards = buildArray(40, i => i + 1);
  cardIndex = 0;

  // Pre-compute all the card selections and pre-sort them
  const voyages = buildArray(3, () => makeVoyage(6));
  selectedCardsInOrder = voyages.flat();
};

// Add event handlers
document.getElementById("choose").addEventListener("click", () => {
  const card = selectedCardsInOrder[cardIndex];

  const cardElement = document.getElementById(`card${cardIndex + 1}`);
  cardElement.innerText = card;
  cardElement.style.backgroundColor = "#09848e";

  cardIndex += 1;
});

document.getElementById("reset").addEventListener("click", () => {
  document.querySelectorAll(".card").forEach(element => {
    element.innerText = "";
    element.style.backgroundColor = "#efefef";
  });

  init();
});

init();
