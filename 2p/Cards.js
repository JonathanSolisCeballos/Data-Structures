(function () {
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
        return k < 0 || k > 3 || n < 0 || n > 12 ?
          Error("Number out of range") :
          k * 13 + n;
      }
      onePair() { //Get the probability of getting a pair in poker
        //Combinación sin repetición -> C(n,r) = n!/(n-r)!*r!
        function factorial(n) {
          return n <= 1 ? 1 : n * factorial(n - 1);
        }
        // total de cartas 52
        //13 tipos 4 iguales
        // 5 cartas por mano

        // parejas
        // parejas * 3 cartas 
        //podria ser  A y A y las demás
        // (13 de 1) (4 de 2)


        //formula = n! -/ (((n-k)!)*(k!))

        //posibilidades con pares 
        //primer  n=13 k=1 
        let primer = (factorial(13) / (factorial(13 - 1) * (factorial(1))));
        // segundo n=4 k=2
        let seg = (factorial(4) / (factorial(4 - 2) * (factorial(2))))
        //n=12 k=3
        let tercer = (factorial(12) / (factorial(12 - 3) * (factorial(3))))
        //n=4 K=1
        let cuartoFir = (factorial(4) / (factorial(4 - 1) * (factorial(1))))
        let cuatro = Math.pow(cuartoFir, 3);

        let num_posibles = (factorial(52) / (factorial(52 - 5) * (factorial(5))))
        let operacion = primer * seg * tercer * cuatro;
        let prob = operacion / num_posibles;

        //probabilidad se define por  P= casos favorables/casos posibles
        return (prob);
        }
      }
      let card1 = new Card();
      // for (let i = 0; i <= 51; i++) {
      /*   console.log(card1.printCard(30));
        console.log(card1.printNumber(2, 4)); */
      console.log(card1.onePair());
      // }
    })();