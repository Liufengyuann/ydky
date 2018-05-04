<template>
	<div class="indexWrapper">
		 <div class="banner">
      <img src="./banner.png">
    </div>
    <div class="column-wrapper">
      <div class="container">
        <div class="titleSec">
        <p>最新资讯</p>
        </div>
      <div class="lateinfo-content">
        <div class="info-wrapper">
        <div class="infoTitle">
          <p>项目开源</p>
          <a>more</a>
        </div>
        <ul class="infoList">
          <li v-for = "item in openPro" @click = "setStyle(updateLog,openPro,item)" :class = "{'listactive':item.listActive,'unlistactive':!item.listActive}">
            <p>{{item.title}}</p>
            <span>{{item.date}}</span>
          </li>
        </ul>
      </div>
      <div class="info-wrapper">
        <div class="infoTitle">
          <p>日志更新</p>
          <a>more</a>
        </div>
        <ul class="infoList">
          <li v-for = "item in updateLog" @click = "setStyle(openPro,updateLog,item)" :class = "{'listactive':item.listActive,'unlistactive':!item.listActive}">
            <p>{{item.title}}</p>
            <span>{{item.date}}</span>
          </li>
        </ul>
      </div>
      </div>
      </div>
    </div>
    <div class="column-wrapper">
      <div class="container">
        <div class="titleSec">
        <p>答疑解惑</p>
        </div>
        <div class="interlocution-tab">
          <interTab :interLoct = "interLoct"></interTab>
        </div>
      </div>
    </div>
	</div>
</template>
<script type="text/javascript">
import interTab from '../interTab/interTab.vue'
	export default{
		name: 'index',
		components: {
			interTab
		},
		data () {
			return {
				listActive: false,
				openPro: {},
				updateLog: {},
				interLoct: []
			}
		},
		created () {
			this.$http.get('http://localhost:3000/openPro').then(response => {
				response = response.body
				this.openPro = response.data
			})
			this.$http.get('http://localhost:3000/blog').then(response => {
				response = response.body
				this.updateLog = response.data
			})
			this.$http.get('http://localhost:3000/interlocution').then(response => {
				response = response.body
				this.interLoct = response.data
			})
		},
		methods: {
			setStyle: function (lastobj,thisobj,item) {
				this.$nextTick(() => {
					lastobj.forEach((item) =>{
						this.$set(item,'listActive',false)
					})
					thisobj.forEach((item) =>{
						this.$set(item,'listActive',false)
					})
					this.$set(item,'listActive',true)
				})
			}
		}
	}
</script>
<style type="text/css">
	.banner{
    width: 100%;
    position: relative;
    padding-top: 40%;
  }
  .banner img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%; 
  }
  .column-wrapper{
    width: 100%;
    padding-top: 35px;
    padding-bottom: 30px;
  }
  .titleSec{
    margin: 0 auto;
    text-align: center;
    margin-bottom: 74px;
  }
  .titleSec p{
    font-size: 30px;
  }
  .lateinfo-content{
    display: flex;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    flex-wrap: wrap;
  }
  .info-wrapper{
    width: 45%;
    display: inline-block;
  }
  .infoTitle{
    height: 50px;
    line-height: 50px;
    width: 100%;
    margin-bottom: 18px;
    overflow: hidden;
  }
  .infoTitle p{
    font-size: 26px;
    border-left: 2px solid #30f1c6;
    padding-left: 6px;
    float: left;
  }
  .infoTitle a{
    float: right;
  }
  .infoList li {
    width: 100%;
    font-size: 0;
    margin-bottom: 14px;
  }
  .listactive{
    color: #30f1c6;
  }
  .unlistactive{
    color: #fff;
  }
  .infoList li p{
    width: 80%;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .infoList li span{
    width: 20%;
    display: inline-block;
    text-align: right;
    vertical-align: top;
  }
  @media screen and (max-width: 1100px){
    .container{
      width: auto;
    }
  }
  @media screen and (max-width: 900px){
    .tab-content ul li{
      width: 48% !important;
    }
    .info-wrapper{
      width: 90%;
      margin-bottom: 10px;
    }
    .titleSec{
      margin-bottom: 20px;
    }
    .column-wrapper{
      padding-bottom: 0;
    }
  }
</style>