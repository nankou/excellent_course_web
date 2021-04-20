<template>
  <div id="login" class="text-center">
    <div class="card" style="width: 30rem;height: 34rem;border-radius: 10px;opacity: 0.9;margin-left: 35%;margin-top: 6%">
      <div class="card-body">
        <div class="card-title" style="margin-top:6%">
          <img src="../../../assets/img/logo02.png" style="width: 15%;height: 22%;">
        </div>
        <h6 class="card-subtitle mb-2" style="font-size: 25px;letter-spacing: 4px;color: #1089f0;font-weight: bold">嵌入式系统原理与开发</h6>
        <form style="margin-top: 12%;margin-left: 1%;">
          <div class="form-group row">
            <label for="phone" class="col-sm-3 col-form-label">手机号</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" id="phone" placeholder="请输入您的手机号">
            </div>
          </div>
          <div class="form-group row">
            <label for="code" class="col-sm-3 col-form-label">验证码</label>
            <div class="col-sm-5">
              <input type="text" class="form-control" id="code" placeholder="请输入验证码">
            </div>
            <a href="#" class="row" style="color: #1089f0;margin-top: 2%;margin-left: 2%">获取验证码</a>
          </div>
          <div class="form-group row">
            <label for="inputPassword" class="col-sm-3 col-form-label">密码</label>
            <div class="col-sm-8">
              <input type="password" class="form-control" id="inputPassword" placeholder="请输入您的密码">
            </div>
          </div>
        </form>
        <div class="twoButton">
          <input class="btn btn-primary" type="submit" @click="topassword" value="修改密码" style="width: 320px;height: 40px;border-radius: 40px;margin-top: 5%"><br/>
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
                <p style="color: #ffffff;font-size: 14px;margin-top: 8%;margin-bottom: 12%">修改密码成功</p>
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
  name: 'password',
  data () {
    return {
      sample_modal: false
    }
  },
  methods: {
    topassword () {
      this.sample_modal = true
    }
  }
}
</script>

<style lang="scss">
  body {
    width:100%;
    height:100%;
    background:url("../../../assets/img/login/back.png") no-repeat;
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
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
  }
</style>
