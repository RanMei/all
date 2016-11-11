<template>
	<div class="Signin wrapper">
		<div class="shade__">
			<div></div>
		</div>
		<div class="panel__">
			<div class="register">
				<div class="register-center">
					<div class="register-header">
						<h1>新会员注册</h1>
					</div>
					<form class='register-form'>
						<input type="text" name="mobile" placeholder="请输入11位手机号" 
						v-model="signup_form.mobile"
						:class="state.mobile"
						@focus="onFocus('mobile')"
						@blur="check_mobile"/>
						<p class="info">{{info.mobile}}</p>
						<input type="password" name="password" placeholder="密码（6-20位字母、数字与符号的组合）"
						v-model="signup_form.password"
						:class="state.password"
						@focus="onFocus('password')"
						@blur="check_password"/>
						<p class="info">{{info.password}}</p>
						<input type="password" name="password2" placeholder="确认密码"
						:class="state.password2"
						@focus="onFocus('password2')"
						@blur="check_password2"/>
						<p class="info">{{info.password2}}</p>
						<input type="text" name="verif" placeholder="请输入验证码"/>
						<p class="info"></p>

						<div class="check_b_container agree">
							<div class="checkbox_"
							:class=" signup_form.agreed?'checked':'' "
							@click="toggle">
								<div class="square"
								:style=" 'transform:'+(signup_form.agreed?'scale(1)':'scale(0)') "></div>
							</div>
							<p>已同意《飞越太平洋服务条款》</p>
						</div>

						<div class="btn__ register-button">注 册</div>
					</form>
				</div>
			</div>
			<div class="middle-line"></div>
			<div class="login">
				<div class="login-center">
					<div class="login-header">
						<h1 class="hydl">会员登录</h1>
					</div>
					<form class="login-form">
						<input type="text" name="username" placeholder="请输入您的用户名"
						v-model="signin_form.id"/>
						<p class="info"></p>
						<input type="password" name="password" placeholder="请输入您的密码"
						v-model="signin_form.password"/>
						<p class="info"></p>

						<div class="check_b_container remember_me">
							<div class="checkbox_"
							:class=" signin_form.remember_me?'checked':'' "
							@click="toggle2">
								<div class="square"
								:style=" 'transform:'+(signin_form.remember_me?'scale(1)':'scale(0)') "></div>
							</div>
							<p>下次自动登录</p>
						</div>

						<div class="btn__ login-button"
						@click="LOGIN">登 录</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
.Signin {
	@grey: #a5a5a5;
	@blue: #2B9DD5;
	@blue-darker: #0379C8;
	@green: #69B91F;
	@red: #D2291E;

	overflow: hidden;
	background: linear-gradient(#E2E2E4,#E0E0E2);

	.shade__ {
		height: 100px;
		overflow: hidden;
		>div {box-shadow:0 0 50px 35px grey;}
	}

	.panel__ {
		position: relative;
		width: 1000px; height: 600px;
		margin: auto; margin-bottom: 150px;
		border-radius: 5px;
		background: white;
		box-shadow: 0 0 10px lightgrey;
		overflow: hidden;
		input[type="text"],input[type="password"] {
			box-sizing: border-box;
			width: 380px; height: 52px;
			border-radius: 5px;
			border: 1px solid @grey;
			text-indent: 10px;
			font-size: 16px;
		}
		input {
			outline: none;
			&.active {
				border: 1px solid @blue!important;
				box-shadow: 0 0 2px @blue;
			}
			&.success {
				border: 1px solid @green!important;
				box-shadow: 0 0 2px @green;
			}
			&.error {
				border: 1px solid @red!important;
				box-shadow: 0 0 2px @red;
			}
		}
	}
	
	.info {
		height: 20px;
		color: #D2291E;
		line-height: 20px;
		text-indent: 5px;
	}
	.middle-line {
		position: absolute; top: 0; left: 50%;
		width: 1px; height: 100%;
		background: linear-gradient(white,lightgrey,white);
	}

	.check_b_container {
		overflow: hidden;
		.checkbox_ {
			float: left;
			box-sizing: border-box;
			width: 20px; height: 20px;
			margin-right: 10px;
			border: 2px solid @grey;
			cursor: pointer;
			&.checked {
				border: 2px solid @blue;
			}
			.square {
				width: 10px; height: 10px;
				margin: 3px 0 0 3px;
				background: @blue;
				transition: 0.1s;
			}
		}
		p {
			float: left;
			height: 20px; line-height: 20px;
		}
	}

	.register {position:relative;width:50%;float:left;}
	.register-center {width:380px;margin:auto;}
	.register-header {width:100%;height:100px;overflow:hidden;}
	.register-header>h1 {text-align:center;margin:20px 0 0 0;}


	.login {position:relative;width:50%;float:left;}
	.login-center {width:380px;margin:auto;}
	.login-header {width:100%;height:100px;overflow:hidden;}
	.login-header>h1 {text-align:center;margin:20px 0 0 0;}
	.btn__ {
		width: 257px;
		height: 53px;
		margin: auto;
		margin-top: 20px;
		border-radius: 26.5px;
		background: @blue;
		color: white; text-align: center; line-height: 53px;
		font-size: 18px;
		cursor: pointer;
		&:hover {
			background: @blue-darker;
		}
	}

}
</style>

<script type="text/javascript">
	export default {
		data: function(){
			return {
				signup_form: {
					mobile: '',
					password: '',
					password_2: '',
					verif: '',
					agreed: false
				},
				info: {
					mobile: '',
					password: '',
					password2: ''
				},
				state: {
					mobile: '',
					password: '',
					password2: ''
				},
				signin_form: {
					id: '',
					password: '',
					remember_me: false
				}
			}
		},
		mounted: function(){
		},
		methods: {
			onFocus: function(str){
				this.state[str] = 'active';
				this.info[str] = '';
			},
			toggle: function(){
				if( this.signup_form.agreed===false ){
					this.signup_form.agreed = true;
				}else{
					this.signup_form.agreed = false;
				}
			},
			toggle2: function(){
				if( this.signin_form.remember_me===false ){
					this.signin_form.remember_me = true;
				}else{
					this.signin_form.remember_me = false;
				}
			},
			check_mobile: function(){
				if( /^1[3|4|5|8]\d{9}$/.test(this.signup_form.mobile) ){
					this.state.mobile = 'success';
				}else if( this.signup_form.mobile==='' ){
					this.state.mobile = '';
				}else{
					this.state.mobile = 'error';
					this.info.mobile = '手机号格式不正确';
				}
			},
			check_password: function(){
				if( /^\w{6,20}$/.test(this.signup_form.password) ){
					this.state.password = 'success';
				}else if( this.signup_form.password==='' ){
					this.state.password = '';
				}else{
					this.state.password = 'error';
					this.info.password = '密码格式不正确';
				}
			},
			check_password2: function(){
				if( this.signup_form.password2===this.signup_form.password ){
					this.state.password2 = 'success';
				}else if( this.signup_form.password2==='' ){
					this.state.password2 = '';
				}else{
					this.state.password2 = 'error';
					this.info.password2 = '两次输入的密码不一致';
				}
			},
			LOGIN: function(){
				this.$store.dispatch(
					'LOGIN',
					JSON.stringify(this.signin_form)
				)
			}
		}
	}
</script>