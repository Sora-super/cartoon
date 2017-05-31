require(["config"], function() {
	require(["jquery", "get", "com"], function($, get, com) {
		$("#search").blur(function() {
			$(".header_search_list li").click(function(e) {
				console.log(e.target)
				$("#search").val(e.target.innerText);
				//document.getElementById("oUl").innerHTML=""
				$("#oUl li").remove()
			});
		});
		//ajax
		//addEventListener("keypress",function(e){
		//e.stopPropagation()
		//get.ajaxget();
		//})

		//common

		$(function() {
			/*-----------------------去掉个别样式--------------去掉第一个a标签的/------------------------------*/
			$("#oli_11").children("a").css({
				"border": "none"
			});
			$(".pic4").children("li").last().css({
				"margin-right": 0
			});
			$(".left_no1").css({
				"text-align": "left"
			});
			$(".pro_no_border").children("a").css({
				"border": "none"
			});
			/*--------------------------------------显示右边栏------------------------------------------*/
			var index = $(".pro3_ul").children("li").index();
			$(".pro3_ul").children("li").click(
				function() {
					$("li").eq(index).detach();
					//$("li").eq(index).siblings().stop().animate({
					//: 230
					//}, 500)
					//$(".pro3_ul").children("dl").eq(index).animate({
					//top: 230
					//}, 500)

				}
			)
			/*--------------------------------------顶部固定栏-------------------------------------------*/
			/*--------------------------------------鼠标滑过显示隐藏的块---------------------------------------*/
			$(".oli_1").hover(
				function() {
					$("#oli_1_son").css({
						"display": "block"
					});
				},
				function() {
					$("#oli_1_son").css({
						"display": "none"
					});
				}
			)
			/*---------------------------------------倒计时-------------------------------------*/
			setInterval(function() {
				add1();
				add2();
				add3();
				add4();
			}, 1000);

			function add1() {
				var th = new Date(2017, 4, 25, 12, 0, 0);
				$("#hour1").html(com.getTime(th).h);
				$("#min1").html(com.getTime(th).m);
				$("#sec1").html(com.getTime(th).s);
			}

			function add2() {
				var th = new Date(2017, 4, 25, 15, 0, 0);
				$("#hour2").html(com.getTime(th).h);
				$("#min2").html(com.getTime(th).m);
				$("#sec2").html(com.getTime(th).s);
			}

			function add3() {
				var th = new Date(2017, 4, 25, 19, 0, 0);
				$("#hour3").html(com.getTime(th).h);
				$("#min3").html(com.getTime(th).m);
				$("#sec3").html(com.getTime(th).s);
			}

			function add4() {
				var th = new Date(2017, 5, 25, 24, 0, 0);
				$("#hour4").html(com.getTime(th).h);
				$("#min4").html(com.getTime(th).m);
				$("#sec4").html(com.getTime(th).s);
			}

			/*---------------------------------------轮播图1-------------------------------------*/
			var len = 5;
			var index = 0;
			var adTimer;
			var arr_color = ["#4ec2cf", "#d6f8f7", "#01a5fc", "#feeaf3", "#a3d131"];
			$(".num li").mouseover(function() {
				index = $(".num li").index(this);
				showImg(index);
			});

			$(".carousel_1").hover(function() {
				clearInterval(adTimer);
			}, function() {
				adTimer = setInterval(function() {
					showImg(index);
					index++;
					if(index == len) {
						index = 0;
					}
				}, 3000);
			}).trigger("mouseleave");

			function showImg(index) {
				$(".carousel_1").stop().animate({
					left: -765 * index
				}, 10);
				$(".box_re").css({
					"background": arr_color[index]
				});
				$(".num li").removeClass("on").eq(index).addClass("on");
				$(".box_r1").stop().animate({
					left: -190 * index
				}, 10);
				$(".box_r2").stop().animate({
					left: -190 * index
				}, 10);
				$(".box_r3").stop().animate({
					left: -190 * index
				}, 10);
			}

		});
		/*-------------------------------------swiper---------------------------------------*/
		//手风琴

		$.fn.clickup = function() {
			$(this).click(function() {
				$(this).parent().slideUp().siblings().slideDown('fast');
				$(this).siblings('li').css('right', '-100%');
			});
		}
		$.fn.clickdown = function() {
			$(this).click(function() {
				$(this).siblings('.list-se').slideToggle('fast').siblings().slideToggle('fast');
				$(this).parent().siblings().children('.list-se').slideUp('fast').siblings().slideDown('fast');
				var li = $(this).siblings('.list-se').children('li');
				for(var i = 0; i < li.length; i++) {
					li.eq(i).animate({
						right: '0'
					}, i * 25);
				}
				$(this).parent().siblings().children('.list-se').children('li').css('right', '-100%');
			})

		}
		$.fn.ad = function() {
			var t = $(this);
			for(var i = 0; i < t.length; i++) {
				var count = t.eq(i).children().children().length;
				if(count > 1) {
					t.eq(i).children('p[class=title]').append('<span>+</span>');
					t.eq(i).children('.list-se').children('p[class=title]').append('<span>-</span>');
				}
			}
		}
	})
})