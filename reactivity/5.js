const targetMap = new WeakMap();

const track = (target, key) => {
  if (!targetMap.has(target)) {
    targetMap.set(target, new Map());
  }

  const depsMap = targetMap.get(target);

  if (!depsMap.has(key)) {
    depsMap.set(key, new Set());
  }

  const deps = depsMap.get(key);

  deps.add(effect);
};

const trigger = (target, key) => {
  const depsMap = targetMap.get(target);

  if (!depsMap) {
    return;
  }

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

track(warenkorb, "anzahl");

effect();

console.log("Ergebnis von 5 * 10 = ", gesamt);

warenkorb.anzahl = 200;

trigger(warenkorb, "anzahl");

console.log("Ergebnis von 5 * 200 = ", gesamt);
