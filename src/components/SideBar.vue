<template>
  <div class="sidebar">
    <div class="sidebar-2-header" :class="{ show: show }">
      <router-link to="/" exact
        ><img src="../assets/images/logo.png" class="logo" alt="Home"
      /></router-link>
      <div
        class="hamburger"
        :class="{ change: show }"
        @click.prevent="toggleSidebar"
      >
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
    </div>
    <ul class="side-nav" :class="{ show: show }">
      <SideNavItem
        v-for="(item, index) in navItems"
        :key="index"
        :item="item"
      />
    </ul>
  </div>
</template>

<script>
import SideNavItem from "./shared/SideNavItem";

export default {
  name: "SideBar",
  data() {
    return {
      show: false,
      navItems: [
        {
          title: "audit",
          link: "audit"
        }
      ]
    };
  },
  components: {
    SideNavItem
  },
  methods: {
    toggleSidebar(e) {
      this.show = !this.show;
    }
  }
};
</script>

<style lang="scss">
.sidebar {
  background-color: #e1e7e9;
  padding: 20px;
}
.logo {
  display: block;
  width: auto;
  height: auto;
}
.side-nav {
  list-style-type: none;
  padding-left: 0;
  margin-top: 32px;
  font-weight: bold;
  transition: 0.1s;
}
.side-nav-item {
  font-size: 14px;
  line-height: 18px;
  text-align: left;
  padding: 15px 27px;
  position: relative;
  // margin-bottom: 20px;
  a {
    text-transform: capitalize;
    &:before {
      content: "";
      position: absolute;
      top: 15px;
      left: 0;
      width: 15px;
      height: 18px;
    }
    &:hover:before {
      filter: invert(52%) sepia(90%) saturate(2951%) hue-rotate(137deg)
        brightness(94%) contrast(104%);
    }
    &.audit:before {
      background: url("../assets/images/icn-audit.svg");
    }
  }
}
.hamburger {
  display: none;
  background: #cfcfcf;
  padding: 21px;
  position: absolute;
  cursor: pointer;
  right: 0;
  top: 0;
}
.bar1,
.bar2,
.bar3 {
  width: 25px;
  height: 3px;
  background-color: #00a88d;
  margin: 3px 0;
}
.change .bar1 {
  -webkit-transform: rotate(-45deg) translate(-4px, 4px);
  transform: rotate(-45deg) translate(-4px, 4px);
}
.change .bar2 {
  opacity: 0;
}
.change .bar3 {
  -webkit-transform: rotate(45deg) translate(-4px, -4px);
  transform: rotate(45deg) translate(-4px, -4px);
}
.router-link-active {
  color: #00a88d;
  &:before {
    filter: invert(52%) sepia(90%) saturate(2951%) hue-rotate(137deg)
      brightness(94%) contrast(104%);
  }
}

@media (max-width: 767px) {
  .sidebar {
    flex: 0;
    padding: 0;
  }
  .sidebar-2-header {
    width: 100%;
    height: 64px;
    padding: 20px;
    &.show {
      border-bottom: 1px solid #cfcfcf;
    }
  }
  .logo {
    display: inline-block;
  }
  .side-nav {
    display: none;
    padding: 0 20px;
    margin: 0 0 10px;
    div:not(:last-child) {
      li {
        border-bottom: 1px solid #cfcfcf;
      }
    }
    .side-nav-item {
      a {
        position: relative;
        &:before {
          top: 0;
          left: -25px;
        }
      }
    }
    &.show {
      display: block;
    }
  }
  .hamburger {
    display: block;
    width: 64px;
    height: 64px;
  }
}
</style>