<template>
  <div class="main-header">
    <div class="top">
      <SearchBar placeholder="Search for a word or phrase" />
      <UserDropdown user-type="administrator" />
    </div>
    <div class="bottom">
      <SearchSelect
        @disable="res => (userSelected = res)"
        :list="users"
        type="user"
      />
      <SearchSelect :disabled="userSelected" :list="actions" type="action" />
      <SearchFilter placeholder="Filter results..." />
    </div>
  </div>
</template>

<script>
import SearchBar from "./shared/SearchBar";
import UserDropdown from "./shared/UserDropdown";
import SearchSelect from "./shared/SearchSelect";
import SearchFilter from "./shared/SearchFilter";
import users from "../data/users";
import actions from "../data/actions";

export default {
  name: "MainHeader",
  components: {
    SearchBar,
    UserDropdown,
    SearchSelect,
    SearchFilter
  },
  data() {
    return {
      users,
      actions,
      userSelected: false,
      componentKey: 0
    };
  }
};
</script>

<style lang="scss" scoped>
.main-header {
  z-index: 1;
  .top,
  .bottom {
    background-color: #ffffff;
    padding: 11px 20px;
    height: 60px;
    border-bottom: 1px solid #cfcfcf;
  }
  .top {
    position: relative;
    .search-bar {
      width: 100%;
      max-width: 515px;
    }
  }
}

@media (max-width: 1248px) {
  .main-header {
    .bottom {
      height: auto;
    }
  }
}
@media (max-width: 768px) {
  .main-header {
    .top {
      .search-bar {
        max-width: none;
      }
    }
  }
}
@media (max-width: 876px) {
  .main-header {
    .top {
      .search-bar {
        width: calc(100% - 70px);
      }
    }
  }
}
</style>