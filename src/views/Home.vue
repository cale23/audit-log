<template>
  <div class="container">
    <div class="content">
      <h2 style="padding: 50px;">
        For the purposes of this demo, please click on the Audit link in the
        sidebar, thank You!
      </h2>
    </div>
    <SideBar />
  </div>
</template>

<script>
import SideBar from "@/components/SideBar";

export default {
  name: "Home",
  components: {
    SideBar
  }
};
</script>