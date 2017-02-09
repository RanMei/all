<style lang="less" scoped>
	.Signin {
		position: relative;
		width: 100%;
		padding-top: 50px;
		padding-bottom: 100px;
		background: #f9f9f9;
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
		<div class="signin_box">
			<p>Username</p>
			<input/>
			<p>Password</p>
			<input/>
			<div class="signin_btn">
				Sign in
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		props: {
		},
		computed: {

		}
	}
</script>