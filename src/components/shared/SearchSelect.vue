<template>
  <div class="search-select-wrapper">
    <div
      class="search-select-dd"
      @click.prevent="open = !open"
      :class="{ open: open, disabled: disabled }"
    >
      <select :disabled="disabled" id="items" v-model="ddSelect">
        <option value="0">No {{ type }} selected</option>
        <option
          v-if="currentSelects.length"
          :value="
            currentSelects.length == selectList.length
              ? currentSelects.length - 1
              : currentSelects.length
          "
          >{{
            currentSelects.length > 1
              ? currentSelects.length + " selected"
              : currentSelects[0].info
          }}</option
        >
        <option :value="selectList.length">All {{ type | plural }}</option>
      </select>
    </div>
    <div class="search-select-content" v-show="open && !disabled">
      <SearchBar
        v-if="type == 'user'"
        @searched="term => (searchTerm = term)"
        @reset="resetSearch"
        placeholder="Search for a user..."
      />
      <div class="search-wrapper" :class="{ searchable: type == 'user' }">
        <div class="search-tag-holder">
          <div v-if="selectList.length > 1">
            <div v-if="!selectFilter.length" class="no-results">
              No Results Found
            </div>
            <div v-show="!searchTerm.length" class="search-tag-item">
              <div class="holder" @click="addAllSelects">
                <input type="checkbox" v-model="allSelects" />
                <i
                  class="select-icon"
                  :class="allSelects ? 'selected-icon' : 'add-icon'"
                ></i>
                <span>Select All</span>
              </div>
            </div>
          </div>
          <div
            class="search-tag-item"
            v-for="(select, index) in selectFilter"
            :key="index"
          >
            <div class="holder" @click="addRemoveSelect(select)">
              <input
                :id="'select_' + select.id"
                type="checkbox"
                v-model="select.selected"
              />
              <i
                class="select-icon"
                :class="select.selected ? 'selected-icon' : 'add-icon'"
              ></i>
              <span>{{ select.info }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from "../shared/SearchBar";
import toggleMixin from "../../shared/mixins/toggle-mixin";

export default {
  props: {
    list: {
      required: true,
      type: Array
    },
    type: {
      required: true,
      type: String
    },
    disabled: {
      required: false,
      default: false,
      type: Boolean
    }
  },
  name: "SearchSelect",
  components: {
    SearchBar
  },
  data() {
    return {
      currentSelects: [],
      selectList: [],
      searchTerm: "",
      allSelectsFlag: false
    };
  },
  mixins: [toggleMixin],
  computed: {
    selectFilter() {
      return this.findItem(this.selectList, this.searchTerm);
    },
    allSelects: {
      get() {
        return this.currentSelects.length == this.selectList.length;
      },
      set(newValue) {
        false;
      }
    },
    ddSelect: {
      get() {
        return this.currentSelects.length;
      },
      set(newValue) {
        false;
      }
    },
    blocked: {
      get() {
        return this.disabled;
      },
      set(newValue) {
        false;
      }
    }
  },
  watch: {
    ddSelect(newValue, oldValue) {
      this.emitCount();
    },
    blocked(newValue, oldValue) {
      if (newValue == true) {
        this.addAllFalse();
        this.open = false;
      }
    }
  },
  methods: {
    resetSearch() {
      this.searchTerm = "";
    },
    findItem(selectList, searchTerm) {
      if (!searchTerm) {
        return selectList;
      } else {
        return selectList.filter(function(item) {
          return (
            item.info.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (item.media !== undefined
              ? item.media.toLowerCase().includes(searchTerm.toLowerCase())
              : false)
          );
        });
      }
    },
    addRemoveSelect(select) {
      select.selected = !select.selected;
      if (this.currentSelects.find(obj => obj.id == select.id) === undefined) {
        this.currentSelects.push({ id: select.id, info: select.info });
      } else {
        this.currentSelects = this.currentSelects.filter(function(obj) {
          return obj.id !== select.id;
        });
      }
      this.allSelectsFlag = false;
    },
    addAllTrue() {
      this.selectFilter.forEach(item => {
        this.currentSelects.push({ id: item.id, info: item.info });
        item.selected = true;
      });
    },
    addAllFalse() {
      this.selectFilter.forEach(item => {
        item.selected = false;
      });
      this.currentSelects = [];
    },
    addAllSelects() {
      this.currentSelects = [];
      this.allSelectsFlag = !this.allSelectsFlag;
      this.allSelectsFlag ? this.addAllTrue() : this.addAllFalse();
    },
    emitCount() {
      this.$emit("disable", this.currentSelects.length == 0);
    }
  },
  created() {
    this.emitCount();
  },
  updated() {
    this.emitCount();
  },
  mounted() {
    this.selectList = this.list;
    /* could use when vuex is set up */
    // this.currentSelects = this.selectList.filter(obj => {
    //   return obj.selected == true;
    // });
    // let anySelected = this.selectList.filter(e => {
    //   return e.selected;
    // });
    // this.allSelects = anySelected.length == this.selectList.length;
  }
};
</script>

<style lang="scss" scoped>
.search-select-wrapper {
  display: inline-block;
  max-width: 267px;
  width: 100%;
  margin-right: 15px;
  .search-select-dd {
    cursor: pointer;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      background: url("../../assets/images/icn-arrow-down.svg") no-repeat center
        center;
      top: 15px;
      right: 15px;
      width: 12px;
      height: 7px;
      opacity: 0.5;
    }
    &.open {
      &:after {
        background: url("../../assets/images/icn-arrow-up.svg") no-repeat center
          center;
      }
    }
    &.disabled {
      &:after {
        background: none;
      }
      select {
        background-color: #f4f4f4;
        border: 1px solid #cfcfcf;
      }
    }
    select {
      padding: 8px 40px 8px 12px;
      background-color: #ffffff;
      border: 1px solid #00a88d;
      border-radius: 4px;
      width: 100%;
      height: 38px;
      color: #3e4543;
      font-size: 14px;
      margin-bottom: 10px;
      position: relative;
      pointer-events: none;
      line-height: 16px;
    }
  }
  .search-select-content {
    position: absolute;
    width: 267px;
    padding: 12px 8px 0 12px;
    background-color: #ffffff;
    border: 1px solid #cfcfcf;
    border-radius: 4px;
    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.3);
    z-index: 1;
    .search-bar {
      margin-bottom: 15px;
      padding-right: 5px;
      width: 100%;
    }
  }
  .search-wrapper {
    display: block;
    height: 317px;
    overflow-y: scroll;
    overflow-x: hidden;
    &.searchable {
      height: 264px;
    }
    .search-tag-holder {
      position: relative;
      padding: 0;
      .search-tag-item {
        position: relative;
        input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
          left: 20px;
        }
        span {
          margin-left: 5px;
          font-size: 14px;
          max-width: 210px;
          display: inline-block;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          &:hover {
            color: #00a88d;
          }
        }
      }
      .no-results {
        color: #9b9b9b;
        font-size: 14px;
      }
    }
  }
}
.select-icon {
  background-color: #ffffff;
  border: 1px solid #9b9b9b;
  border-radius: 4px;
  width: 17px;
  height: 17px;
  display: inline-block;
  position: relative;
  &:before {
    position: absolute;
    top: 3px;
    left: 3px;
  }
  &.selected-icon {
    color: #fff;
    background-color: #00a88d;
    &:before {
      content: "";
      position: absolute;
      background: url("../../assets/images/icn-checkmark.svg");
      filter: invert(93%) sepia(77%) saturate(2%) hue-rotate(278deg)
        brightness(108%) contrast(101%);
      top: 3px;
      left: 2px;
      width: 12px;
      height: 9px;
    }
  }
}
.holder {
  display: flex;
  align-items: center;
  margin-bottom: 11px;
  user-select: none;
  cursor: pointer;
}

@media (max-width: 768px) {
  .search-select-wrapper {
    max-width: none;
  }
  .search-select-wrapper {
    .search-select-content {
      width: calc(100% - 40px);
    }
  }
}
</style>