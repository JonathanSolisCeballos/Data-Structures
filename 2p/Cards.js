(function() {
  class Card {
    //Cards: 0 = clubs, 1= diamonds, 2 = hearts, and 3 = spades(pica)
    printCard(n) {
      //get on which deck is the card and what N of card of the deck is.
      let palo = n > 52 ? Error("Number out of range") : Math.floor(n / 13);
      let carta = n - palo * 13;
      return [palo, carta];
    }

    printNumber(k, n) {
      //The opposite of the method that is up here. //Prints N of the card in a position from 0-51
      return k < 0 || k > 3 || n < 0 || n > 12
        ? Error("Number out of range")
        : k * 13 + n;
    }
  }
  let card1 = new Card();
  // for (let i = 0; i <= 51; i++) {
  console.log(card1.printCard(30));
  console.log(card1.printNumber(2, 4));
  // }
})();
