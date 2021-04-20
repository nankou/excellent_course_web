<template>
  <div>
    <div id="homeworkDetails"
    >
      <div class="banner" style="padding-left: 21%">
        <div style="font-size: 38px;letter-spacing: 2px;color: #ffffff;padding-top: 6%">作业提交</div>
        <div style="font-size: 20px;letter-spacing: 2px;color: #ffffff;padding-top: 2%">JOB SUBMISSION</div>
        <div style="width: 120px;height: 2px;background-color: #ffffff;border-radius: 2px 0px 0px 0px;margin-top: 3%"></div>
      </div>
    </div>
    <div class="container" style="padding: 5% 7% 5%;font-size: 18px;" >
      <div class="title" style="display: flex">
        <span style="line-height: 20px">题目：</span>
        <div class="content" style="">
          <div style="line-height: 20px">{{$getSimpleHtml(this.$route.query.hwQuestion)}}</div>
        </div>
      </div>
      <div class="time" style="line-height: 25px;padding-top: 5%">
        <span>截止时间： </span>
        <span style="color: #f59f38">{{this.$route.query.endTime}}</span>
      </div>
     <div class="require" style="line-height: 25px;padding-top: 5%">
       <span>作业要求： </span>
       <span>{{this.$route.query.hwRequire}}</span>
     </div>
      <div class="require" style="line-height: 25px;padding-top: 5%;color: #cc312d" v-if="state">
        <span>我的答案： </span>
        <span>{{$getSimpleHtml(this.$route.query.subAnswer)}}</span>
      </div>
      <div class="require" style="line-height: 25px;padding-top: 5%;color: #cc312d" v-if="state">
        <span>提交时间： </span>
        <span>{{this.$route.query.subTime}}</span>
      </div>
      <div class="text-center" style="padding-top: 5%" v-if="!state">
        <custom-editor v-model="answer"></custom-editor>
      </div>
      <div class="row justify-content-md-end" v-if="!state">
        <button @click="submit(answer)" type="button" class="btn btn-primary" style="border-radius: 20px;width: 130px;margin-top:25px;margin-right: 2%">提交答案</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'homeworkDetails',
  data () {
    return {
      imgSrc: '',
      homeworkList:[],
      answer:'',
      successSave: false,
      state: false // 是否答过题
    }
  },
  mounted() {
    if(this.$route.query.subTime!= null){
      this.state = true
    }
    console.log(this.state)
  },
  methods: {
    // 获取详情
    // getUserByPage(){
    //   const params = {
    //     current: '1',
    //     size : '1',
    //     index: this.$route.query.index
    //   }
    //   console.log(this.$route.query.index)
    //   homeworkListGetApi(params).then(result => {
    //     console.log(result.data.records)
    //     this.homeworkList = result.data.records
    //   })
    // },
    // 提交作业
    submit(answer){
      this.$successMsg('提交成功')
       this.$router.push('/homework')
    }
  }
}
</script>

<style lang="scss">
#homeworkDetails{
  background-image: url('../../assets/img/back1 (8).png');
  position: relative ;
  width: 100%;
  height:350px;
  background-repeat: no-repeat;
  background-position: 0px 0px;
  background-size:cover;
}
</style>
