$(document).ready(function(){
    //var state = true;
	$("#navBtn").click(function(){
        $(".navContentWrap").stop().slideToggle("fast");
        /*
        $(".navContentWrap")..slidetoggle("fast");
		if(!state){			
			// imgOff(this);
			state = true;
		}else{			
			// imgOn(this);
			state = false;
		}				
        return false;
        */
	});
	// $("#close_bt").on("click blur",function(){				
	// 	$("#all_menu").stop().slideUp("fast");
	// 	imgOn("#open_bt");
	// 	state = false;				
	// });	
	// function imgOff(t){				
	// 	var img = $(t).find("img");				
	// 	img.attr("src",img.attr("src").replace("on", "off")).attr("alt","전체메뉴닫기");
	// }
	// function imgOn(t){				
	// 	var img = $(t).find("img");
	// 	img.attr("src",img.attr("src").replace("off", "on")).attr("alt","전체메뉴열기");
	// }	
});	
			
