<template>
  <div>
    <div id="interaction"
    >
      <div class="banner" style="padding-left: 21%">
        <div style="font-size: 38px;letter-spacing: 2px;color: #ffffff;padding-top: 6%">师生互动</div>
        <div style="font-size: 20px;letter-spacing: 2px;color: #ffffff;padding-top: 2%">INTERACTION BETWEEN TEACHERS AND STUDENTS</div>
        <div style="width: 120px;height: 2px;background-color: #ffffff;border-radius: 2px 0px 0px 0px;margin-top: 3%"></div>
      </div>
    </div>
    <div class="container">
      <div class="row justify-content-md-center" v-show="successSave">
        <div class="col-5 alert alert-success text-center" role="alert" style="margin-top: 5%">
          提交成功
        </div>
      </div>
      <div class="text-center" style="margin: 5% 0 2%">
        <custom-editor v-model="detail"></custom-editor>
      </div>
      <div style="display: flex" class="justify-content-end"><input class="btn btn-primary" type="submit" @click="submit(detail)" value="提出话题" style="width: 155px;border-radius: 20px;"></div>
    </div>
    <!-- 师生互动回复-->
    <div class="container" style="margin-top: 5%">
      <div class="col col-lg-12" v-for="(item,index) in commentList" :key="index"  v-if="index < 2">
        <div class="box1 align-items-center" style="display: flex">
          <img src="../../assets/img/home/comment.png"  style="width: 40px;height: 40px;border-radius:20px;background-color: #666666;">
          <h6 style="font-size: 17px;letter-spacing: 1px;color: #333333;padding: 0 1% 0">{{item.sname}}</h6>
          <div class="time row justify-content-md-end" style="width:87.5%;color: #999999;font-family: MicrosoftYaHeiL,serif;display: flex">
            <div>{{item.createTime}}</div>
          </div>
        </div>
        <div class="box2" style="width: 1035px;overflow: hidden;padding-left: 4.5%;color: #666666;line-height: 30px">
          {{$getSimpleHtml(item.detail)}}
        </div>
        <div class="box3 justify-content-end" style="display: flex;width:94%;margin-top: 3%;margin-bottom: 5%">
          <img style="padding-bottom: 1%;cursor: pointer;"  :src="item.red == true ? likeOnImg:likeOffImg" @click="rating(item)" alt="点赞图片" />
          <label class="align-items-center"  style="cursor: pointer;color: #999999;font-size: 14px;padding-left: 0.5%">赞（{{parseInt(item.praiseNum)}})</label>
          <img src="../../assets/img/reply.png" style="cursor: pointer;padding-bottom: 1%;padding-left: 2%">
          <a style="color: #999999;font-size: 14px;padding-left: 0.5%;cursor: pointer" @click="toDetail(index,$getSimpleHtml(item.detail))">回复（{{item.wbNum}}）</a>
        </div>

      </div>
      <div class="col col-lg-12" v-for="(item,index) in commentList" :key="index"  v-show="showList" v-if="index >= 2">
        <div class="box1 align-items-center" style="display: flex">
          <img src="../../assets/img/home/comment.png" style="width: 40px;height: 40px;border-radius:20px;background-color: #666666;">
          <h6 style="font-size: 17px;letter-spacing: 1px;color: #333333;padding: 0 1% 0">{{item.sname}}</h6>
          <div class="time justify-content-end" style="width:90%;color: #999999;font-family: MicrosoftYaHeiL,serif;display: flex">
            <div>{{item.createTime}}</div>
          </div>
        </div>
        <div class="box2" style="width: 1035px;overflow: hidden;padding-left: 4.5%;color: #666666;line-height: 30px">
          {{$getSimpleHtml(item.detail)}}
        </div>
        <div class="box3 justify-content-end" style="display: flex;width:94%;margin-top: 3%;margin-bottom: 5%">
          <img style="padding-bottom: 1%;cursor: pointer;"  :src="item.red == true ? likeOnImg:likeOffImg" @click="rating(item)" alt="点赞图片" />
          <label class="align-items-center"  style="cursor: pointer;color: #999999;font-size: 14px;padding-left: 0.5%">赞（{{parseInt(item.praiseNum)}})</label>
          <img src="../../assets/img/reply.png" style="cursor: pointer;padding-bottom: 1%;padding-left: 2%">
          <a style="color: #999999;font-size: 14px;padding-left: 0.5%;cursor: pointer" @click="toDetail(index,$getSimpleHtml(item.detail))">回复（{{item.wbNum}}）</a>
        </div>
