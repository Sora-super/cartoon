require(["config"], function() {
	require(["jquery", "com"], function($,com) {
					getPic();
					function getPic(){
						var shop_pho=document.getElementById("shop_pho");
						var req = new XMLHttpRequest();
						req.open("get","mock/lis.json",true);
						req.onreadystatechange = function(){
							if(req.readyState == 4) {
								var list= JSON.parse(req.responseText)[0].img1
									for(var x=0;x<list.length;x++){
										var li = document.createElement("li");
										var img = document.createElement("img");
										var dl=document.createElement("dl");
										var dt=document.createElement("dt");
										dl.appendChild(dt);
										li.appendChild(dl)
										shop_pho.appendChild(li);
										img.src = list[x];
										dl.appendChild(img);
										//$(".choose_good").html(img);
										//document.body.appendChild(img)
										console.log(list)
							}
							}
						}
						req.send(); 
					}
					
			});
		});