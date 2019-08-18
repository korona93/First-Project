$(document).ready(function(){
    /*메뉴*/
    $(".product").hide();
    $(".community").hide();
    $(".custom").hide();
    $(".m1").hover(function(){
        $(".m1 > a > img").attr("src",$(".m1 > a > img").attr("src").replace(".gif","_ov.gif"));
        $(".product").show();
    },function(){
        $(".m1 > a > img").attr("src",$(".m1 > a > img").attr("src").replace("_ov.gif",".gif"));
        $(".product").hide();
    });

    $(".m2").hover(function(){
        $(".m2 > a > img").attr("src",$(".m2 > a > img").attr("src").replace(".gif","_ov.gif"));
        $(".community").show();
    },function(){
        $(".m2 > a > img").attr("src",$(".m2 > a > img").attr("src").replace("_ov.gif",".gif"));
        $(".community").hide();
    });

    $(".m3").hover(function(){
        $(".m3 > a > img").attr("src",$(".m3 > a > img").attr("src").replace(".gif","_ov.gif"));
        $(".custom").show();
    },function(){
        $(".m3 > a > img").attr("src",$(".m3 > a > img").attr("src").replace("_ov.gif",".gif"));
        $(".custom").hide();
    });

    $(".m4").hover(function(){
        $(".m4 > a > img").attr("src",$(".m4 > a > img").attr("src").replace(".gif","_ov.gif"));
    },function(){
        $(".m4 > a > img").attr("src",$(".m4 > a > img").attr("src").replace("_ov.gif",".gif"));
    });
    
    /*소메뉴*/
    $(".shop> li > a > img").hover(function(){
        $(this).attr("src",$(this).attr("src").replace(".gif","_ov.gif"));
    },function(){
        $(this).attr("src",$(this).attr("src").replace("_ov.gif",".gif"));
    });

     /*제품,커뮤니티, 고객지원 하위메뉴*/
     

    $(".menu ul>li>a>img").hover(function(){
        $(this).attr("src",$(this).attr("src").replace(".gif","_on.gif"));
    },function(){
        $(this).attr("src",$(this).attr("src").replace("_on.gif",".gif"));
    });
    /*$(".product> li > a > img").hover(function(){
        $(this).attr("src",$(this).attr("src").replace(".gif","_on.gif"));
    },function(){
        $(this).attr("src",$(this).attr("src").replace("_on.gif",".gif"));
    });
    $(".community > li > a > img").hover(function(){
        $(this).attr("src",$(this).attr("src").replace(".gif","_on.gif"));
    },function(){
        $(this).attr("src",$(this).attr("src").replace("_on.gif",".gif"));
    });

    $(".custom > li > a > img").hover(function(){
        $(this).attr("src",$(this).attr("src").replace(".gif","_on.gif"));
    },function(){
        $(this).attr("src",$(this).attr("src").replace("_on.gif",".gif"));
    }); (수정이전)*/


    /*전체보기*/
    $("#allMenu").click(function(){
        $("#total").show();
    });
    $(".exit").click(function(){
        $("#total").hide();
    });

    //패밀리 사이트
    $(".foot02").hide();

    $(".foot01").hover(function(){
        $(".foot02").show();
    },function(){
        $(".foot02").hide();
    });

    $(".foot02>ul>li>a>img").hover(function(){
        $(this).attr("src",$(this).attr("src").replace(".gif","_on.gif"));
    },function(){
        $(this).attr("src",$(this).attr("src").replace("_on.gif",".gif"));
    });


    //배너 움직이기	
    play();	
    $("#btn_left").click(function(){
        if(!sliding){
            sliding=true;
            left();
            play();
        }
        
    });			
    $("#btn_right").click(function(){
        if(!sliding){
            sliding=true;
            right();
            play();
        }
        
    });			

});

//배너 움직이기 및 함수
var sliding = false;
function play(){
    bannerAuto = setInterval(function(){					
            $("#btn_right").click();			
    },4000);					
}		
function stop(){
    clearInterval(bannerAuto);			
}	
function right(){		
    stop();			
    $("#mainImg > ul").animate({"margin-left":"-970px"},2000,"swing",function(){				
        $(this).children("li:first").insertAfter($(this).children("li:last"));
        $(this).css({"margin-left":"0"});		
        sliding = false;
    });			
}			
function left(){		
    stop();					
    $("#mainImg > ul > li:last").insertBefore($("#mainImg > ul > li:first"));
    $("#mainImg > ul").css({"margin-left":"-970px"});
    $("#mainImg > ul").animate({"margin-left":"0"},2000,"swing",function(){	
        slidings=false;					
    });					
}			
