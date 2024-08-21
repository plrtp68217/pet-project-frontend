<template>
  <div class="app">
    <div class="app_header">
      <Header/>
    </div>

    <div class="app_content">
      <router-view></router-view>
    </div>

    <div class="app_footer">
      <Footer/>
    </div>
    
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: { Header, Footer},
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  height: 100vh;
}

.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.app_content {
  flex: 1 0 auto;
}

.app_footer {
  flex: 0 0 auto;
}

</style>