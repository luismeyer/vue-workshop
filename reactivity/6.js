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

const reactive = (target) => {
  return new Proxy(target, {
    get: (target, key, receiver) => {
      track(target, key);

      return Reflect.get(target, key, receiver);
    },

    set: (target, key, value, receiver) => {
      const oldValue = target[key];

      const success = Reflect.set(target, key, value, receiver);

      if (success && oldValue !== value) {
        trigger(target, key);
      }

      return success;
    },
  });
};

const warenkorb = reactive({
  preis: 5,
  anzahl: 10,
});

let gesamt;

const effect = () => {
  gesamt = warenkorb.anzahl * warenkorb.preis;
};

effect();

console.log("Ergebnis von 5 * 10 = ", gesamt);

warenkorb.anzahl = 200;

console.log("Ergebnis von 5 * 200 = ", gesamt);
