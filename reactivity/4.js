const depsMap = new Map();

const track = (key) => {
  if (!depsMap.has(key)) {
    depsMap.set(key, new Set());
  }

  const deps = depsMap.get(key);

  deps.add(effect);
};

const trigger = (key) => {
  const deps = depsMap.get(key);

  if (!deps) {
    return;
  }

  deps.forEach((effect) => effect());
};

const warenkorb = {
  preis: 5,
  anzahl: 10,
};

let gesamt;

const effect = () => {
  gesamt = warenkorb.anzahl * warenkorb.preis;
};

track("anzahl");

effect();

console.log("Ergebnis von 5 * 10 = ", gesamt);

warenkorb.anzahl = 200;

trigger("anzahl");

console.log("Ergebnis von 5 * 200 = ", gesamt);
