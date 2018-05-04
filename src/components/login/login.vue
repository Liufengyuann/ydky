<template>
	<div class="loginWrapper">
		<vue-particles class="particlesBox" color="#28516d" shapeType="star" linesColor="#29686d" :particlesNumber="180"></vue-particles>
		<div class="loginBox">
			<p class="loginBox-title">
				用户登录
			</p>
			<el-form :model="loginForm"  label-width="100px" :rules = "rules" ref="loginForm">
				  <el-form-item prop="username" label-width = 0>
				  	<el-input v-model="loginForm.username" class = "loginInput" placeholder="邮箱/手机号" prop = "username"></el-input>
				  </el-form-item>
				  <el-form-item prop="password" label-width = 0 class = "formItem">
				  	<el-input v-model="loginForm.password" type="password" class = "loginInput" placeholder="请输入密码" prop = "password"></el-input>
				  </el-form-item>
				<el-button type="info" style = "width: 100%;background-color:#000" @click="submitForm('loginForm')">登录</el-button>
			</el-form>
			<div class="loginForm_bottom">
				 <el-checkbox v-model="checked">记住密码</el-checkbox>
				 <a>忘记密码</a>
				 <a>登录注册</a>
			</div>
			<div class="otherLogin">
				<p>其他登录方式</p>
				<div class="otherLogin_icon">
					<a><i>新浪</i></a>
					<a><i>微信</i></a>
					<a><i>qq</i></a>
					<a><i>in</i></a>
				</div>
			</div>
			<div class = "ewmTriggle" @click = "ewmChange" ref="ewmTriggle">
			   <transition name="showewmImg">
			   	<img v-if = "showewm" class="ewmImg" src="./ewm.jpg">
				<img v-if = "!showewm" class="ewmImgActive" src="./ewm.jpg">
			   </transition>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
import Vue from 'vue'
import VueParticles from 'vue-particles'
var schema = require('async-validator');
Vue.use(VueParticles)
	export default{
		data() {
			return{
				loginForm: {
					username: '',
					password: ''
				},
				showewm:true,
				checked: true,
				rules: {
					username: [
						{ required: true, message: '请输入用户名', trigger: 'blur' }
					],
					password: [
						{ required: true, message: '请输入密码', trigger: 'blur' }
					]
				}
			}
		},
		methods: {
			submitForm(formName) {
              this.$refs[formName].validate((valid) => {
                if (valid) {
                	alert("跳转页面")
                } else {
                return false;
                } //var reg=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;  
              });
            },
            ewmChange() {
            	if(this.showewm){
            	this.$refs.ewmTriggle.className='ewmTriggleActive'
            	this.showewm = !this.showewm
            	}else {
            		this.$refs.ewmTriggle.className='ewmTriggle'
            		this.showewm = !this.showewm
            		
            	}
            }
		}
	}
</script>
<style type="text/css" scoped>
	.loginBox{
		width: 380px;
		height: 300px;
		overflow: hidden;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		background-color: #fff;
		padding:23px 20px;
		box-shadow: 0px 0px 5px #000
	}
	.loginBox-title{
		margin: 0px 0 30px;
		font-size: 20px;
		width: 100%;
		text-align: center;
		color: #000;
	}
	.loginInput{
		margin-bottom: 20px;
	}
	.loginForm_bottom{
		overflow: hidden;
		margin-top: 10px;
		margin-bottom: 10px;
	}
	.loginForm_bottom a{
		color: #000;
		display: block;
		float: right;
		margin-left: 10px;
		font-size: 12px;
	}

	.otherLogin p{
		display: inline-block;
		font-size: 12px;
		color: #000
	}
	.otherLogin_icon{
		display: inline-block;
	}
	.otherLogin_icon a,i{
		color: #000;
		font-size: 12px;
	}
	.fromItem{
		height: 40px;
	}
	.ewmTriggle{
		position: absolute;
		top: -20px;
		right: -20px;
		width: 80px;
		height: 80px;
		transform: rotate(45deg);
		background-color: #fff;
		overflow: hidden;
		transition: 0.3s all ease;

	}
	.ewmImg{
		position: absolute;
		width: 60px;
		transform: rotate(-45deg);
		height: 60px;
		background-color: teal;
		top: 50px;
		right: 10px;
	}
	.ewmTriggleActive{
		width: 100%;
		height: 100%;
		transform: rotate(0);
		top: 0;
		right: 0;
		position: absolute;
		background-color: #fff;
		z-index: 999;
		transition: 0.3s all ease;
	}
	.ewmImgActive{
		transform: rotate(0);
		width: 200px;
		height: 200px;
		transform: translate(-50%,-50%);
		top: 50%;
		left: 50%;
		position: absolute;
		opacity: 1;
	}
	/*.showewmImg-enter{
		position: absolute;
		width: 60px;
		transform: rotate(-45deg);
		height: 60px;
		background-color: teal;
		top: 50px;
		right: 10px;
	}
	.showewmImg-leave{
		transform: rotate(0);
		width: 80%;
		height: 80%;
		transform: translate(-50%,-50%);
		top: 50%;
		left: 50%;
		position: absolute;
		opacity: 1;
	}
	.showewmImg-enter-active,.showewmImg-leave-active{
		transition: 0.3 all ease;
	}*/
</style>