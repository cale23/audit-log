<template>
  <div class="search-filter">
    <div class="filter-input">
      <input v-model="filterTerm" type="text" :placeholder="placeholder" />
      <span v-if="filterTerm.length" @click="reset()" class="reset"></span>
    </div>
    <a
      href="javascript:void(0)"
      class="filter-btn"
      :class="{
        disabled: filterTerm.length == 0,
        active: filterTerm.length != 0
      }"
    >
      <span>Search Now</span>
    </a>
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
  name: "SearchFilter",
  data() {
    return {
      filterTerm: ""
    };
  },
  methods: {
    reset() {
      this.filterTerm = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.search-filter {
  display: inline-flex;
  .filter-input {
    position: relative;
    display: inline-block;
    margin-right: 15px;
  }
  input {
    background-color: #ffffff;
    border-radius: 4px;
    height: 38px;
    color: #9b9b9b;
    width: 267px;
    font-size: 14px;
    line-height: 18px;
    text-align: left;
    padding: 10px 20px 10px 10px;
    border: 1px solid #9b9b9b;
  }
}
.filter-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9b9b9b;
  font-size: 14px;
  background-color: #cfcfcf;
  border-radius: 4px;
  width: 113px;
  height: 38px;
  font-weight: bold;
  span {
    bottom: 1px;
    position: relative;
  }
  &.active {
    background-color: #00b290;
    color: #ffffff;
    &:hover {
      background-color: #67c8c7;
    }
  }
}

@media (max-width: 767px) {
  .search-filter {
    max-width: none;
    display: flex;
  }
  .search-filter .filter-input {
    width: 82%;
    input {
      width: 100%;
    }
  }
}
@media (max-width: 480px) {
  .search-filter {
    max-width: none;
    display: block;
  }
  .search-filter .filter-input {
    margin: 0 0 10px 0;
    display: block;
    width: 100%;
    input {
      width: 100%;
    }
  }
}
</style>