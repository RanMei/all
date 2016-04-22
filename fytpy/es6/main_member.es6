import {session} from './session';
	
$(document).ready(function(){
	
	$(".menu li").on("click",function(){
		var i=$(this).index();
		$(".content li").each(function(){
			$(this).hide();
		});
		$(".content li").eq(i).show();
	});

	var oldPassword,
		newPassword,
		newPassword2;
	$("input[name='oldPassword']").blur(function(){
		oldPassword=$(this).val();
		console.log( oldPassword );
	});
	function changePassword(){
	
	};
	
	function saveDeliveryInformation(){};
});