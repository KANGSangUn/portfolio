<template>
  <div class="main-layout">
      <header class="ks-header">
        <v-icon class="icon" name="align-justify" style="color:white"></v-icon>
      </header>
      <div class="ks-layout">
        <div id="ks-layout-sub-1">
          <div></div>
          <div style="background: green"></div>
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
      </div>
      <div class='ks-layout-2'>
          <div  class="ks-layout-2-1">
              <p>私は</p>
              <p>スキル</p>
              <p>プロジェクト</p>
              <p>夢</p>
          </div>
          <div class="ks-layout-2-2">
            <div class="ks-layout-2-2-1">
            </div>
            <div class="ks-layout-2-2-2">
             <p>名前：カン・サンウン</p>      
             <p>学校：ヨンジン専門大学</p>   
             <p>歳：23歳</p>   
             <p>専攻：プログラミング</p> 
             <p>趣味：旅行</p>   
             <p>kokokoko</p>              
            </div>
          </div>
      </div>
      <div class="ks-footer">

      </div>
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
#ks-layout-sub-1-1 .icon {
  margin-right: 5vh;
}
#ks-layout-sub-2 {
  background-size: cover;
  background-image: url("../assets/images/ksu_main_banner.jpg");
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
  border-top: 50px solid yellow;
  height: 100%;
  display: grid;
  grid-template-columns: 33.3% 66.6%;
}
.ks-layout-2-1 {
  padding: 5vw;
  background: rgb(9, 2, 24);
  color: white;
  font-weight: 100;
  font-size: 5vh;
  font-family: "Rounded Mplus 1c";
}
.ks-layout-2-1 p {
  padding-left: 2vh;
  border-left: 1px solid yellow;
}
.ks-layout-2-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 15vh;
  background: rgb(18, 117, 43);
}
.ks-layout-2-2-1 {
  background-image: url("../assets/images/main_profile.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
.ks-layout-2-2-2 {
  padding-left: 2vh;
  color: white;
  background: rgb(9, 2, 24);
  font-weight: 100;
  font-size: 3.5vh;
  border-right: 50px solid yellow;
  font-family: "Rounded Mplus 1c";
}
.ks-footer {
  width: 100%;
  height: 30%;
  background: rgb(9, 2, 24);
}
</style>

<script>
</script>