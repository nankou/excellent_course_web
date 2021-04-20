<template>
  <div>
    <div id="personal"
         :style="`background-image: url('${$addBaseURL(imgSrc)}');position: relative ;width: 100%;height:350px;background-repeat: no-repeat;background-position: 0px 0px;background-size:cover;`"
    >
      <div class="banner" style="padding-left: 21%">
        <div style="font-size: 38px;letter-spacing: 2px;color: #ffffff;padding-top: 6%">个人空间</div>
        <div style="font-size: 20px;letter-spacing: 2px;color: #ffffff;padding-top: 2%">PERSONAL SPACE</div>
        <div style="width: 120px;height: 2px;background-color: #ffffff;border-radius: 2px 0px 0px 0px;margin-top: 3%"></div>
      </div>
    </div>
    <div class="container text-center">
      <ul class="nav  mb-3 flex-column flex-sm-row justify-content-center" id="pills-tab" role="tablist">
        <li class="nav-item  text-sm-center" role="presentation">
          <a class="nav-link active"  data-toggle="pill" href="#pills-one" role="tab" aria-controls="pills-home" aria-selected="true">基本资料</a>
        </li>
        <li class="nav-item text-sm-center" role="presentation">
          <a class="nav-link"  data-toggle="pill" href="#pills-two" role="tab" aria-controls="pills-profile" aria-selected="false">我的头像</a>
        </li>
        <li class="nav-item  text-sm-center" role="presentation">
          <a class="nav-link"  data-toggle="pill" href="#pills-three" role="tab" aria-controls="pills-contact" aria-selected="false">密码管理</a>
        </li>
      </ul>
    </div>
    <div class="line" style="height: 1px;background-color: #dddddd;margin-top: 1%"></div>
    <div class="container">
      <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-one"  aria-labelledby="pills-profile-tab">
          <div class="col-5 alert alert-success text-center" role="alert" style="position:absolute;margin-left: 20%;top: 85%" v-if="successSave">
            保存个人资料成功
          </div>
          <div class="container" style="margin-top: 8%;margin-bottom: 8%;margin-left: 25%">
            <form style="color: #333333;font-family: MicrosoftYaHei,sans-serif;">
              <div class="form-group row">
                <label for="inputName" class="col-sm-2 col-form-label">姓名：</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="inputName" placeholder="请输入姓名" v-model="stuInfo.sname">
                </div>
              </div>
              <fieldset class="form-group">
                <div class="row" style="margin-top: 1%">
                  <legend class="col-form-label col-sm-2 pt-0">性别：</legend>
                  <div class="col-sm-4">
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" :value="false"  v-model="stuInfo.ssex" checked>
                      <label class="form-check-label" for="gridRadios1" value="boy">男</label>
                    </div>
                    <div class="form-check form-check-inline" style="margin-left: 6%">
                      <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" :value="true" v-model="stuInfo.ssex">
                      <label class="form-check-label" for="gridRadios2" value="girl" >女</label>
                    </div>
                  </div>
                </div>
              </fieldset>
              <div class="form-group row">
                <label for="inputPhone" class="col-sm-2 col-form-label">手机号：</label>
                <div class="col-sm-4">
                  <input type="number" class="form-control" id="inputPhone" placeholder="请输入手机号" v-model="stuInfo.sphone">
                </div>
              </div>
              <div class="form-group row">
                <label for="inputStudentID" class="col-sm-2 col-form-label">学号：</label>
                <div class="col-sm-4">
                  <input type="number" class="form-control" id="inputStudentID" placeholder="请输入学号" v-model="stuInfo.snumber">
                </div>
              </div>
              <div class="form-group row">
                <label for="inputIntroduction" class="col-sm-2 col-form-label">个人介绍：</label>
                <div class="col-sm-4">
                  <textarea rows="4" class="form-control" id="inputIntroduction" placeholder="请输入个人介绍" v-model="stuInfo.sprofile"></textarea>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-5 text-center" style="margin-top: 3%;margin-left: 2%">
                  <input value="保存"  class="btn btn-primary" style="width: 100px;background-color: #1089f0;border-radius: 25px;" @click="submit(stuInfo)"/>
                </div>
              </div>
            </form>
          </div>
        </div>
        <!--我的头像-->
        <div class="tab-pane fade" id="pills-two" aria-labelledby="pills-contact-tab">
          <div class="col-5 alert alert-success text-center" role="alert" style="position:absolute;margin-left: 15%;top: 70%" v-if="successSave">
            保存个人资料成功
          </div>
          <div class="container" style="margin-top: 8%;margin-bottom: 8%;display: flex;justify-content: center">
            <span style="color: #333333;">头像:</span>
            <image-uploader-plus style="margin-left: 3%" v-model="stuInfo.scover" :fixed="false"></image-uploader-plus>
          </div>
          <div class="container" style="text-align: center;margin-bottom: 10%">
            <input value="保存"  class="btn btn-primary" style="width: 100px;background-color: #1089f0;border-radius: 25px;" @click="submit(stuInfo)"/>
          </div>
        </div>
        <!--密码管理-->
        <div class="tab-pane fade" id="pills-three"  aria-labelledby="pills-contact-tab">
          <div class="col-5 alert alert-success text-center" role="alert" style="position:absolute;margin-left: 20%;top: 85%" v-if="passwordAlert">
            {{passwordMes}}
          </div>
          <div class="container" style="margin-top: 6%;margin-bottom: 20%;margin-left: 25%">
            <form style="color: #333333;font-family: MicrosoftYaHei,sans-serif;">
              <div class="form-group row">
                <label for="inputOld" class="col-sm-2 col-form-label">旧密码：</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="inputOld" placeholder="请输入旧密码" v-model="passwordList[0].password">
                </div>
              </div>
              <div class="form-group row">
                <label for="inputNew" class="col-sm-2 col-form-label">新密码：</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="inputNew" placeholder="请输入新密码" v-model="passwordList[0].newPassword">
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-5 text-center" style="margin-top: 2%;margin-left: 2%">
                  <input value="保存" class="btn btn-primary" style="width: 110px;background-color: #1089f0;border-radius: 25px;" @click="resetPassword(passwordList)"/>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import {imagesGetApi} from "../../../api/modules/images";
