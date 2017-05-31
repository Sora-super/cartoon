require(["config"], function() {
	require(["jquery", "com"], function($, com) {
		$(".good_select").children("li").mouseover(function() {
			var index = 0;
			$(".good_select").children("li").mousemove(function() {
				index = $(".good_select").children("li").index(this);
				$(".samll_ul").stop().animate({
					top: -340 * index,
				}, 10);
				$(".big_ul").stop().animate({
					top: -800 * index,
				}, 10);
				//$(".good_select").children("li")

				$(".samll_pic").mouseover(function(e) {
					$(".small_cursor").css({
						"display": "block"
					});
					$("big_cursor").css({
						"display": "block"
					});

					//console.log(index)
					//$(".small_cursor").css({"display":"block"});
					var scale = 800 / 340;
					var smallImg = document.getElementById("id_samll_pic");
					var smallCursor = document.getElementById("id_small_cursor");
					var bigCursor = document.getElementById("id_big_cursor");
					var bigImg = document.getElementById("id_big_ul");
					smallImg.onmousemove = function(e) {
						smallCursor.onmouseover = function() {
							bigCursor.style.display = "block";
							smallCursor.onmousemove = function(e) {
								var e = e || event;
								smallCursor.style.left = Math.min(smallImg.offsetWidth - smallCursor.offsetWidth, Math.max(0, e.clientX - com.offsetPagePosition(smallImg).left - smallCursor.offsetWidth / 2)) + "px";
								smallCursor.style.top = Math.min(smallImg.offsetHeight - smallCursor.offsetHeight, Math.max(0, e.clientY - com.offsetPagePosition(smallImg).top - smallCursor.offsetHeight / 2)) + "px";
								//console.log(index);
								bigImg.style.left = -smallCursor.offsetLeft * scale + "px";
								$("#id_big_ul").children("li").eq(index).top= -smallCursor.offsetTop *  scale + "px";
							}
						}
					smallCursor.onmouseout=function(){
							bigCursor.style.display = "none";
							smallCursor.style.display = "none";
							}
					}
			

					/*$(".small_cursor").offset({ top:Math.min(  ( $(".samll_pic").width()-$(".small_cursor").width()),
					Math.max(0,
					e.clientX-$(".samll_pic").offset.left-$(".small_cursor").width()/2) ) , left: Math.min(
						($(".samll_pic").height()-$(".small_cursor").height()),
						Math.max(0,
							e.clientY-$(".samll_pic").offset.top-$(".small_cursor").height()/2
						))});*/
					//$(".small_cursor").offset.left=

					//$(".small_cursor").offset.top=

				});
				//放大效果
			});
		});
		//加
					$("#add").click(function() {
						document.getElementById("val").value++;
						console.log(1)
					})
					//减
					$("#minus").click(function() {
						if($("#val").val() > 0) {
							document.getElementById("val").value--;
						} else {
							count = 0;
						}
					})
					//加入购物车
					var count = 0
					$("#addCar").click(function() {
						var goods_name=document.getElementById("goods_name1").children[1].innerText;
						var goods_sno=document.getElementById("goods_name1").children[1].children[0].innerText;
					var goods_price=document.getElementById("goods_price1").children[1].innerText;	
						//console.log(goods_name)
						var num = document.getElementById("val").value
						var p = {
				sno:goods_sno,
				name : goods_name,
				price : goods_price,
				count : num,
			};
			var list = [];
			//从cookie中获取list，得到字符串
			var cookiestr = com.getCookie("plist");
			//判断取出的字符串是否为空
			if(cookiestr){
				//通过JSON.parse() 将字符串转换为数组对象
				list = JSON.parse(com.getCookie("plist"));
			}
			//判断要保存的商品是否已存在
			var flag = false;
			for(var i in list){
				//如果已存在，则不再存入数组，而是将商品数量+1
				if(list[i].sno == p.sno){
					flag = true;
					list[i].count++;
				}
			}
			//如果商品从未添加过，则存入数组
			if(!flag) list.push(p);
			//将数组再次转换为字符串，并再次存入cookie（覆盖了原有）
			com.setCookie("plist", JSON.stringify(list), 30);
						//com.setCookie("shopname" + count, name, 10)
						//com.setCookie("shopnum", num, 10)
						//count++;
					})
	});
	
});