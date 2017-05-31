require(["config"], function() {
	require(["jquery", "com"], function($,com) {
				$(".code").val(com.randomInt(1000,10000));
				$(".code").css({"color":"#"+com.randomColor(),"background":"#"+com.randomColor()});
		/*	
				function send(){
					var content = $(".in_username").val();
					//长度5-20
					if( !(content.length>=5 && content.length<=20) ){
						alert("用户名长度不合要求！");
						return;
					}
					//不能以数字开头
					if( isANum(content.charAt(0)) ){
						alert("数字不能开头");
						return;
					}
					//只能包含数字字母下划线
					for(var i=0; i<content.length; i++){
						var asc = content.charCodeAt(i);
						if( !(asc>=48&&asc<=57 || asc==95 || asc>=65&&asc<=90 || asc>=97&&asc<=122) ){
							alert("只能包含数字字母下划线！");
							return;
						}
					}
					console.log(1)
					
				}*/
				
				
				$("#btn").click(function(){
					
					var user = $("#username").val();
					var pass1 = $("#password1").val();
					var pass2 = $("#password2").val();
					var code1 = $("#code1").val();
					var code2 = $("#code2").val();
					if(pass1==pass2&&user.length&&pass1.length&&code1==code2){
						com.setCookie(user,pass1,10)
						
						//location.href=""
					}else{
						alert("您输入有误，请重新输入")
					}
					
					
				})
			});
		});