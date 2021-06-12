<template>
  <div id="register" class="text-center">
    <div class="card" style="width: 30rem;height: 38rem;border-radius: 10px;opacity: 0.9;margin-left: 35%;margin-top: 3%">
      <div class="card-body">
        <div class="card-title" style="margin-top:6%">
          <img src="../../../assets/img/logo.png" style="width: 15%;height: 22%;">
        </div>
        <h6 class="card-subtitle mb-2" style="font-size: 25px;letter-spacing: 4px;color: #1089f0;font-weight: bold">用户界面设计</h6>
        <form style="margin-top: 12%;margin-left: 1%;">
          <div class="form-group row">
          <label for="StudentID" class="col-sm-3 col-form-label">学号</label>
          <div class="col-sm-8">
            <input type="text" class="form-control" id="StudentID" placeholder="请输入您的学号" v-model="userVo.username">
          </div>
         </div>
          <div class="form-group row">
            <label for="phone" class="col-sm-3 col-form-label">手机号</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" id="phone" placeholder="请输入您的手机号" v-model="userVo.phone">
            </div>
          </div>
          <div class="form-group row">
            <label for="inputCode" class="col-sm-3 col-form-label">验证码</label>
            <div class="col-sm-4">
              <input type="text" class="form-control" id="inputCode" placeholder="请输入验证码" v-model="userVo.code">
            </div>
            <input type="button" id="code" style="width: 30%; height: 38px; margin-top: 0; font-size: 34px;" @click="createCode()" class="btnReset pbtn" />
          </div>
          <div class="form-group row">
            <label for="inputPassword" class="col-sm-3 col-form-label">密码</label>
            <div class="col-sm-8">
              <input type="password" class="form-control" id="inputPassword" placeholder="请输入您的密码" v-model="userVo.password">
            </div>
          </div>
        </form>
        <div class="twoButton">
          <input class="btn btn-primary" type="submit" @click="toRegiter" value="注册" style="width: 320px;height: 40px;border-radius: 40px;margin-top: 5%"><br/>
          <a class="btn btn-outline-primary" href="login" role="button" style="width: 320px;height: 40px;border-radius: 40px;margin-top: 5%">登录</a>
        </div>
      </div>
    </div>
    <!-- 注册成功模态框-->
    <transition name="fade">
      <div v-if="sample_modal">
        <div class="modal" v-on:click.self="sample_modal=false"  >
          <div class="modal-dialog modal-dialog-centered" style="width: 341px;height: 187px;opacity: 0.8">
            <div class="modal-content" style="background-color: #3c3c3c">
              <div class="modal-body">
                <img src="../../../assets/img/login/success.png" style="width: 35px;height: 28px;margin-top: 6%;">
                <p style="color: #ffffff;font-size: 14px;margin-top: 6%;margin-bottom: 15%">注册成功</p>
                <a class="btn" href="login" role="button" style="width: 120px;font-size: 14px;height: 35px;border-radius: 20px;background-color: #ffffff;color: #333333;margin-bottom: 5%">去登录 > </a>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-backdrop show"></div>
      </div>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'register',
  data () {
    return {
      sample_modal: false,
      imgSrc:'',
      userVo: {
        username: '',
        password: '',
        phone:'',
        code:''
      },
      code:''
    }
  },
  mounted() {
    this.createCode()
  },
  methods: {
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
    toRegiter () {
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
        this.$axios.post('/login',this.userVo).then((result) => {
          console.log(result)
          if(result.data.code == 200){
            this.$successMsg('注册成功')
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
                  this.$router.push({ path: '/home' })
                }
              }, 800)
            }
          }else{
            console.log(result.message)
            this.alertMessage = result.message
            this.isAlert = true
            const interval = setInterval(() => {
              this.getCodeLoading = false
              this.isAlert = false
            }, 3000)
          }
        })
      }
    }
  }
}
</script>

<style lang="scss">
  body {
    /* 让模态框显示 */
    .modal {
      display: block;
    }

    /* 如果不使用vue的transition的话可以不设置 */
    .fade-enter-active, .fade-leave-active {
      transition: opacity .15s;
    }
    .fade-enter, .fade-leave-to {
      opacity: 0;
    }
    #register{
      background-image: url('../../../assets/img/login/back.png');
      width: 100%;
      height: 100%;
      position: fixed;
      background-repeat: no-repeat;
      background-position: 0 0;
      background-size:cover;
    }
  }
</style>
