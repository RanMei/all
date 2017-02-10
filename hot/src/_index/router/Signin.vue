<style lang="less" scoped>
	.Signin {
		position: relative;
		width: 100%;
		padding-top: 50px;
		padding-bottom: 100px;
		background: #f9f9f9;
    .info {
      display: table;
      width: 300px;
      padding: 20px;
      margin: auto; margin-bottom: 15px;
      border: 1px solid #d2b2b2;
      border-radius: 3px;
      color: #911;
      background-color: #fcdede;
    }
		.signin_box {
			display: table;
			padding: 20px;
			margin: auto;
			border: 1px solid #d8dee2;
   		border-radius: 3px;
   		background: white;
   		p {
   			margin-bottom: 7px;
   			font-size: 14px;
   			font-weight: bold;
   		}
   		input {
   			box-sizing: border-box;
   			width: 300px;
   			padding: 10px;
   			margin-bottom: 15px;
   			border: 1px solid #ddd;
    		border-radius: 3px;
   			font-size: 14px;
   			&:focus {
   				border: 1px solid #4078c0;
   			}
   		}
   		.signin_btn {
        box-sizing: border-box;
   			width: 300px; height: 40px; line-height: 40px;
   			border: 1px solid #ddd;
    		border-radius: 3px;
   			font-size: 14px; color: white; text-align: center;
   			background-color: #6cc644;
   			cursor: pointer;
   		}
		}
	}
</style>

<template>
	<div class="Signin">
    <div class="info" v-show=" user.state==='failed' ">
      Incorrect username or password.
    </div>
		<div class="signin_box">
			<p>Username</p>
			<input type="text" v-model="payload.name"/>
			<p>Password</p>
			<input type="password" v-model="payload.password"/>
			<div class="signin_btn"
      @click="login">
				{{user.state==='pending'?'Signing in...':'Sign in'}}
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		props: {
		},
    data: function(){
      return {
        payload: {
          name: '',
          password: ''
        }
      }
    },
		computed: {
      user(){
        return this.$store.state.user;
      },
		},
    methods: {
      login(){
        if( this.user.state!=='pending' ){
          this.$store.dispatch('login',JSON.stringify(this.payload))
        };
      }
    }
	}
</script>