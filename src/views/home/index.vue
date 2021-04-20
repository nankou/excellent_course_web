<template>
  <div id="home">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img width="auto" height="500px" src="../../../src/assets/img/banner3.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img width="auto" height="500px" src="../../../src/assets/img/banner2.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img width="auto" height="500px" src="../../../src/assets/img/banner1.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img width="auto" height="500px" src="../../../src/assets/img/banner4.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img width="auto" height="500px" src="../../../src/assets/img/banner5.jpg" class="d-block w-100" alt="...">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <div class="intro" style="display: flex;margin-left: 18%;margin-top: 8%;margin-bottom: 10%">
      <div>
        <img style="width: 420px;height: 400px;" src="../../assets/img/home/intro.png">
      </div>
      <div style="margin-left: 5%">
        <div style="margin-top: 7%;letter-spacing: 2px;color: #46b4f0;font-size: 22px;">COURSE INTRODUCTION</div><br/>
        <div style="color: #333333;font-size: 32px;">课程简介</div><br/>
        <div style="width: 611px;color: #808080;font-size: 18px;letter-spacing: 1px;line-height: 29px;margin-top:6%;">{{intro[0].content}}</div>
      </div>
    </div>
    <div class="leader" style="width: 1270px;height: 650px;background-color: #f5f5f5;margin-bottom: 6%;display: flex">
      <div style="margin-left: 24%;padding-top: 6%">
        <div style="margin-top: 7%;letter-spacing: 2px;color: #46b4f0;font-size: 22px;">PROGRAM LEADER</div><br/>
        <div style="color: #333333;font-size: 32px;">课程负责人</div><br/>
        <div style="width: 611px;color: #808080;font-size: 18px;letter-spacing: 1px;line-height: 29px;margin-top:6%;">{{leader[0].content}}</div>
      </div>
      <img style="width: 400px;height: 400px;background-color: #fff;border: solid 6px #ffffff;margin-top: 6%;margin-left: 4%" src="../../assets/img/home/leader.jpg">
    </div>
    <!--课程回顾-->
    <div class="review text-center" style="margin-top: 4%;">
      <div style="font-size: 22px;letter-spacing: 2px;color: #1089f0;opacity: 0.69;">COURSE REVIEW</div>
      <div  class="justify-content-center align-items-center" style="display: flex;margin-top: 2%">
        <div style="margin-right: 2%;width: 160px;height: 2px;background-color: #1089f0;opacity: 0.48;"></div>
        <div style="margin-right: 2%;font-size: 32px;letter-spacing: 3px;color: #333333;">课程回顾</div>
        <div style="width: 160px;height: 2px;background-color: #1089f0;border-radius: 1px;opacity: 0.48;"></div>
      </div>
      <div class="ThreeCard" style="display:flex;justify-content: center;margin-bottom: 6%;margin-top: 2%">
        <div class="card border-light" style="width: 300px;background-color: #f5f5f5;border-radius: 10px;margin: 1%;cursor: pointer">
          <router-link to="/student">
            <img src="../../assets/img/home/courseware.png" class="card-img-top">
            <div class="card-body">
                <p class="card-text" style="color: #3c3c3c">课程评价</p>
            </div>
          </router-link>
        </div>
        <div class="card border-light" style="width: 300px;background-color: #f5f5f5;border-radius: 10px;margin: 1%;cursor: pointer">
          <router-link to="/interaction">
            <img src="../../assets/img/home/video.png" class="card-img-top">
            <div class="card-body">
              <p class="card-text" style="color: #3c3c3c">师生互动</p>
            </div>
          </router-link>
        </div>
        <div class="card border-light" style="width: 300px;background-color: #f5f5f5;border-radius: 10px;margin: 1%;cursor: pointer">
          <router-link to="/homework">
            <img src="../../assets/img/home/test.png" class="card-img-top">
            <div class="card-body">
              <p class="card-text" style="color: #3c3c3c">作业提交</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

export default {
  components: {
    Swiper,
    SwiperSlide
  },


  name: 'home',
  data () {
    return {
      // 轮播图
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      imgSrc: '',
      isLogin:true,
      teacherIntro:[],
      courseIntro:[],
      items: [],
      ImgList:[],
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      intro: [
            {"id":1,"content": "本课程为web开发技术，是广东海洋大学数学与计算机学院软件工程系开设的一门专业学科拓展课。学分为3分。在钟海楼02019上课。旨在锻炼 学生能够使用Java Web进行企业级应用开发。学会JSP/Servlet与Tomcat,MySQL相结合的技术。结合JDBC、数据库开发等知识，进行一些实际的JavaWeb 项目的开发。"}
      ],
      leader: [
            {"id":1,"content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
      ],
    }
  },
  mounted() {
    if(this.$store.getters.user.username){
    this.isLogin = true
    }else {
      this.isLogin = false
    };
    this.getTeacherIntro()
    // this.getCourseIntro()
  },
  methods: {

    // 进入学习
    toVideo(){
      if(this.isLogin == true){
        this.$router.push('/video')
      }else{
        this.$router.push('/login')
      }
    },
    //获取简介信息
    getTeacherIntro(){
      this.$axios.get("/intro").then(function(response){
        // this.intro = response.daa[0].data
      })
        .catch(function(error){
          console.log("出错喽："+error);
        });
    },
    // 点击教学团队进入详情
    toDetail(id){
      console.log(id)
      this.$router.push({name:'teamDetail',query:{id:id}})
    }
  }

}
</script>

<style lang="scss" scoped>

#home{
  .card:hover{
    box-shadow: 2px 4px 6px #ced6d7;
  }
  .banner{
    background-size: cover;
  }
}
</style>
