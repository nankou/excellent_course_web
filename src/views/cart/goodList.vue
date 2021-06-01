<template>
  <div class="container">
    <div class="jumbotron">
      <h1 class="display-4">您好！欢迎来到nankou的商城</h1>
      <p class="lead">您可以在下面挑选喜欢的商品进入购物车，并且进行结算。</p>
      <a class="btn btn-danger btn-lg" href="/cart" role="button">进入购物车</a>
    </div>
<!--    商品列表 使用card来实现-->
    <div class="card-deck" v-for="item in 3">
      <div class="card">
        <img src="@/assets/cart/01.webp" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">卡西欧手表</h5>
          <p class="card-text">casio旗舰店卡西欧官网女士手表潮流透明地球仪礼盒 G-SHOCK</p>
          <p class="card-text"><small class="text-muted">casio旗舰店</small></p>
          <button type="button" class="btn btn-danger">加入购物车</button>
        </div>
      </div>
      <div class="card">
        <img src="@/assets/cart/02.webp" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">浪琴手表</h5>
          <p class="card-text">Longines浪琴 官方正品军旗系列女士机械表瑞士手表女腕表 官网</p>
          <p class="card-text"><small class="text-muted">longines浪琴官方旗舰店</small></p>
          <button type="button" class="btn btn-danger">加入购物车</button>
        </div>
      </div>
      <div class="card">
        <img src="@/assets/cart/03.webp" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">聚利时手表</h5>
          <p class="card-text">聚利时手表女简约气质学生小方表复古方形防水石英女士表JA-1286</p>
          <p class="card-text"><small class="text-muted">聚利时旗舰店</small></p>
          <button type="button" class="btn btn-danger">加入购物车</button>
        </div>
      </div>
      <div class="card">
        <img src="@/assets/cart/02.webp" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">浪琴手表</h5>
          <p class="card-text">Longines浪琴 官方正品军旗系列女士机械表瑞士手表女腕表 官网</p>
          <p class="card-text"><small class="text-muted">longines浪琴官方旗舰店</small></p>
          <button type="button" class="btn btn-danger">加入购物车</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "goodList"
  }
</script>

<style lang="scss" scoped>
.jumbotron{
  margin: 20px;
}
.card-deck{
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
  .card{
    img{
      width: 240px;
      height: 250px;
    }
  }
}

</style>
