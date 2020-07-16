<template>
  <div class="search-bar">
    <input
      @keyup="emitSearch()"
      v-model="searchTerm"
      type="text"
      :placeholder="placeholder"
    />
    <span v-if="searchTerm.length" @click.stop="reset()" class="reset"></span>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      required: true,
      default: "",
      type: String
    }
  },
  name: "SearchBar",
  data() {
    return {
      searchTerm: ""
    };
  },
  methods: {
    emitSearch() {
      this.$emit("searched", this.searchTerm);
    },
    reset() {
      this.$emit("reset");
      this.searchTerm = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.search-bar {
  position: relative;
  display: inline-block;
  input {
    background-color: #f4f4f4;
    border-radius: 4px;
    height: 38px;
    color: #9b9b9b;
    font-size: 14px;
    line-height: 18px;
    text-align: left;
    padding: 10px 20px 10px 35px;
    border: none;
    width: 100%;
  }
  &:before {
    content: "";
    position: absolute;
    background: url("../../assets/images/iconsearch.svg") no-repeat center
      center;
    top: 10px;
    left: 10px;
    width: 18px;
    height: 18px;
  }
}
</style>