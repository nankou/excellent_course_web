<template>
  <div id="login" class="text-center"
  >
    <div class="card" style="width: 28rem;height: 32rem;border-radius: 10px;opacity: 0.9;margin-left: 35%;margin-top: 8%">
      <div class="card-body">
        <div class="card-title" style="margin-top:6%">
          <img src="../../../assets/img/logo.png" style="width: 15%;height: 22%;">
        </div>
        <h6 class="card-subtitle mb-2" style="font-size: 25px;letter-spacing: 4px;color: #1089f0;font-weight: bold;padding-top: 3%">web开发技术</h6>
        <form style="margin-top: 12%;margin-left: 12%;">
          <div class="form-group row">
            <label for="StudentID" class="col-sm-2 col-form-label">学号</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="StudentID" placeholder="请输入您的学号" v-model="userVo.username">
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword" class="col-sm-2 col-form-label">密码</label>
            <div class="col-sm-9">
              <input type="password" class="form-control" id="inputPassword" placeholder="请输入您的密码" v-model="userVo.password">
            </div>
          </div>
          <div class="form-group row">
            <label for="inputCode" class=" col-form-label">验证码</label>
            <div class="col-sm-5" style="margin-left: 14px;">
              <input type="text" class="form-control" id="inputCode" placeholder="请输入验证码" v-model="userVo.code">
            </div>
            <input type="button" id="code" style="width: 28%; height: 38px; margin-top: 0; font-size: 34px;" @click="createCode()" class="btnReset pbtn" />
          </div>
        </form>

        <div class="twoButton" style="padding-top: 3%">
          <button class="btn btn-primary" type="submit" value="登录" @click="login" style="width: 300px;height: 40px;border-radius: 40px;margin-top: 5%">
            <span v-if="!getCodeLoading">登录</span>
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="getCodeLoading"></span>
            <span v-if="getCodeLoading"> 登录中..</span>
          </button><br/>
      <a class="btn btn-outline-primary" href="register" role="button" style="width: 300px;height: 40px;border-radius: 40px;margin-top: 5%">注册</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'login',
  data () {
    return {
      userVo: {
        username: '',
        password: ''
      },
      getCodeLoading: false,
      imgSrc: '',
      alertMessage:'',
      code:''
    }
  },
  mounted() {
    this.createCode()
  },
  methods:{
    // 获取验证码
    createCode(){
      this.code = ''
      const codeLength = 4; //验证码的长度
      const checkCode = document.getElementById("code");
      const random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9); //随机数
      for (let i = 0; i < codeLength; i++) { //循环操作
        let index = Math.floor(Math.random() * 10); //取得随机数的索引（0~35）
        this.code += random[index]; //根据索引取得随机数加到code上
      }
      checkCode.value = this.code; //把code值赋给验证码
    },
    //登录
    login() {
      // 表单验证
      if (!this.userVo.code){
        this.$errorMsg('请输入验证码')
      }else if(!this.userVo.username){
        this.$errorMsg('请输入学号')
      }else if(!this.userVo.password){
        this.$errorMsg('请输入密码')
      }else if(this.userVo.code != this.code){
        this.$errorMsg('验证码输入错误，请重新输入！')
      }else{
        this.getCodeLoading = true
        // axios请求(post方法)
        this.$axios.post('/login',this.userVo).then((result) => {
          if(result.data.code == 200){
            this.$successMsg('登录成功')
            // 将用户信息存到本地缓存中
            this.$store.dispatch('setUser', { username: this.userVo.username })
            if (!this.$isEmpty(this.$route.query.redirect)) {
              console.log('!isEmpty')
              this.$router.push({ path: this.$route.query.redirect + '' })
            } else {
              console.log('isEmpty')
              let time = 2
              const interval = setInterval(() => {
                time--
                if (time < 0) {
                  clearInterval(interval)
                  // 路由跳转至首页
                  this.$router.push({ path: '/home' })
                }
              }, 800)
            }
          }else{
            this.$errorMsg(result.message)
          }
        })
      }
    }
  }
}
</script>

<style lang="scss">
#login{
  background-image: url('../../../assets/img/login/back.png');
  width: 100%;
  height: 100%;
  position: fixed;
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size:cover;
}
</style>
