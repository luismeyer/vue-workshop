const deps = new Set();

const track = () => {
  deps.add(effect);
};

const trigger = () => {
  deps.forEach((effect) => effect());
};

const preis = 5;

let anzahl = 10;

let gesamt;

const effect = () => {
  gesamt = anzahl * preis;
};

track();

effect();

console.log("Ergebnis von 5 * 10 = ", gesamt);

anzahl = 200;

trigger();

console.log("Ergebnis von 5 * 200 = ", gesamt);
