$.fn.hoverDir = function(time){
	$(this).time = time || 1000;
	$.Hover.init($(this));	
	$(this).live("mouseenter mouseleave", function(event){
		var x = (event.clientX+$(window).scrollLeft() - this.offsetLeft - (this.offsetWidth/2)) * (this.offsetWidth > this.offsetHeight ? this.offsetHeight/this.offsetWidth : 1);
		var y = (event.clientY+$(window).scrollTop() - this.offsetTop - (this.offsetHeight/2)) * (this.offsetHeight > this.offsetWidth ? this.offsetWidth/this.offsetHeight : 1);
		var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI))) / 90) + 5) % 4; 
		if(event.type == "mouseenter"){
			$.Hover.over(direction, $(this));
		} else {
			$.Hover.out(direction, $(this));
		}
	});
}
$.Hover = {
	init : function($this){
		var cover = $("<div></div>").css({
			position:"absolute",
			width:$this.outerWidth(),
			height:$this.outerHeight(),
			background:"rgba(1,1,1,0.6)",
			left:0,
			top:"-100%"
		}).addClass("cover");
		$this.append(cover);
	},
	over : function(dir, $target){
		var $cover = $target.find(".cover"); 
		$cover.stop();
		switch(dir) {
			case 0 :
				$cover.css("left","0").css("top","-100%").animate({left:0,top:0},$target.time); break;
			case 1 :
				$cover.css("left","100%").css("top","0").animate({left:0,top:0},$target.time); break;
			case 2 :
				$cover.css("left","0").css("top","100%").animate({left:0,top:0},$target.time); break;
			case 3 :
				$cover.css("left","-100%").css("top","0").animate({left:0,top:0},$target.time); break;
		}
	},
	out : function(dir, $target){
		var $cover = $target.find(".cover"); 
		$cover.stop();
		switch(dir) {
			case 0 :
				$cover.animate({left:0,top:"-100%"},$target.time); break;
			case 1 :
				$cover.animate({left:"100%",top:0},$target.time); break;
			case 2 :
				$cover.animate({left:0,top:"100%"},$target.time); break;
			case 3 :
				$cover.animate({left:"-100%",top:0},$target.time); break;
		}
	}
}
















