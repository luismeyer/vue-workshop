const Counter = Vue.defineComponent({
  setup() {
    const count = Vue.ref(0);

    const increaseCount = () => {
      count.value = count.value + 1;
    };

    return {
      count,
      increaseCount,
    };
  },

  template: `<button v-on:click="increaseCount">Click {{ count }}</button>`,
});

const App = Vue.defineComponent({
  components: {
    "my-counter": Counter,
  },

  data() {
    return {
      headline: "Meine App",
    };
  },

  template: `<div>
    <h1>{{ headline }}</h1>
    <my-counter />
  </div> 
  `,
});

const app = Vue.createApp(App);

app.mount("#app");
