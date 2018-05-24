<template>
  <div class="page-container" id="page">
    <md-app md-waterfall md-mode="fixed-last">
      <md-app-toolbar class="md-color">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
              <md-icon>menu</md-icon>
            </md-button>
  
            <span class="md-title">강상운의 포토폴리오</span>
          </div>
  
          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button">
            
            </md-button>
          </div>
        </div>

      </md-app-toolbar>
  
      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>
  
        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">自分</span>
          </md-list-item>
  
          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">プロジェクト</span>
          </md-list-item>
  
          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">夢</span>
          </md-list-item>
  
          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">INFO</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>
   
      <md-app-content class="main-layout">
        <div class="md-layout">
          <div class="md-layout-item" id="main-banner-img">

          </div>
          <div class="md-layout-item" id="main-banner-text">
            <p>KANG</p>
            <p>SANG</p>
            <p>UN</p>
          </div>
        </div>
        <div class="md-layout" id="sub-layout-1-banner">
          <div class='md-layout-item'>
            <p>私は</p>
          </div>
        </div>
        <div class="md-layout md-gutter md-alignment-center" id="sub-layout-1-item">
              <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                <div>아카루이데스</div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                <div>료코가 스키데스</div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                <div>아나타가 스키데스</div>
              </div>
        </div>
      </md-app-content>
    </md-app>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Londrina+Sketch");

.md-app {
  width: 100vw;
  height: 100vh;
  border: 1px solid rgba(#000, 0.12);
}
.md-color {
  background: transparent;
}
// Demo purposes only
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}

#main-banner-img {
  background: orange;
  background-image: url("../assets/images/ksu_main_banner.jpg");
  background-repeat: no-repeat;
  background-size: contain;
}
#main-banner-text {
  padding-right: 5vh;
  text-align: right;
  color: white;
  font-size: 20vh;
  font-family: "Londrina Sketch", cursive;
  background: orange;
}
#sub-layout-1-banner {
  height: 10vh;
  font-size: 5vh;
  text-align: center;
}
#sub-layout-1-item {
  height: 65vh;
}
#sub-layout-1-item .md-layout-item {
  height: 50vh;
  transition: 0.3s;
}
#sub-layout-1-item .md-layout-item div {
  background: orange;
  height: 100%;
}
@media only screen and (max-width: 600px) {
  .main-layout {
    margin: 0;
    padding: 0;
  }
  #main-banner-img {
    display: none;
  }
  #main-banner-text {
    background-image: url("../assets/images/ksu_main_banner.jpg");
    background-size: contain;
    background-repeat: no-repeat;
    font-size: 7vh;
  }
  #sub-layout-1-item .md-layout-item {
    padding: 0;
    margin: 0;
    height: 20vh;
  }
}
</style>

<script>
export default {
  name: "LastRowFixed",
  name: "LayoutHorizontalResponsive",
  data: () => ({
    menuVisible: false
  })
};
</script>