# Vue.js Coding Workshop

Short Link für das Repo: https://bit.ly/vue-mit-luis

## Example

### Step 1

1. Einbindung des Vue.js scripts: `<script src='https://unpkg.com/vue@next'></script>`
2. Komponente mit einfachem Template definieren.
3. Komponente in das HTML mounten

### Step 2

1. Counter implementieren mit der Options API
2. Counter neu schreiben mit der Composition API

### Step 3

1. Button Label als Prop
2. Das Label als computed Property berechnen

### Step 4

1. Headline als Prop in den counter reichen
2. Custom event emitten

## Challenge

### Setup

Datei findet sich hier: [die Datei](./challenge/setup.html)

Lösungen mit Composition und Options API finden sich in [HIER](./challenge/composition.html) und [HIER](./challenge/options.html)

## Reactivity

### Step 1

1. Darstellung von UseCase
2. price, count => total

### Step 2

1. Definition des Effects
2. Effect wird zweimal aufgerufen

### Step 3

1. Erstellung der deps (new Set())
2. impl track Funktion
3. iml trigger Funktion

### Step 4

1. Daten in Objekt umwandeln (cart)
2. Erstellung depsMap (new Map())
3. Erweiterung von track (key)
4. Erweiterung von trigger (key)
5. Funktionsaufrufe anpassen

### Step 5

1. Erstellung von targetMap (new WeakMap())
2. Erweiterung von track (target)
3. Erweiterung von trigger (target)
4. Funktionsaufrufe anpassen

### Step 6

1. Impl reactive Funktion
2. Proxy get Trap (target, key, receiver) + track
3. Proxy set Trap (target, key, value, receiver) + trigger
4. Löschen von manuellem trigger

### Step 7

1. Manuellen effect() Aufruf entfernen
2. effect Hilfsfunktion
3. activeEffect Variable
4. Erweiterung von track() + null-check von active Effect

### Bonus

1. Impl ref funktion (value)
2. Erstellt Objekt r
3. get Accessor return value + track
4. set Accessor value = newValue + trigger
5. Beispiel Anpassen (kein cart sondern zwei Werte)
