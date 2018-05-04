<template>
  <div id="app">
    <div class="header">
      <div class="container">
        <div class="logo-wrapper">
          <a>
            <img class="logo" src="../src/assets/images/cloud.png">
          </a>
          <h1>云顶开源社区</h1>
        </div>
        <div class="header-right" >
          <p class="border-right"><a>注册</a></p>
          <p v-if = "showNav"><router-link to='/login'>登录</router-link></p>
          <p v-if ="!showNav"><router-link to='/index'>首页</router-link></p>
          <p><a>邮箱</a></p>
        </div>
      </div>
    </div>
    <div class="nav" v-if = "showNav">
      <div class="container">
        <ul class="nav-info">
        <li>
          <router-link to="/index">首页</router-link>
        </li>
        <li>
          <a href="openProject.html">开源项目</a>
        </li>
        <li>
          <a href="interlocution.html">问答</a>
        </li>
        <li>
          <router-link to="/blog">博客</router-link>
        </li>
      </ul>
      <div class="searchbar-wrapper">
        <input type="text" name="search">
        <i></i>
      </div>
      </div>
    </div>
    <router-view></router-view>
    <div class="footer">
      <div class="container">
        <div class="footer-wrapper">
          <div class="footer-content">
            <div class="logo-wrapper">
              <a>
                <img class="logo" src="../src/assets/images/cloud.png">
              </a>
              <h1>云顶开源社区</h1>
            </div>
          </div>
          <div class="footer-content">
            <div class="ftContTitle">
              <p>合作单位</p>
            </div>
            <div class="ftContInfo">
              <a>华为</a>
              <a>浪潮</a>
              <a>APPLE</a>
              <a>曙光</a>
              <a>联想</a>
              <a>阿里</a>
            </div>
          </div>
          <div class="footer-content">
            <div class="ftContTitle">
              <p>友情链接</p>
            </div>
            <div class="ftContInfo">
              <a>太原理工大学</a>
              <a>开源中古欧</a>
              <a>太原理工大学大数据学院</a>
            </div>
          </div>
         </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>云顶开源 晋公安网备 1401060483947583937474229号</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      showNav: true
    }
  },
  created () {
  },
  watch: {
    '$route' (to, from) {
      let toPath = to.path.split('/')
      if(toPath[1]=='login') {
        this.showNav = false
      } else if (toPath[1]=='index') {
        this.showNav = true
      }
    }
  }
}
</script>

<style>
  /*@import '../src/assets/css/reset.css'*/
  #app{
    width: 100%;
    background-color: #2a2f32;
    color: #fff;
  }
  .container{
    width: 1100px;
    margin: 0 auto;
  }
  .header{
    width: 100%;
    height: 53px;
    box-sizing: border-box;
    padding-left: 14px;
    padding-right: 20px;
    border-bottom: 1px solid #4c5052;
    overflow: hidden;
  }
  .header .logo-wrapper{
    float: left;
    width: 210px;
    height: 53px;
    line-height: 53px;
    overflow: hidden;
  }
  .header .logo-wrapper a{
    width: 35px;
    height: 24px;
    margin-top: 6px;
    margin-bottom: 10px;
    margin-right: 10px;
    display: block;
    float: left;
  }
  .header .logo-wrapper a .logo{
    width: 100%;
    height: 100%;
  }
  .header .logo-wrapper h1{
    font-size: 18px;
    color: #fff;
    float: left;
    font-weight: 100;
  }
  .header .header-right{
    float: right;
    height: 53px;
    line-height: 53px;
    width: 200px;
    box-sizing: border-box;
  }
  .header .header-right p{
    width: 30%;
    display: inline-block;
    text-align: center;
    line-height: 35px;
  }
  .header .header-right p a{
    display: block;
    width: 100%;
    height: 100%;
  }
  .nav{
    width: 100%;
    overflow: hidden;
    height: 80px;
    padding-right: 35px;
    box-sizing: border-box;
    line-height: 80px;
  }
  .nav .nav-info{
    width: 490px;
    text-align: center;
    font-size: 0;
    color: #fff;
    float: left;
  }
  .nav .nav-info li{
    width: 25%;
    font-size: 16px;
    display: inline-block;
  }
  .nav .nav-info li a{
    width: 100%;
    display: block;
    color: #fff;
    position: relative;
  }
  .nav .nav-info li a:hover::after{
    content: '';
    position: absolute;
    height: 3px;
    width: 68px;
    background-color: #30f1c6;
    bottom: 0px;
    left: 50%;
    margin-left: -34px;
  }
  .searchbar-wrapper{
    float: right;
    width: 225px;
    position: relative;
  }
  .searchbar-wrapper input{
    width: 100%;
    height: 36px;
    line-height: 36px;
    border-radius: 4px;
    background-color: #3d4144;
    border:0 solid transparent;
  }
  .searchbar-wrapper i{
    position: absolute;
    right: 6px;
    top: 50%;
    margin-top: -10px;
    width: 20px;
    height: 20px;
    background-color: #fff;
  }
  
  .footer{
    width: 100%;
    padding: 25px 0;
    background-color: #373d41;
  }
  .footer-wrapper{
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
  .footer .footer-content{
    width: 30%;
  }
  .footer .logo-wrapper{
    text-align: center;
    margin-top: 15px;
  }
  .footer .logo-wrapper a{
    display: block;
    margin-bottom: 10px;
  }
  .footer .footer-content .ftContTitle{
    line-height: 22px;
    font-size: 20px;
    margin-bottom: 20px;
  }
  .footer .footer-content .ftContInfo{
  }
  .footer .footer-content .ftContInfo a{
    display: inline-block;
    margin-right: 30px;
    margin-bottom: 10px;
  }
  .footer .footer-content .ftContInfo a:hover{
    color: #30e9c0;
  }
  .footer-bottom{
    line-height: 40px;
    text-align: center;
    font-size: 12px;
  }
  @media screen and (max-width: 1100px){
    .container{
      width: auto;
    }
  }
</style>
