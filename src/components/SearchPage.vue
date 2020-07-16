<template>
  <div class="search-page">
    <div v-if="searchResults.length" class="no-results">
      <img
        src="../assets/images/img-audit-noresults.png"
        class="empty"
        alt="No results"
      />
      <h4>Nothing to Show</h4>
      <p>
        To see audit logs, choose the filters and/or perform a search from the
        above menu.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchPage",
  data() {
    return {
      searchResults: [1]
    };
  }
};
</script>

<style lang="scss" scoped>
.search-page {
  position: relative;
  height: 100%;
}
.no-results {
  width: 300px;
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0 20px;
  h4 {
    margin: 15px 0 5px 0;
  }
  p {
    margin: 0;
  }
}
</style>