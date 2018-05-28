<template>
  <div class="main-layout">
      <header class="ks-header">
        <v-icon class="icon" name="align-justify" style="color:white"></v-icon>
      </header>
      <main>
     <!-- section 1 -->
      <section class="ks-layout"> 
        <div id="ks-layout-sub-1">
          <div></div>
          <div id="ks-layout-sub-1-2">
            Hello!
          </div>
          <div id="ks-layout-sub-1-1">
            <v-icon class="icon" name="instagram"></v-icon>
            <v-icon class="icon" name="facebook"></v-icon>
            <v-icon class="icon" name="github"></v-icon>
            <v-icon class="icon" name="mail"></v-icon>
          </div>
        </div>
        <div id="ks-layout-sub-2">
        </div>
        <div id="ks-layout-sub-3">
          <div id="ks-layout-sub-3-1">
              <div>
                <p>わたしは</p>
                <p>幸せを作る</p>
                <p>エンジニア</p>
                <p>カン・サンウンです</p>
              </div>
          </div>
        </div>
      </section>
      <!-- section 2 -->
      <section class='ks-layout-2'>
          <div  class="ks-layout-2-1">
              <p>私は</p>
              <p>スキル</p>
              <p>プロジェクト</p>
              <p>夢</p>
          </div>
          <div class="ks-layout-2-2">
            <div class="ks-layout-2-2-1">
              <div>
                 <span>KANG SANG UN</span>
                <p>
                <img src="../assets/images/ksu_profile_image.png">
                </p>  
                <p>IT engineer / Web developer</p>
                <p>Korea</p>
              </div>  
            </div>
          </div>
      </section>
      </main>
      <footer class="ks-footer">

      </footer>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:100");
@import url("https://fonts.googleapis.com/earlyaccess/roundedmplus1c.css");
.icon {
  width: 40px;
  color: rgb(18, 117, 43);
}

.main-layout {
  width: 100%;
  height: 100vh;
}
.ks-header {
  padding: 2vh;
  width: 100%;
  position: fixed;
  background: transparent;
  color: white;
  font-size: 5vh;
  text-align: center;
}
.ks-header .icon {
  float: left;
}
.ks-layout {
  background: rgb(9, 2, 24);
  display: grid;
  height: 100vh;
  grid-template-columns: repeat(3, 33.3333%);
}
#ks-layout-sub-1 {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  height: inherit;
}
#ks-layout-sub-1-1 {
  margin: auto;
}
#ks-layout-sub-1-2 {
  width: 0%;
  font-size: 3rem;
  text-align: center;
  color: transparent;
  padding-top: 9rem;
  background: rgb(18, 117, 43);
  animation: event 1.5s;
  animation-fill-mode: both;
}
@keyframes event {
  0% {
    width: 0%;
    color: transparent;
  }
  30% {
    width: 0%;
    color: transparent;
  }
  100% {
    width: 100%;
    color: white;
  }
}
#ks-layout-sub-1-1 .icon {
  margin-right: 5vh;
}
#ks-layout-sub-2 {
  height: 0%;
  background-size: cover;
  background-image: url("../assets/images/ksu_main_banner.jpg");
  animation: high 1.5s;
  animation-fill-mode: both;
}
@keyframes high {
  0% {
    height: 0%;
  }
  30% {
    height: 0%;
  }
  100% {
    height: 100%;
  }
}
#ks-layout-sub-3 {
  display: table;
  height: inherit;
}
#ks-layout-sub-3-1 {
  padding: 8vh;
  display: table-cell;
  vertical-align: middle;
}
#ks-layout-sub-3-1 div {
  font-weight: 100;
  font-size: 5vh;
  font-family: "Rounded Mplus 1c";
  color: white;
  width: 100%;
  height: 50%;
}
.ks-layout-2 {
  border-top: 20px solid rgb(231, 231, 7);
  height: 100vh;
  display: grid;
  grid-template-columns: 33.3% 66.6%;
}
.ks-layout-2-1 {
  padding: 5vw;
  background: rgb(9, 2, 24);
  color: white;
  font-weight: 300;
  font-size: 5vh;
  font-family: "Rounded Mplus 1c";
}
.ks-layout-2-1 p {
  padding-left: 2vh;
  transition: 0.5s;
  border-left: 1px solid rgb(231, 231, 7);
}
.ks-layout-2-1 p:hover {
  background: rgb(231, 231, 7);
  color: rgb(9, 2, 24);
}
.ks-layout-2-2 {
  padding: 15vh;
  background: rgb(18, 117, 43);
}
.ks-layout-2-2-1 {
  margin: auto;
  background: rgb(9, 2, 24);
  width: 100%;
  display: table;
  height: 100%;
}
.ks-layout-2-2-1 div {
  text-align: center;
  height: inherit;
  position: relative;
  display: table-cell;
  vertical-align: middle;
}
.ks-layout-2-2-1 p {
  font-weight: 300;
  font-size: 1.5rem;
  font-family: "Rounded Mplus 1c";
  color: rgb(241, 241, 63);
}
.ks-layout-2-2-1 div span {
  font-size: 3.3rem;
  font-family: "Rounded Mplus 1c";
  color: rgb(231, 231, 7);
}
.ks-layout-2-2-1 div img {
  padding: 4rem;

  border-radius: 50%;
  background: rgb(231, 231, 7);
}
.ks-layout-2-2-2 {
  padding-left: 2vh;
  color: white;
  background: rgb(9, 2, 24);
  font-weight: 100;
  font-size: 3.5vh;
  border-right: 50px solid rgb(231, 231, 7);
  font-family: "Rounded Mplus 1c";
}
.ks-footer {
  border-top: rgb(231, 231, 7) solid 20px;
  width: 100%;
  height: 30%;
  background: rgb(9, 2, 24);
}
</style>
  
<script>
export default {};
</script>