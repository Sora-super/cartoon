//如何按照requireJs的要求，定义一个模块
define([], function() {
	return {
		randomInt: function(min, max) {
			return Math.round(Math.random() * (max - min)) + min;
		},
		randomColor: function() {
			var R = Math.round(Math.random() * 255).toString(16);
			var G = Math.round(Math.random() * 255).toString(16);
			var B = Math.round(Math.random() * 255).toString(16);
			return(R.length < 2 ? "0" + R : R) + (G.length < 2 ? "0" + G : G) + (B.length < 2 ? "0" + B : B);
		},
		getStyle: function(obj, attr) {
			if(obj.currentStyle) {
				getStyle = function(obj, attr) {
					return Number(parseFloat(obj.currentStyle[attr]).toFixed(5));
				}
				return Number(parseFloat(obj.currentStyle[attr]).toFixed(5));
			} else {
				getStyle = function(obj, attr) {
					console.log(obj, getComputedStyle(obj, null)["width"]);
					return Number(parseFloat(getComputedStyle(obj, null)[attr]).toFixed(5));
				}
				return Number(parseFloat(getComputedStyle(obj, null)[attr]).toFixed(5));
			}
		},
		getChildren: function(ele, nodeType) {
			if(!ele || !nodeType) {
				console.log("%c参数个数不正确，或顺序错误！", "color:red");
				return;
			}
			if(!ele.childNodes) console.log("%c传入的参数非DOM元素或无法获取子节点！", "color:red");
			var obj = {
				"element": 1,
				"text": 3,
				"attribute": 2
			}
			if(typeof nodeType === "number") {
				//抛出一个消息，告诉我的上级，这里发生了什么错误，请求处理
				throw new Error("参数类型错误，只能传入string类型，不能传入number类型")
			} else {
				if(!(nodeType in obj)) {
					console.log("%c文本参数错误!", "color:red");
				}
			}
			var list = ele.childNodes;
			var arr = [];
			for(var i = 0; i < list.length; i++) {
				if(list[i].nodeType == obj[nodeType]) arr.push(list[i]);
			}
			return arr;
		},
		offsetPagePosition: function(ele) {
			var _left = ele.offsetLeft;
			var _top = ele.offsetTop;
			while(ele.offsetParent) {
				_left += ele.offsetParent.offsetLeft;
				_top += ele.offsetParent.offsetTop;
				ele = ele.offsetParent;
			}
			return {
				"left": _left,
				"top": _top
			};
		},
	
		/** 设置cookie */
		setCookie: function(key, val, expires) {
			expires=expires||10;
			var now = new Date();
			now.setDate(now.getDate() + expires);
			document.cookie = key + "=" + val + "; expires=" + now;
		},

		getCookie: function(key) {
			var cookiestr = document.cookie;
			var list = cookiestr.split("; ");
			for(var attr in list) {
				var kv = list[attr].split("=");
				if(kv[0] == key) {
					return kv[1];
				}
			}
			return "";
		},
		getTime: function add(time) {
			function checkTime(i) {
				if(i < 10) {
					i = "0" + i;
				}
				return i;
			}
			var ts = (time - (new Date())); //计算剩余的毫秒数

			var hour = parseInt((ts) / 1000 / 60 / 60);
			var min = parseInt((ts) / 1000 / 60) - (hour * 60);
			var sec = Math.floor((ts / 1000) - (hour * 60 * 60) - (min * 60));
			hour = checkTime(hour);
			min = checkTime(min);
			sec = checkTime(sec);
			return {
				"h": hour,
				"m": min,
				"s": sec
			};
		}

	};
});