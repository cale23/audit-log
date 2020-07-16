<template>
  <div>
    <li class="side-nav-item" :class="item.title">
      <router-link :to="`/${item.link}`" :class="item.title" exact>{{
        item.title
      }}</router-link>
    </li>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      required: true,
      type: Object
    }
  },
  name: "SideNavItem"
};
</script>

<style lang="scss" scoped>
</style>