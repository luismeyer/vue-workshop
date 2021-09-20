const Counter = Vue.defineComponent({
  props: {
    label: String,
  },

  emits: ["update:headline"],

  setup(props, ctx) {
    const count = Vue.ref(0);

    const increaseCount = () => {
      count.value = count.value + 1;
    };

    const buttonLabel = Vue.computed(() => `${props.label}: ${count.value}`);

    Vue.watch(count, () => {
      if (count.value === 2) {
        ctx.emit("update:headline", "Ich wurde aktualisiert");
      }
    });

    return {
      count,
      buttonLabel,
      increaseCount,
    };
  },

  template: `<button v-on:click="increaseCount">{{ buttonLabel }}</button>`,
});

const App = Vue.defineComponent({
  components: {
    "my-counter": Counter,
  },

  data() {
    return {
      headline: "Meine App",
      label: "Das Label",
    };
  },

  template: `<div>
    <h1>{{ headline }}</h1>
    <my-counter
      v-model:headline="headline"
      v-bind:label="label"
    />
  </div> 
  `,
});

const app = Vue.createApp(App);

app.mount("#app");
