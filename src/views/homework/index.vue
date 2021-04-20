<template>
  <div>
    <div id="homework"
    >
      <div class="banner" style="padding-left: 21%">
        <div style="font-size: 38px;letter-spacing: 2px;color: #ffffff;padding-top: 6%">作业提交</div>
        <div style="font-size: 20px;letter-spacing: 2px;color: #ffffff;padding-top: 2%">JOB SUBMISSION</div>
        <div style="width: 120px;height: 2px;background-color: #ffffff;border-radius: 2px 0px 0px 0px;margin-top: 3%"></div>
      </div>
    </div>
    <div class="container">
      <table class="table" style="margin-top: 8%;text-align: center">
        <thead>
          <tr>
            <th scope="col">作业编号</th>
            <th scope="col">作业名称</th>
            <th scope="col">作业要求</th>
            <th scope="col">截止时间</th>
            <th scope="col">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in homeworkList" :key="index" >
            <th>{{item.id}}</th>
            <td>{{item.hwName}}</td>
            <td>{{item.hwRequire}}</td>
            <td>{{item.endTime}}</td>
            <td>
              <button  type="button" class="btn btn-primary btn-sm" @click="toDetail(item.hwIndex,item.id,item.subTime,item.subAnswer,item.hwName,item.hwQuestion,item.hwRequire,item.endTime)">查看详情</button>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- 分页-->
      <div class="row justify-content-center" style="padding-top: 2%;padding-bottom: 5%">
        <ul class="nav pagination" v-if="isPagination">
          <li class="page-item">
            <a href="#" class="page-link"><span @click="switchToPage(pageNow-1)"><&nbsp;</span></a>
          </li>
          <li class="page-item" v-for="n in totalPages" :class="{active:n == pageNow}">
            <a href="#" @click="switchToPage(n)" class="page-link">{{n}}</a>
          </li>
          <li class="page-item">
            <a href="#" class="page-link"><span @click="switchToPage(pageNow+1)">>&nbsp;</span></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'homework',
  data(){
    return{
      homeworkList:[],
      perPage:10,
      pageNow:0 ,
      totalPages:'',
      size:'10',
      checkedRows:[],
      imgSrc:'',
      pageNo:1,
      isPagination:false
    }
  },
  mounted() {
    this.getUserByPage()
  },
  methods:{
    // 跳转至详情页
    toDetail(hwIndex,hwId,subTime,subAnswer,hwName,hwQuestion,hwRequire,endTime){
      this.$router.push({name:'homeworkDetails',query:{index:hwIndex,id:hwId,subTime:subTime,subAnswer:subAnswer,hwName:hwName,hwQuestion:hwQuestion,hwRequire:hwRequire,endTime:endTime}})
    },
    // 分页跳转
    switchToPage:function (pageNo) {
      console.log(pageNo)
      this.pageNow = pageNo
      this.getUserByPage(pageNo);
      if (pageNo < 0 || pageNo >= this.totalPages) {
        return false;
      }

    },
    // 获得作业列表
    getUserByPage(pageNo){
      this.$axios.get('/js/mock.json').then(result =>{
        let appData = result
        this.homeworkList = appData.data.homework
        console.log(this.homeworkList)
      })
    }
  }
}
</script>

<style lang="scss">
#homework{
  background-image: url('../../assets/img/back1 (8).png');
  position: relative ;
  width: 100%;
  height:350px;
  background-repeat: no-repeat;
  background-position: 0px 0px;
  background-size:cover;
}
</style>
