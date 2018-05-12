<template>
  <div class="main-page-view">
      <div class="main-page-view-sub-1">
       <div class="menu-contain">a</div>
       <div class="menu-contain">b</div>
       <div class="menu-contain">c</div>
       <div class="menu-contain">d</div>
       <div class="menu-contain">e</div>
      </div>
      <div>
        Hello World!
      </div>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Nanum+Gothic");
.main-page-view {
  height: 100vh;
  display: grid;
  grid-template-columns: 0.1fr 0.9fr;
}

.main-page-view > div:nth-child(1) {
  display: grid;
  grid-template-rows: repeat(5, 20%);
}
.menu-contain {
  background: blue;
  width: 100%;
  transition: width 0.5s;
}
.menu-contain:hover {
  width: 200%;
}
.menu-contain:hover ~ .menu-contain {
  width: 50%;
}

.main-page-view > div:nth-child(2) {
  padding: 10%;
  text-align: right;
  font-family: "Nanum Gothic", sans-serif;
  font-size: 7vw;
}
</style>
