<template>
  <div id="error-404">
    <div id="container">
      <img class="png" :src="require('@/assets/error/404.png')"/>
      <img class="png msg" v-if="$store.getters.lang==='zh-cn'" :src="require('@/assets/error/404_msg.png')"/>
      <p style="color: white;font-size: 26px;margin-bottom: 30px;line-height: 1.25;width: 100% "  v-if="$store.getters.lang!=='zh-cn'">Sorry, The page you visiting was not found or link error !</p>
      <p class="go-back-home">
        <a class="pointer" target="_blank"
           @click.stop="$router.push({name:'home'})">
          <img class="png" v-if="$store.getters.lang==='zh-cn'" :src="require('@/assets/error/404_to_index.png')"/>
          <span  v-if="$store.getters.lang!=='zh-cn'" style="width: 150px;height: 36px;line-height: 36px;text-align: center;padding: 10px 20px;font-size: 15px;background: white;border-radius: 36px">Back Homepage</span>
        </a>
      </p>
    </div>
    <div id="cloud" class="png"></div>
  </div>
</template>

<script>
export default {
  name: 'Error404'
}
</script>

<style scoped>
  #error-404 {
    height: 100%;
    background: url("~@/assets/error/error_bg.jpg") repeat-x scroll 0 0 #67ACE4;
  }

  #container {
    margin: 0 auto;
    padding-top: 8%;
    text-align: center;
    width: 560px;
  }

  #container img {
    border: medium none;
    margin-bottom: 50px;
  }

  #container .go-back-home {
    position: relative;
    z-index: 999;
  }

  #container .msg {
    margin-bottom: 65px;
  }

  #cloud {
    background: url("~@/assets/error/error_cloud.png") repeat-x scroll 0 0 transparent;
    bottom: 0;
    height: 170px;
    position: absolute;
    width: 100%;
  }
</style>
