//Client-side form validation.
$(document).ready(function(){
	//Reset the form. Declare the variables.
	var username,password,password2,verif;
	var n1,n2,n3,n4,n5;
	//-----------------------------------------------------------
	function check_username(){
		username=$(this).val();
		if(/^1[3|4|5|8]\d{9}$/.test(username)==true){
			$(".info").eq(0).empty();
			//Send the username input to username_check.php.
			$.ajax({
				url:"http://localhost/fytpy/php/query_username.php",
				type:"post",
				data:{data:username},
				success:function(data){
					if(data==true){
						$(".info").eq(0).html("");
						$('.register-form input[name=username]').removeClass("error").addClass("success");
						n1=true;
					}else{
						$(".info").eq(0).html("该手机号已经被注册");
						$('.register-form input[name=username]').addClass("error");
						n1=false;
					};
				}
			});
		}else{
			$(".info").eq(0).html("您输入的手机号格式不正确");
			$('.register-form input[name=username]').addClass("error");
			n1=false;
		};
	};
	function check_password(){
		password=$(this).val();
		if(/^\w{6,20}$/.test(password)==true){
			$(".info").eq(1).empty();
			$('.register-form input[name=password]').removeClass("error").addClass("success");
			n2=true;
		}else{
			$(".info").eq(1).html("您输入的密码格式不正确");
			$('.register-form input[name=password]').removeClass("success").addClass("error");
			n2=false;
		};
		check_password2();
	};
	function check_password2(){
		password=$('.register-form input[name=password]').val();
		password2=$('.register-form input[name=password2]').val();
		if(password==password2){
			$(".info").eq(2).empty();
			$('.register-form input[name=password2]').removeClass("error").addClass("success");
			n3=true;
		}else{
			$(".info").eq(2).html("两次输入的密码不一致");
			$('.register-form input[name=password2]').removeClass("success").addClass("error");
			n3=false;
		};
	};
	function check_verif(){
		verif=$(this).val();
		$('.register-form input[name=verif]').removeClass("error").addClass("success");
		n4=true;
	};
	function check_agree(){
		if($(this).is(":checked")){n5=true;}else{n5=false};
	}
	function register(){
		if(n1==true&&n2==true&&n3==true&&n4==true&&n5==true){
			//Convert the form into a JSON.
			var user={
				username:username,
				password:password,
				password2:password2,
				verif:verif
			};
			//Send the registration information to register.php.
			$.ajax({
				url:"http://localhost/fytpy/php/register.php",
				type:"post",
				data:{  data:JSON.stringify(user)  },
				success:function(data){
					alert("注册成功！您的用户名为"+data+"");
					location.href="index.html";
				}
			});
		}else{
			alert("您输入的信息不完整！");
		};
	};		
	//-----------------------------------------------------------------------------
	$(".register-form")[0].reset();
	$('.register-form input[name=username]').on("change",check_username);
	$('.register-form input[name=password]').on("change",check_password);
	//Ensure the passwords input are the same.
	$('.register-form input[name=password2]').on("change",check_password2);
	$('.register-form input[name=verif]').on("change",check_verif);
	$('.register-form input[name=agree]').on("click",check_agree);
	$('.register-button').on("click",register);
});

//login
/*
	.login-form input[name=username]
	.login-form input[name=password]
	.login-button
*/
$(document).ready(function(){
	var username,password;
	//-----------------------------------------------------------
	function login(){
		$('.login-button').html("登录中...");
		var user={
			username:username,
			password:password
		};
		$.ajax({
			url:"./php/login.php",
			type:"post",
			data:{  data:JSON.stringify(user)  },
			success:function(a){
				if(a==true){
					alert("登录成功！");
					location.href="index.html";
				}else{
					alert("您输入的用户名或密码有误！");
					$('.login-button').html("登 录");
				}
			}
		});
	};
	//------------------------------------------------------------------------------------------------------------------------
	$(".login-form")[0].reset();
	$('.login-form input[name=username]').blur(function(){
		username=$(this).val();
	});
	$('.login-form input[name=password]').blur(function(){
		password=$(this).val();
	});
	$('.login-button').click(login);
});