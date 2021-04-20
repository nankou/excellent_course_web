<template>
  <div>
    <div id="evaluateStudent"
    >
      <div class="banner" style="padding-left: 21%">
        <div style="font-size: 38px;letter-spacing: 2px;color: #ffffff;padding-top: 6%">学生评价</div>
        <div style="font-size: 20px;letter-spacing: 2px;color: #ffffff;padding-top: 2%">STUDENT EVALUATION</div>
        <div style="width: 120px;height: 2px;background-color: #ffffff;border-radius: 2px 0px 0px 0px;margin-top: 3%"></div>
      </div>
    </div>
    <div class="giveMark" style="margin: 7% 19% 7%;font-family: MicrosoftYaHei,serif;font-weight: 600">
      <div class="col-5 alert alert-success text-center" role="alert" style="position:absolute;margin-left: 10%;top: 80%;width: 50%" v-if="successSave">
        提交评价成功
      </div>
      <div style="display:flex;margin-top: 1%">平均评分：<make-star @star="average"/></div>
      <div style="display:flex;margin-top: 1%">知识量：<make-star @star="quantity" style="margin-left: 0.3%"/></div>
      <div style="display:flex;margin-top: 1%">趣味性：<make-star @star="interest" style="margin-left: 0.3%"/></div>
      <div style="display:flex;margin-top: 1%">教师参与：<make-star @star="participate"/></div>
      <div style="display:flex;margin-top: 1%">课程设计：<make-star @star="design"/></div>
      <div class="text-center" style="margin-bottom: 5%;margin-top: 5%">
          <custom-editor v-model="evaluateVo[0].detail"></custom-editor>
      </div>
      <div style="display: flex" class="justify-content-end"><input class="btn btn-primary" type="submit" value="提交" @click="submit(evaluateVo)" style="width: 115px;border-radius: 20px;"></div>
    </div>
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col col-lg-12" v-for="(item,index) in commentList" :key="index"  v-if="index < 2">
          <div class="box1 align-items-center" style="display: flex">
            <img src="../../../assets/img/home/comment.png" style="width: 40px;height: 40px;border-radius:20px;background-color: #666666;">
            <h6 style="font-size: 17px;letter-spacing: 1px;color: #333333;padding: 0 1% 0">{{item.sname}}</h6>
            <make-star style="padding: 2% 2% 0" :star1="item.average"/>
            <div class="time justify-content-end" style="width:42%;color: #999999;font-family: MicrosoftYaHeiL,serif;display: flex">
              <div>{{item.createTime}}</div>
            </div>
          </div>
          <div class="box2" style="width: 1035px;overflow: hidden;padding-left: 4.5%;color: #666666;line-height: 30px">
           {{item.detail}}
          </div>
          <div class="box3 justify-content-end" style="display: flex;width:94%;margin-top: 3%;margin-bottom: 5%">
              <img style="padding-bottom: 1%;cursor: pointer;"  :src="item.red == true ? likeOnImg:likeOffImg" @click="rating(item)" alt="点赞图片" />
              <label class="align-items-center"  style="color: #999999;font-size: 14px;padding-left: 0.5%;cursor: pointer;">赞（{{parseInt(item.praiseNum)+likeNum}})</label>
              <img src="../../../assets/img/reply.png" style="padding-bottom: 1%;padding-left: 2%;cursor: pointer;">
              <a style="color: #999999;font-size: 14px;padding-left: 0.5%;cursor: pointer;" @click="toWbDetail(item,item.detail)">回复（{{item.wbNum}}）</a>
          </div>
        </div>
        <div class="col col-lg-12" v-for="(item,index) in commentList" :key="index"   v-show="showList" v-if="index >= 2">
          <div class="box1 align-items-center" style="display: flex">
            <img src="../../../assets/img/home/comment.png" style="width: 40px;height: 40px;border-radius:20px;background-color: #666666;">
            <h6 style="font-size: 17px;letter-spacing: 1px;color: #333333;padding: 0 1% 0">{{item.sname}}</h6>
            <make-star style="padding: 2% 2% 0" :star1="item.average"/>
            <div class="time justify-content-end" style="width:42%;color: #999999;font-family: MicrosoftYaHeiL,serif;display: flex">
              <div>{{item.createTime}}</div>
            </div>
          </div>
          <div class="box2" style="width: 1035px;overflow: hidden;padding-left: 4.5%;color: #666666;line-height: 30px">
            {{item.detail}}
          </div>
          <div class="box3 justify-content-end" style="display: flex;width:94%;margin-top: 3%;margin-bottom: 5%">
            <img style="padding-bottom: 1%;cursor: pointer;"  :src="active == true ? likeOnImg:likeOffImg" @click="rating(item)" alt="点赞图片" />
            <label class="align-items-center"  style="color: #999999;font-size: 14px;padding-left: 0.5%;cursor: pointer;">赞（{{parseInt(item.praiseNum)}})</label>
            <img src="../../../assets/img/reply.png" style="padding-bottom: 1%;padding-left: 2%;cursor: pointer;">
            <a style="color: #999999;font-size: 14px;padding-left: 0.5%;cursor: pointer;" @click="toWbDetail(item,item.detail)">回复（{{item.wbNum}}）</a>
          </div>
        </div>
        <div class="shrink" v-if="commentList.length >= 2" @click='toggle()' style="margin-bottom: 5%">
          <a  style="color: #666666;cursor:pointer">{{showList ? '收起 ↑': '查看更多 ↓'}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {netMixin} from "../../../api/mixins";


  export default {
  name: 'evaluateStudent',
    mixins:[netMixin],
    data() {
    return {
      imgSrc: '',
      likeOnImg: require('../../../assets/img/likeOn.png'),
      likeOffImg: require('../../../assets/img/like.png'),
      likeNum: 25,
      replyNum: 10,
      active: false,
      showList : false,
      evaluateVo: [{
        'average': 0,
        'design': 0,
        'detail': "string",
        'interest': 0,
        'participate': 0,
        'quantity': 0,
        'type': 0
      }],
      successSave:false,
      commentList: [],
      size:'2'
    }
  },
  mounted() {
    this.getEvaluateList();
  },
  methods: {
    //保存学生评价
    submit(evaluateVo){
      this.$successMsg(`提交评价成功`);
      window.location.reload();
      // this.$axios.post('/evaluate').then((result) => {
      //   console.log(result)
      // })
      // this.$axios.get('/js/mock.json')
      // evaluatePostApi(evaluateVo[0]).then(result =>{
      //   if(result.isok === true){
      //     this.$successMsg(`提交评价成功`);
      //     const interval = setInterval(() => {
      //       this.successSave = false
      //       window.location.reload();
      //     }, 2000)
      //
      //   }
      // })
   },
    average(data){
      this.evaluateVo[0].average = data
    },
    quantity(data){
      this.evaluateVo[0].quantity = data
    },
    interest(data){
      this.evaluateVo[0].interest = data
    },
    participate(data){
      this.evaluateVo[0].participate = data
    },
    design(data){
      this.evaluateVo[0].design = data
    },
    // 获取图片
    getImage(){
      imagesGetApi({board:'11'}).then(result => {
        this.imgSrc = result.data.cover
      })
    },
    // 获取学生评价列表
    getEvaluateList(){
     this.$axios.get('/js/mock.json').then(result =>{
       let appData = result
       this.commentList = appData.data.commentList.records
     })

    },
    // 跳转至回复列表
    toWbDetail(item,detail){
      this.$router.push({name:'reply',query:{item: item,detail:detail}})
    },
    // 点赞功能
    rating: function (item) {
      console.log(item.id)
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
    likeEvaluate(id){
      const params = {
        evalId : id
      }
    },
    toggle () {
        this.showList = ! this.showList
        this.getEvaluateList()
    }
  }
}
</script>

<style lang="scss">
#evaluateStudent{
  background-image: url('../../../assets/img/back1 (4).png');
  position: relative ;
  width: 100%;
  height:350px;
  background-repeat: no-repeat;
  background-position: 0px 0px;
  background-size:cover;
}
</style>
