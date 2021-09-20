let activeEffect;

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

  if (activeEffect) {
    deps.add(activeEffect);
  }
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

const ref = (value) => {
  const r = {
    get value() {
      track(r, "value");
      return value;
    },

    set value(newValue) {
      value = newValue;
      trigger(r, "value");
    },
  };

  return r;
};

const effect = (fc) => {
  activeEffect = fc;
  activeEffect();
  activeEffect = null;
};

const warenkorb = reactive({
  preis: 5,
  anzahl: 10,
});

let gesamt;

let rabatt = 0;

let verkaufsPreis = ref(0);

effect(() => {
  verkaufsPreis.value = warenkorb.preis * 0.9;
});

effect(() => {
  gesamt = warenkorb.anzahl * verkaufsPreis.value;
});

console.log("Ergebnis von 5 * 0,9 * 10 = ", gesamt);

warenkorb.preis = 200;

console.log("Ergebnis von 200 * 0,9 * 10 = ", gesamt);
