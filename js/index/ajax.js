/*---------------------------------------ajax请求---------------------------------*/

			addEventListener("keypress",function(e){
				//e.stopPropagation()
				 jsonpGet();
			})
			
				function jsonpGet(){
					var scriptText=document.getElementById("scriptText");
					scriptText?scriptText.remove():"";
					scriptText=document.createElement("script");
					scriptText.id="scriptText";
					scriptText.src="http://suggestion.baidu.com/su?wd="+$(".sear_box1").val()+"&cb=getText";
					document.body.appendChild(scriptText);
				}
				
				function getText(data){
					//var arr = Array.from();
					var search_in_box=document.getElementById("search");
					var head_get_result=document.getElementsByClassName("head_get_result")[0];
					head_get_result.style.display="block";
					var header_search_list=document.getElementsByClassName("header_search_list")[0];
					header_search_list.innerHTML="";
					for(var val in data.s){
						var oli=document.createElement("li");
						oli.innerText=data.s[val];
						header_search_list.appendChild(oli);
					}
					window.document.onkeydown = choose_text;
					var list=Array.from(header_search_list.children);
					var count=-1;
					function choose_text(e){
						var e=e||event;
						if(e.keyCode){//下键
							if(e.keyCode==38||e.keyCode==40){
								if(e.keyCode==40){
									if(count==list.length-1){
										count=-1;
										}
										count++;
									}
									if(e.keyCode==38){//上键
										if(count<1){
											count=list.length;
										}
										count--;
									}
								for(var x=0;x<list.length;x++){
									list[x].style.background="";
								}
								list[count].style.background="grey";
								
							}
							if(e.keyCode==13){
									search_in_box.value=list[count].innerHTML;
									//console.log(list[count])
									head_get_result.style.display="none";
								}
							}	
						}
					}
				
			
				
		