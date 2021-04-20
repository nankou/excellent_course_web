<template>
  <div>
    <div id="evaluateStudentReply"
    >
      <div class="banner" style="padding-left: 21%">
        <div style="font-size: 38px;letter-spacing: 2px;color: #ffffff;padding-top: 6%">学生评价</div>
        <div style="font-size: 20px;letter-spacing: 2px;color: #ffffff;padding-top: 2%">STUDENT EVALUATION</div>
        <div style="width: 120px;height: 2px;background-color: #ffffff;border-radius: 2px 0px 0px 0px;margin-top: 3%"></div>
      </div>
    </div>
    <!--评论者详情-->
    <div class="container">
      <div class="row justify-content-md-center" style="margin-top: 7%">
        <div class="col col-lg-12" >
          <div class="box1 align-items-center" style="display: flex">
            <img :src="$addBaseURL(comment.scover)" style="width: 40px;height: 40px;border-radius:20px;background-color: #666666;">
            <h6 style="font-size: 17px;letter-spacing: 1px;color: #333333;padding: 0 1% 0">{{comment.sname}}</h6>
            <make-star style="padding: 2% 2% 0" :star1="this.average1"/>
            <div class="time row justify-content-md-end" style="width:46%;color: #999999;font-family: MicrosoftYaHeiL,serif;display: flex">
              <div>{{comment.createTime}}</div>
            </div>
          </div>
          <div class="box2" style="width: 1035px;overflow: hidden;padding-left: 4.5%;color: #666666;line-height: 30px">
            {{content}}
          </div>
          <div class="box3 row justify-content-md-end" style="display: flex;width:94%;margin-top: 3%;margin-bottom: 5%">
            <img style="padding-bottom: 1%;"  :src="active == true ? likeOnImg:likeOffImg" alt="点赞图片" />
            <label class="align-items-center"  style="color: #999999;font-size: 14px;padding-left: 0.5%">赞（{{parseInt(comment.praiseNum)+likeNum}})</label>
            <img src="../../../assets/img/reply.png" style="padding-bottom: 1%;padding-left: 2%">
            <a style="color: #999999;font-size: 14px;padding-left: 0.5%">回复（{{comment.wbNum}}）</a>
          </div>
        </div>
      </div>
      <div class="col-4 alert alert-success text-center" role="alert" style="position:absolute;text-align:center;left: 30%;top: 92%" v-if="successSave">
        提交回复成功
      </div>
      <div class="text-center" style="padding: 5% 0 5%">
        <custom-editor v-model="comment.content"></custom-editor>
      </div>
      <div style="display: flex" class="justify-content-end"><input class="btn btn-primary" @click="submit(comment.id,comment.content)" type="submit" value="回复" style="width: 115px;border-radius: 20px;"></div>
    </div>
    <!-- 回复详情-->
    <div class="container" style="background-color: #f7f7f7;border-radius: 5px;margin-top: 5%;margin-bottom: 5%">
      <div class="row justify-content-md-center" style="padding: 5%">
        <div v-if="isEmpty" style="color: #666666">还没有人回复噢~</div>
        <div class="col col-lg-12" v-for="(item,index) in commentList" :key="item.id"  v-if="index < 4 || !isEmpty">
          <div class="box1 align-items-center" style="display: flex">
            <img :src="$addBaseURL(item.scover)" style="width: 40px;height: 40px;border-radius:20px;background-color: #666666;">
            <h6 style="font-size: 17px;letter-spacing: 1px;color: #333333;padding: 0 1% 0">{{item.sname}}</h6>
            <div class="row time justify-content-md-end" style="width:85%;color: #999999;font-family: MicrosoftYaHeiL,serif;display: flex">
              <div>{{item.createTime}}</div>
            </div>
          </div>
          <div class="box2" style="width: 1035px;overflow: hidden;padding-left: 4.5%;color: #666666;line-height: 30px">
            {{$getSimpleHtml(item.content)}}
          </div>
          <div class="box3 justify-content-end" style="display: flex;width:94%;margin-top: 3%;margin-bottom: 5%">
            <img style="padding-bottom: 1%;cursor: pointer;"  :src="item.red == true ? likeOnImg:likeOffImg" @click="rating(item)" alt="点赞图片" />
            <label class="align-items-center"  style="color: #999999;font-size: 14px;padding-left: 0.5%;cursor: pointer;">赞（{{parseInt(item.praiseNum)+likeNum}})</label>
          </div>
        </div>
        <div class="col col-lg-12" v-for="(item,index) in commentList"   v-show="showList" v-if="index >= 4">
          <div class="box1 align-items-center" style="display: flex">
            <img :src="$addBaseURL(item.scover)" style="width: 40px;height: 40px;border-radius:20px;background-color: #666666;">
            <h6 style="font-size: 17px;letter-spacing: 1px;color: #333333;padding: 0 1% 0">{{item.sname}}</h6>
            <div class="row time justify-content-md-end" style="width:85%;color: #999999;font-family: MicrosoftYaHeiL,serif;display: flex">
              <div>{{item.createTime}}</div>
            </div>
          </div>
          <div class="box2" style="width: 1035px;overflow: hidden;padding-left: 4.5%;color: #666666;line-height: 30px">
            {{$getSimpleHtml(item.content)}}
          </div>
          <div class="box3 justify-content-end" style="display: flex;width:94%;margin-top: 3%;margin-bottom: 5%">
            <img style="padding-bottom: 1%;"  :src="item.red == true ? likeOnImg:likeOffImg" @click="rating(item)" alt="点赞图片" />
            <label class="align-items-center"  style="color: #999999;font-size: 14px;padding-left: 0.5%">赞（{{parseInt(item.praiseNum)+likeNum}})</label>
          </div>
        </div>
        <div class="shrink" v-if="commentList.length >= 4" @click='toggle()' style="margin-bottom: 5%">
          <a  style="color: #666666;cursor:pointer">{{showList ? '收起 ↑': '查看更多 ↓'}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'evaluateStudentReply',
  data() {
    return {
      likeOnImg: require('../../../assets/img/likeOn.png'),
      likeOffImg: require('../../../assets/img/like.png'),
      likeNum: 25,
      replyNum: 10,
      active: false,
      showList : false,
      imgSrc:'',
      comment:[],
      commentList: [],
      content: '',
      size:'4',
      isEmpty: false,
      successSave:false,
      average1: '0'
    }
  },
  mounted() {
    this.comment = this.$route.query.item
    this.content = this.$route.query.detail
    this.average1 = this.$route.query.item.average
  },
  methods: {
    // 获取回复列表
    // getWriteBack(){
    //   const params  = {
    //     current :1,
    //     evalId: this.$route.query.item.id,
    //     size: this.size
    //   }
    //   writeBackGetApi(params).then(result => {
    //     for(let i =0;i<=result.data.records.length;i++){
    //       console.log(result.data.records[i])
    //     }
    //     if(result.data == null || result.data.total == 0){
    //       this.isEmpty = true
    //     }else {
    //       this.size = result.data.total
    //       this.commentList = result.data.records
    //     }
    //   })
    // },
    // 回复评价
    // submit(id,content){
    //   const params = {
    //     content : content,
    //     evalId : id
    //   }
    //   writeBackPostApi(params).then(result => {
    //     console.log(result)
    //     if(result.code === 200){
    //       console.log(true)
    //       this.$successMsg(`提交回复成功`);
    //     }
    //   })
    // },
    // 点赞评价
    rating: function (item) {
      for(let i = 0; i < this.commentList.length; i++ ){
        if(this.commentList[i].id == item.id){
          if(!this.commentList[i].red){
            this.commentList[i].red = true;
            this.commentList[i].praiseNum =  Number(Number(this.commentList[i].praiseNum)+1)
            this.likeEvaluate(item.id)
          }
        }
      }
    },
    // 点赞评价
    // likeEvaluate(id){
    //   const params = {
    //     evalId : id
    //   }
    //   praiseByEvalPostApi(params).then(result => {
    //   })
    // },
    // toggle () {
    //   this.showList = ! this.showList
    //   this.getWriteBack()
    // }
  }
}
</script>

<style lang="scss">
#evaluateStudentReply{
  background-image: url('../../../assets/img/back1 (3).png');
  position: relative ;
  width: 100%;
  height:350px;
  background-repeat: no-repeat;
  background-position: 0px 0px;
  background-size:cover;
}
</style>