<!--        <div class="reply" v-if="isReply">-->
<!--          <div class="text-center" style="margin: 5% 0 2%">-->
<!--            <custom-editor v-model="wbcontent"></custom-editor>-->
<!--          </div>-->
<!--          <div style="display: flex" class="justify-content-end align-items-center">-->
<!--            <input @click="writeBack(item.id,wbcontent)" class="btn btn-primary" type="submit" value="回复" style="width: 115px;border-radius: 20px;"></div>-->
<!--        </div>-->
        <!--回复评论-->
<!--        <div class="container col-8 align-self-end">-->
<!--        <div  style="border-radius: 5px;margin-top: 5%;margin-bottom: 5%">-->
<!--          <div class="row justify-content-md-center" style="padding: 5%">-->
<!--            <div class="col col-lg-12">-->
<!--              <div class="button" style="display:flex;justify-content: center;">-->
<!--                <button  @click="toDetail(index)" type="button" class="btn btn-outline-primary" style="height: 40px;width:160px;border-radius: 20px">查看全部</button>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
      </div>
      <div class="shrink text-center" v-if="commentList.length >= 2" @click='toggle()' style="margin-bottom: 5%">
        <a  style="color: #666666;cursor:pointer">{{showList ? '收起 ↑': '查看更多 ↓'}}</a>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'interaction',
  data() {
    return {
      likeOnImg: require('../../assets/img/likeOn.png'),
      likeOffImg: require('../../assets/img/like.png'),
      likeNum: 25,
      replyNum: 10,
      active: false,
      showList : false,
      successSave:false,
      isReply: false,
      imgSrc:'',
      size: '2',
      commentList: [],
      detail:'',
      wbcontent:''
    }
  },
  mounted() {
    this.getEvaluateList();
  },
  methods: {
    // 提出话题
    submit(detail){
      this.$successMsg(`提出话题成功`);
      window.location.reload();
    },
    // 获取话题列表
    getEvaluateList(){
      this.$axios.get('/js/mock.json').then(result =>{
        let appData = result
        this.commentList = appData.data.interaction
        console.log(appData.data.interaction)
      })
    },
    //回复话题
    // writeBack(id,content){
    //   const params = {
    //     content : content,
    //     evalId : id
    //   }
    //   writeBackPostApi(params).then(result => {
    //     console.log(result)
    //     if(result.code === 200){
    //       console.log(true)
    //       this.$successMsg(`提交评价成功`);
    //       const interval = setInterval(() => {
    //         window.location.reload();
    //       }, 2000)
    //     }
    //   })
    // },
    //跳转至回复的详情
    toDetail(index,detail){
      console.log(index)
      this.$router.push({name:'interactionDetails',query:{comment: this.commentList[index],detail:detail}})
    },
    // 点赞评价
    rating: function (item) {
      console.log(item.id)
      for(let i = 0; i < this.commentList.length; i++ ){
        if(this.commentList[i].id == item.id){
          if(!this.commentList[i].red){
            this.commentList[i].red = true;
            this.commentList[i].praiseNum =  Number(Number(this.commentList[i].praiseNum)+1)
            // this.likeReply(item.id)
          }
        }
      }
    },
    // // 点赞回复
    // likeReply(id){
    //   const params = {
    //     evalWbId : id
    //   }
    //   praiseByWBPostApi(params).then(result => {
    //     console.log(result)
    //   })
    // },
    // 查看收起
    toggle () {
      this.showList = ! this.showList
      this.getEvaluateList()
    },
    // 去评论
    toReply(){
       this.isReply= ! this.isReply
    }
  }
}
</script>

<style lang="scss">
#interaction{
  background-image: url('../../assets/img/back1 (7).png');
  position: relative ;
  width: 100%;
  height:350px;
  background-repeat: no-repeat;
  background-position: 0px 0px;
  background-size:cover;
}
</style>
