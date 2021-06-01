<template>
  <div id="app">
    <div v-if="$route.meta.keepAlive" style="display: flex;min-height: 100vh" class="flex-column">
      <head-menu/>
      <router-view style="flex: 1 1 auto"/>
      <foot-menu />
    </div>
    <div v-else>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      text: ''
    }
  },
  mounted () {
    const loadingPage = document.getElementById('Loading')
    if (loadingPage) {
      document.body.removeChild(loadingPage)
    }

  }
}
</script>

<style lang="scss">
html{
  min-width: 1400px;
}
#app {

}
</style>
