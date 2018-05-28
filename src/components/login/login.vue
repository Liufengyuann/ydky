<template>
	<div class="loginWrapper">
		<vue-particles class="particlesBox" color="#28516d" shapeType="star" linesColor="#29686d" :particlesNumber="180"></vue-particles>
		<div class="box" v-if="$store.state.showLogin">
			<p class="box-title">
				用户登录
			</p>
			<el-form :model="loginForm"  label-width="100px" :rules = "loginrules" ref="loginForm">
				<el-form-item prop="username" label-width = 0>
					<el-input v-model="loginForm.username" class = "loginInput" placeholder="邮箱/手机号" prop = "username"></el-input>
				</el-form-item>
				<el-form-item prop="password" label-width = 0 >
					<el-input v-model="loginForm.password" type="password" class = "loginInput" placeholder="请输入密码" prop = "password"></el-input>
				</el-form-item>
				<el-form-item label-width = 0 prop="captcha">
					<el-input v-model.number="loginForm.captcha" class = "loginInput" placeholder = "验证码" style = "width:40%;float:left" prop="captcha"></el-input>
					<div ref = "captchaWrapper" style="display:block;width:40%;float:right;height:100%">
					</div> 
				</el-form-item>
				<el-button type="info" style = "width: 100%;background-color:#000" @click="submitForm('loginForm')">登录</el-button>
			</el-form>
			<div class="loginForm_bottom">
				 <el-checkbox v-model="checked">记住密码</el-checkbox>
				 <a>忘记密码</a>
				 <a>登录注册</a>
			</div>
			<!-- 二维码 -->
			<!-- <div class = "ewmTriggle" @click = "ewmChange" ref="ewmTriggle">
			   <transition name="showewmImg">
			   	<img v-if = "showewm" class="ewmImg" src="./ewm.jpg">
				<img v-if = "!showewm" class="ewmImgActive" src="./ewm.jpg">
			   </transition>
			</div> -->
		</div>
		<div class="box" v-if="!$store.state.showLogin">
			<el-form :model="registerForm" status-icon :rules="registerrules" ref="registerForm" label-width="100px" class="demo-ruleForm">
				<el-form-item prop="phone" label-width = 0>
					<el-input v-model="registerForm.phone" class = "loginInput" placeholder = "请输入手机号" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item prop="nickname" label-width = 0>
					<el-input v-model="registerForm.nickname" class = "loginInput" placeholder = "请输入昵称" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label-width = 0 prop="password" >
					<el-input type="password" v-model="registerForm.password" class = "loginInput" auto-complete="off" placeholder = "请输入密码"></el-input>
				</el-form-item>
				<el-form-item label-width = 0 prop="checkpass">
					<el-input type="password" v-model="registerForm.checkpass" class = "loginInput" auto-complete="off" placeholder="请再次输入密码"></el-input>
				</el-form-item>
				<el-form-item label-width = 0 prop="email">
					<el-input type="text" v-model="registerForm.email" class = "loginInput" auto-complete="off" placeholder="请填入邮箱地址"></el-input>
				</el-form-item>
				<el-form-item label-width = 0 prop="captcha">
					<el-input v-model="registerForm.captcha" class = "loginInput" placeholder = "验证码" style = "width:40%;float:left"></el-input>
					<span class="changeCaptcha" @click="getcaptcha">换一换</span>
					<div ref = "captchaWrapper" style="display:block;width:40%;float:right;height:100%">
					
					</div> 
				</el-form-item>
				<el-checkbox v-model="checked" class= "register_checkbox">已经阅读并同意<a>协议</a></el-checkbox>
				<el-button type="primary" @click="submitForm('registerForm')" style = "width: 100%;background-color:#000">注册</el-button>
			</el-form>
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
			var password = (rule, value, callback) => {
				if(!value){
					return callback(new Error('请输入6位密码'))
				}else{
					let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9a-zA-Z]{6}$/
					if(!reg.test(value)){
						return callback(new Error('请输入正确密码'))
					}else {
						callback()
					}
				}
			}
			var checkpass = (rule, value, callback) => {
				if (!value) {
				return callback(new Error('请再次输入密码'))
				}else {
					if(value!==this.registerForm.password){
						return callback(new Error('两次输入不同'))
					}else {
						callback()
					}
				}
			}
			return{
				captchaApi:'http://39.106.122.7/v1/login/captcha',
				loginApi:'http://39.106.122.7/v1/login',
				registerApi:'http://39.106.122.7/v1/register',
				loginForm: {
					username: '',
					password: '',
					captcha: ''
				},
				showewm:true,
				checked: true,
				loginrules: {
					username: [
						{ required: true, message: '请输入用户名', trigger: 'blur' }
					],
					password: [
						{ required: true, message: '请输入密码', trigger: 'blur' }
					],
					captcha: [
						{ required:true, massage:'请输入验证码', trigger: 'blur'}
					]
				},
				registerForm: {
					phone: '',
					nickname: '',
					password: '',
					checkpass: '',
					captcha: '',
					email:'',
				},
				registerrules: {
					// phone: [
					// 	{ required: true, message:'请输入手机号', trigger: 'blur'},
					// 	{ min:11,max:11,message:"请输入正确手机号",trigger:'blur'}
					// ],
					// nickname: [
					// 	{ required: true, message:'请输入昵称', trigger: 'blur'},
					// 	{ min:3,max:5, message:'请输入三到五位',trigger:'blur'}
					// ],
					// captcha: [
					// 	{ required:true, massage:'请输入验证码', trigger: 'blur'}
					// ],
					// password: [
					// 	{ validator:password,trigger:'blur'}
					// ],
					// checkpass: [
					// 	{ validator: checkpass,trigger:'blur'}
					// ],
					// email: [
					// 	{ required: true, message: '请填入邮箱地址',trigger:'blur'}
					// ]
				}
			}
		},
		created () {
			this.getcaptcha()
			//登录
		},
		methods: {
			getcaptcha(){
				this.$http.get(this.captchaApi).then((response)=>{
				let res = response.body
				if(res.status){
					let result = res.result
					this.$refs.captchaWrapper.innerHTML = ""
					this.$refs.captchaWrapper.innerHTML += result.img
					console.log('captchawrapper:ok')
				}
				})
			},
			login(){
				let login = {
					username: this.loginForm.username,
					password: this.loginForm.password,
					captcha : this.loginForm.captcha
				}
				console.log(login.username)
				this.$http.post(this.loginApi,login).then((response)=>{
                		let res = response.body
                		if(res.code==1){
                			console.log(res.code)
                				alert("跳转页面")
                		}
                	},(response)=>{
                		let res = response.body
                		console.log('请求失败')
                	})
			},
			register(){
				let register = {
					"phone": this.registerForm.phone,
					"username": this.registerForm.nickname,
					"password": this.registerForm.password,
					"captcha": this.registerForm.captcha,
					"email":this.registerForm.email
				}
				this.$http.post(this.registerApi,register).then((response)=>{
						let res = response.body
						if(res.code==1){
							console.log(res.code)
							alert("跳转到邮箱页面")
						}
						if(res.code==-1){
							alert(res.message)
						}
					},(response)=>{
						console.log('请求失败')
					})
			},
			submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                if (valid) {
                	if(formName=='loginForm'){
                		this.login()
                	}else if (formName=='registerForm') {
                		this.register()
                	}
                } else {
                return false;
                } 
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
		},
		watch: {
			'$route' (to,from) {
				console.log(from)
				let fromPath = from.path.split('/')
					if (fromPath[1] == 'index')
						{console.log(1)
				} 
			}
		}
	}
</script>
<style type="text/css" scoped>
	a{
		color: red;
	}
	.loginWrapper{
		position: relative;
		padding: 60px 0;
	}
	.box{
		width: 380px;
		overflow: hidden;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		background-color: #fff;
		padding:23px 20px;
		box-shadow: 0px 0px 5px #000
	}
	.box-title{
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
	.register_checkbox{
		margin-bottom: 10px;
	}
	.changeCaptcha{
		color: #000;
		float: left;
		margin-left: 10px;
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