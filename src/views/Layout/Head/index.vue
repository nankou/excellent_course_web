<template>
  <div id="Head" class="navBar">
    <div class="container">
      <nav class="navbar navbar-expand-sm  shadow-sm">
        <a class="navbar-brand" href="/">
          <img src="../../../assets/img/logo.png" style="width: 30px;">
        </a>
        <span style="font-family: AliHYAiHei-Beta,cursive;font-size: 26px;letter-spacing: 2px;color: #1089f0;font-weight: bold;margin-right: 6%">用户界面设计</span>
        <button class="navbar-toggler " type="button" data-toggle="collapse " data-target="#navbarNavAltMarkup " aria-controls="navbarNavAltMarkup " aria-expanded="false " aria-label="Toggle navigation "><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse " id="navbarNavAltMarkup ">
          <div class="navbar-nav ">
            <ul class="navbar-nav" style="display: flex;align-items: center">
              <li class="nav-item ">
                <router-link class="nav-link" to="/" :class="[ $route.name === 'home' ? 'active' : '']">
                  <span>首页</span>
                </router-link>
              </li>
              <li  :class="['nav-item ', $route.name === 'student' ? 'active' : '']" >
                <router-link class="nav-link" :to="{ name: 'student' }" >
                  <span>课程评价</span>
                </router-link>
              </li>

              <li :class="['nav-item ', $route.name === 'interaction' ? 'active' : '']">
                <router-link class="nav-link" :to="{ name: 'interaction' }" >
                  <span>师生互动</span>
                </router-link>
              </li>
              <li :class="['nav-item ', $route.name === 'homework' ? 'active' : '']">
                <router-link class="nav-link" :to="{ name: 'homework' }" >
                  <span>作业提交</span>
                </router-link>
              </li>
              <!--          <li class="nav-item dropdown">-->
              <!--            <a class="nav-link " role="button"-->
              <!--               :class="[-->
              <!--              'nav-item ',-->
              <!--              $route.name === 'courseware' ? 'active' : ''|-->
              <!--              $route.name === 'video' ? 'active' : ''|-->
              <!--              $route.name === 'outline' ? 'active' : ''-->
              <!--            ]"-->
              <!--               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">-->
              <!--              教学资源-->
              <!--            </a>-->
              <!--            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">-->
              <!--              <a class="dropdown-item"><router-link to="/courseware"><span>教学课件</span></router-link></a>-->
              <!--              <a class="dropdown-item"><router-link to="/video"><span>教学录像</span></router-link></a>-->
              <!--              <a class="dropdown-item"><router-link to="/outline"><span>教学大纲</span></router-link></a>-->
              <!--            </div>-->
              <!--          </li>-->
              <li class="nav-item dropdown">
                <a style="margin-left: 10px;" href="http://web.itheima.com/?webzly$jingjiahmpz-pz-pc-biaoti">其他资源</a>

              </li>
              <!--          <li class="nav-item dropdown">-->
              <!--            &lt;!&ndash;              <a style="margin-left: 10px;" href="http://web.itheima.com/?webzly$jingjiahmpz-pz-pc-biaoti">其他资源</a>&ndash;&gt;-->
              <!--            <router-link class="nav-link" :to="{ name: 'cart' }" >-->
              <!--              <span>购物车</span>-->
              <!--            </router-link>-->
              <!--          </li>-->
              <li class="nav-item " style="margin-left: 80px">
                <router-link to="/login" v-if="!isLogin">登录 </router-link>
              </li>
              <li class="nav-item ">
                <router-link to="/personal" v-if="isLogin">{{$tryRead('$store.getters.user.Info.sname',$store) }}</router-link>
                <router-link to="/register" v-if="!isLogin">注册 </router-link>
              </li>
              <li class="nav-item ">
                <div v-if="isLogin">
                  {{$store.getters.user.username}}
                </div>
              </li>
              <li class="nav-item " style="cursor: pointer">
                <span v-if="isLogin" @click="outLogin">退出登录</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>

</template>

<script>

import store from "../../../router";

export default {
  name: 'Head',
  data () {
    return {
      text: '',
      isLogin: true
    }
  },
  mounted () {
    if (this.$store.getters.user.username) {
      this.isLogin = true
    } else {
      this.isLogin = false
    }
  },
  created () {
    const loadingPage = document.getElementById('Loading')
    if (loadingPage) {
      document.body.removeChild(loadingPage)
    }
  },
  methods: {
    // 退出登录
    outLogin () {
      this.$store.dispatch('setUser', '')// 更新userInfo
      this.$store.dispatch('setToken', '')// 更新userInfo
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss">
  #Head {
    /** 下面的控制显示和隐藏 **/
    .dropdown .dropdown-menu
    {display: none;}
    .dropdown:hover .dropdown-menu
    {display: block;}
    width: 100%;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12) !important;
    .nav-item {
      /*color: #2b2e2e;*/
      font-family: MicrosoftYaHei;
      font-size: 18px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 26px;
      letter-spacing: 1px;
      color: #333333;
    }
    .active{
      color: #1089f0;;
      font-weight: bold;
    }
    .nav-item {
      margin-left: 20px;
      a {
        color: #333333;
        span {
          line-height: 30px;
          text-decoration: none;
        }
      }
      .nav-link::after {
        display: block;
        content: "";
        height: 3px;
        float: left;
        width: 100%;
        background: #1089f0;
        opacity: 0;
        -webkit-transition: transform 0.2s ease-out, opacity 0.2s ease-out;
        transform-origin: 50% 0%;
        transform: scale(0.01, 1);
      }
    }
      .nav-item:hover {
        color: #3c3c3c;
        font-weight: bold;
        @media screen and (min-width: 576px) {
          a::after {
            transform: scale(1, 1);
            opacity: 1;
          }
        }
      }
    .nav-item:last-child:hover {
      ::after {
        transform: scale(0, 0);
        opacity: 0;
      }
    }
    .user {
      display: flex;
      align-items: center;
    }
  }
</style>
