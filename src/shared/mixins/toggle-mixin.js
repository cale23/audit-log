export default {
  data() {
    return {
      open: false,
    };
  },
  methods: {
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.open = false;
      }
    },
  },
  created() {
    window.addEventListener("click", this.close);
  },
  beforeDestroy() {
    window.removeEventListener("click", this.close);
  },
};
