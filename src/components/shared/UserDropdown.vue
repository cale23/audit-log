<template>
  <div>
    <div
      class="user-dropdown"
      @click.prevent="open = !open"
      :class="{ open: open }"
    >
      <div class="user-toggle">
        <span>{{ "John Doe" | initials }}</span>
      </div>
    </div>
    <div v-show="open" class="user-settings-dropdown">
      <div class="user-info">
        <div class="user-type">{{ userType | uppercase }}</div>
        <div class="user-email">john.doe@jatheon.com</div>
        <div class="user-company">Jatheon Technologies</div>
      </div>
      <div class="user-settings">
        <ul>
          <li><a href="javascript:void(0)">Account Settings</a></li>
          <li><a href="javascript:void(0)">Company Settings</a></li>
          <li><a href="javascript:void(0)">Help Center</a></li>
          <li><a href="javascript:void(0)">Keyboard Shortcuts</a></li>
          <li><a href="javascript:void(0)">Log Out</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import toggleMixin from "../../shared/mixins/toggle-mixin";

export default {
  props: {
    userType: {
      required: true,
      type: String
    }
  },
  name: "UserDropdown",
  mixins: [toggleMixin]
};
</script>

<style lang="scss" scoped>
.user-dropdown {
  position: absolute;
  top: 14px;
  right: 20px;
  padding-right: 18px;
  &:hover {
    cursor: pointer;
  }
  &:after {
    content: "";
    position: absolute;
    background: url("../../assets/images/icn-arrow-down.svg") no-repeat center
      center;
    top: 13px;
    right: 0;
    width: 12px;
    height: 7px;
    opacity: 0.5;
  }
  .user-toggle {
    background-color: #f4f4f4;
    border-radius: 100%;
    width: 32px;
    height: 32px;
    font-size: 12px;
    line-height: 28px;
    text-align: center;
    color: #9b9b9b;
    font-weight: bold;
    span {
      color: #9b9b9b;
    }
  }
  &.open {
    &:after {
      background: url("../../assets/images/icn-arrow-up.svg") no-repeat center
        center;
    }
    .user-toggle {
      background-color: #c3f0e9;
      span {
        color: #00a88d;
      }
    }
  }
}
.user-settings-dropdown {
  z-index: 2;
  color: #3e4543;
  background-color: #ffffff;
  border: 1px solid #cfcfcf;
  border-radius: 4px;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.3);
  width: 230px;
  min-height: 236px;
  position: absolute;
  right: 20px;
  top: 55px;
  padding: 10px 12px;
  text-align: left;
  font-size: 14px;
  .user-info {
    & > div {
      margin-bottom: 5px;
    }
    border-bottom: 1px solid #cfcfcf;
    padding-bottom: 5px;
  }
  .user-type {
    color: #9b9b9b;
    font-size: 11px;
    letter-spacing: 0.3px;
    font-weight: bold;
  }
  .user-email {
    font-weight: bold;
  }
  .user-settings {
    ul {
      list-style-type: none;
      padding: 0;
      margin: 10px 0 0;
      li:not(:last-child) {
        margin-bottom: 10px;
      }
    }
  }
}
</style>