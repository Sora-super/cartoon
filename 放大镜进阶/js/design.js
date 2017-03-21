
function Subject(content){
	var content = content;//发布的内容
	var subcribers = new List();//订阅者们
	//订阅
	this.subcribe = function(client){
		subcribers.add(client);
	}
	//退订
	this.unsubcribe = function(client){
		subcribers.remove(client);
	}
	//发布动作
	this.publish = function(){
		for(var i in subcribers){
			subcribers[i].notice(content);//通知每个订阅者
		}
	}
}

function Email(){
	//......
	this.notice = function(msg){
		alert("观察者接到的消息内容："+msg);
	}
}

/*function List(){
	//...自己封装的集合,
	this.add = function(){...}
	this.remove = function(){...}
}*/


var s1 = new Subject("暴走大事件");
var s2 = new Subject("人人都是产品经理");
var s3 = new Subject("罗辑思维");

//每个Email代表一个用户邮箱
var email01 = new Email();
var email02 = new Email();
//你不仅可以用Email订阅，还能用手机订阅
var phone01 = new Phone();
var phone02 = new Phone();

s1.subcribe(email01);//邮箱1和2订阅了《大事件》
s1.subcribe(email02);//

s2.subcribe(email01);//邮箱1订阅了《产品经理》

s3.subcribe(email02);//邮箱2订阅了《罗辑思维》
s3.subcribe(phone01);//手机1订阅了《逻辑思维》

s1.publish();
s2.publish();
s3.publish();





