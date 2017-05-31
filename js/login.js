require(["config"], function() {
	require(["jquery", "com"], function($, com) {
		$("#code2").val(com.randomInt(1000, 10000));
		$("#code2").css({
			"color": "#" + com.randomColor(),
			"background": "#" + com.randomColor()
		});
		$("#code4").val(com.randomInt(1000, 10000));
		$("#code4").css({
			"color": "#" + com.randomColor(),
			"background": "#" + com.randomColor()
		});
		$("#btn_login").click(function(){
			var user = $("#login_username").val();
			var pass = $("#login_password").val();
			var code1=$("#code1").val();
			var code2=$("#code2").val();
			if(com.getCookie(user)==pass&&pass.length&&code1==code2){
				//成功
				console.log("yes")
				location.href="index.html"
			}else if(code1!=code2){
				alert("验证码错误")
			}
			else{
				alert("账号或者密码错误")
			}
		})
	});
});