<template>
  <div class="app">
    <NavBar/>
    <ContentWrapper/>
    <AppFooter/>
  </div>
</template>

<script>
import NavBar from "./components/nav-bar";
import ContentWrapper from "./components/content-wrapper";
import AppFooter from "./components/footer";

export default {
  name: "app",
  components: {
    NavBar,
    ContentWrapper,
    AppFooter
  }
};
</script>

<style scoped>
.app {
  background-color: brown;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
