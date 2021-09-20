const preis = 5;

let anzahl = 10;

let gesamt;

const effect = () => {
  gesamt = anzahl * preis;
};

effect();
console.log("Ergebnis von 5 * 10 = ", gesamt);

anzahl = 200;

effect();

console.log("Ergebnis von 5 * 200 = ", gesamt);