// import {passwordEditApi, stuInfoEditApi} from "../../../api/modules/auth";

export default {
  name: 'personal',
  data () {
    return {
      imgSrc: '',
      stuInfo: this.$store.getters.user.Info,
      successSave: false,
      passwordAlert: false,
      passwordMes:'',
      passwordList: [{
       'newPassword': '',
      'password': '',
      'username': this.$store.getters.user.username
      } ],
    }
  },
  mounted() {
  },
  methods: {

    // //修改资料
    // submit(stuInfo){
    //   stuInfoEditApi(stuInfo).then(result => {
    //     if(result.message === '请求成功'){
    //       this.$store.dispatch('setUser', { username: this.$store.getters.user.username,Info: stuInfo })
    //      this.$successMsg('保存个人资料成功')
    //     }
    //   })
    // },
    // // 修改密码
    // resetPassword(passwordList){
    //   passwordEditApi(passwordList[0]).then(result => {
    //     if(result.message === '账号或密码错误.'){
    //       this.passwordMes = result.message
    //       this.$errorsMsg(this.passwordMes)
    //       const interval = setInterval(() => {
    //         this.passwordAlert = false
    //       }, 2000)
    //     }else if(result.code === 200){
    //       this.passwordMes = result.data
    //       this.$successMsg('修改密码成功')
    //       const interval = setInterval(() => {
    //         this.$router.push({ path: '/login' })
    //       }, 3000)
    //     }
    //   })
    // },
  }
}
</script>

<style lang="scss">
  .container{
    .nav{
      margin-top: 2%;
      margin-bottom: 3%;
      .nav-item{
        a{
          color: #333333;
          font-family: MicrosoftYaHei,sans-serif;
        }
        .active{
          color: #1089f0;
        }
      }
    }
  }
</style>
