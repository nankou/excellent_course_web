<template>
  <div id="container">
    <div id="evaluateOutside"
         :style="`background-image: url('${$addBaseURL(imgSrc)}');position: relative ;width: 100%;height:350px;background-repeat: no-repeat;background-position: 0px 0px;background-size:cover;`"
    >
      <div class="banner" style="padding-left: 21%">
        <div style="font-size: 38px;letter-spacing: 2px;color: #ffffff;padding-top: 6%">教学团队</div>
        <div style="font-size: 20px;letter-spacing: 2px;color: #ffffff;padding-top: 2%">TEACHING TEAM</div>
        <div style="width: 120px;height: 2px;background-color: #ffffff;border-radius: 2px 0px 0px 0px;margin-top: 3%"></div>
      </div>
    </div>
    <div class="outsideImg text-center" style="padding: 10% 2% 10%">
      <div style="font-size: 22px;margin-bottom: 3%;">{{detail.name}}</div>
      <img style="width: 400px;height: 400px;" v-if="detail.pdf != ''" :src="$addBaseURL(detail.picture)" class="img-fluid" alt="Responsive image">
      <div v-if="detail.pdf ==''">  暂无图片，请等待老师上传!</div>
    </div>
  </div>
</template>

<script>


  export default {
    name: "teamDetail",
    data () {
      return {
        imgSrc: '',
        detail: []
      }
    },
    mounted() {
      this.getImage();
      this.getRemark();
    },
    methods: {

    }
    }
</script>

<style scoped>

</style>
