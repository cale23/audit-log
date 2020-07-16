<template>
  <div class="container">
    <div class="content">
      <MainHeader />
      <SearchPage />
    </div>
    <SideBar />
  </div>
</template>

<script>
// @ is an alias to /src
import SideBar from "@/components/SideBar";
import MainHeader from "@/components/MainHeader";
import SearchPage from "@/components/SearchPage";

export default {
  name: "AuditLog",
  components: {
    SideBar,
    MainHeader,
    SearchPage
  }
};
</script>