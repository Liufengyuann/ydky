<template>
	<div class="interTab">
          <ul class="tab-nav">
              <li v-for = "(name,index) in tabsName" @click = "tabList(index)">
              	<a>{{name}}</a>
              </li>
          </ul>
          <div class="tab-content" ref="tabContent">
          	<transition-group tag="div" :name = "tabchange">
          		<ul v-for = "(items,index) in interLoct" class="tabContent-hook" :key = "items.type" v-if = "index==curtIndex">
            	<li v-for = "item in items.list">
            		<div class="items-top">
            			<div class="portraitWrapper">
            	         	<img :src="item.user_portrait">
            			</div>
            			<div class="itemsinfoWrapper">
            				<p>{{item.user_nick}}</p>
            				<span>{{item.onload_date}}</span>
            				<span>{{item.onload_time}}</span>
            			</div>
            		</div>
            		<div class="items-bottom">
            			<span>{{item.eassay_title}}</span>
            			<p>{{item.eassay_content}}</p>
            			<div class="bottom-icons">
            				<i></i>
            				<span>{{item.views}}</span>
            				<i></i>
            				<span>{{item.discuss}}</span>
            			</div>
            		</div>
            	</li>
            </ul>
          	</transition-group>
          </div>
	</div>
</template>
<script type="text/javascript">
import vue from 'vue'
	export default {
		props: {
			interLoct: {
				type: Array
			}
		},
		data () {
			return {
				tabsName: ["编程","web","移动开发","ios代码库","程序开发","开发工具","数据库","其他开源"],
				tabIndex: 0,
				tabUL:[],
				tabchange: '',
				curtIndex: 0
			}
		},
		created () {

		},
		mounted () {
		},
		updated () {
			this.$nextTick(() => {
				let tabList = this.$refs.tabContent.getElementsByClassName('tabContent-hook')
					for(var i=0;i<tabList.length;i++){
						this.tabUL.push(tabList[i])
						vue.set(this.tabUL[i],'ifshow',false)
				}
			})
		},
		computed: {
		},
		methods: {
			tabList (index) {
				let dir = index - this.tabIndex
				this.curtIndex = index
				if(dir>0){
					this.tabchange = 'tabLeft'
				}else{
					this.tabchange = 'tabRight'
				 }	
				this.tabIndex = index
			}
		},
		watch : {
		}
	}
</script>
<style type="text/css" scoped>
    .tabLeft-enter{
    	transform: translateX(800px);
    	opacity: 0;
    }
    .tabLeft-leave,.tabRight-leave{
    	transform: translateX(0);
    	opacity: 0;
    }
    .tabLeft-leave-active,.tabLeft-enter-active,.tabRight-enter-active,.tabRight-leave-active{
    	transition: all .3s ease;
    }
    .tabRight-enter{
    	opacity: 0;
    	transform: translateX(-800px);
    }
    .interTab{
    	overflow: hidden;
    }
    .tab-nav{
    width: 70%;
    margin: 10px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    }
    .tab-nav li{
    height: 46px;
    line-height: 46px;
    text-align: center;
    padding:0 4px;
    }
    .tab-nav li a{
    width: 100%;
    display: block;
    color: #fff;
    position: relative;
    }
    .tab-nav li a:hover::after{
    content: '';
    position: absolute;
    height: 3px;
    width: 48px;
    background-color: #30f1c6;
    bottom: 0px;
    left: 50%;
    margin-left: -24px;
    }
    .tab-content{
    	width: 100%;
    	overflow: hidden;
    	position: relative;
    	height: 220px;
    }
    .tab-content ul {
    	position: absolute;
    	width: 100%;
    	top: 0;
    	left: 0;
    	overflow: hidden;
    }
    .tab-content ul li{
      height: 219px;
      width: 20%;
      float: left;
    }
    .items-top{
    	width: 90%;
    	height: 80px;
    	line-height: 80px;
    	box-sizing: border-box;
    	padding:17px 0 17px 6px;
    	background-color: #2f3130;
    	margin: 0 auto;
    }
    .items-top .portraitWrapper{
    	width: 45px;
    	height: 45px;
    	border-radius: 50%;
    	overflow: hidden;
    	line-height: 45px;
    	vertical-align: top;
    	display: inline-block;
    }
    .items-top .portraitWrapper img{
    	width: 100%;
    	height: 100%;
    	background-color: #000;
    }
    .items-top .itemsinfoWrapper {
    	display: inline-block;
    	vertical-align: top;
    	text-align: left;
    	padding: 0 6px;
    	box-sizing: border-box;
    }
    .items-top .itemsinfoWrapper p,span{
    	font-size: 14px;
    	line-height: 14px;
    	display: block;
    	margin-bottom: 10px;
    }
    .items-top .itemsinfoWrapper span{
    	float: left;
    	margin-right: 10px; 
    }
    .items-bottom {
    	width: 90%;
    	margin: 0 auto;
    	background-color: #555756;
    	padding:0 10px;
    	box-sizing: border-box;
    }
    .items-bottom span{
    	font-size: 10px;
    	display: inline-block;
    	line-height: 10px;
    }
    .items-bottom span:nth-child(1){
    	color: #000;
    }
    .items-bottom p{
    	font-size: 12px;
    	line-height: 16px;
    	letter-spacing: 2px;
    	text-overflow: ellipsis;
    	overflow: hidden;
    	display: -webkit-box;
    	-webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }
    .bottom-icons{
    	text-align: right;
    	padding-right: 10px;
    }
</style>