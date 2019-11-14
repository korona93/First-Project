//헤더 


$(document).ready(function(){
    //mainMenu1
        $('#header > #mainMenu1 > li').mouseover(function(){
            //console.log('li');
            $(this).css({"text-decoration":"underline"});
            $(this).children('.subCategory').css({"display":"block"});
            $('#mainMenu1 > li').not(this).css({"text-decoration":"none"});
            $('#mainMenu1 > li').not(this).children('.subCategory').css({"display":"none"});
        });
        
        
        $('#header > #mainMenu1 > li').mouseout(function(){
            //console.log('mouseout');
            $(this).css({"text-decoration":"none"});
            //$(this).children('.subCategory').css({"display":"none"});
        });
        
       
        //mainMunu1 > subCategory
    
        $('.subCategory > ul > li').mouseover(function(){
            //console.log("li");
            $(this).css({"text-decoration":"underline"});
            $('.subCategory > ul > li').not(this).css({"text-decoration":"none"});
        });
        $('.subCategory > ul > li').mouseout(function(){
            //console.log('mouseout');
            $(this).css({"text-decoration":"none"});
            //$(this).children('.subCategory').css({"display":"none"});
        });
        $('.subCategory').mouseout(function(){
            //console.log('zo');
            $(this).css({"display":"none"});
        });
        $('#mainSection1').mouseover(function(){
            //console.log("111");
            $('.subCategory').css({"display":"none"});
        });
        $('*').click(function(){
            //console.log('clicked');
            $('.subCategory').css({"display":"none"});
        });
    
        //mainMenu2
    
        $('#header > #mainMenu2 > li').mouseover(function(){
            $(this).css({"text-decoration":"underline"});
        });
        $('#header > #mainMenu2 > li').mouseout(function(){
            $(this).css({"text-decoration":"none"});
        });
    
    
    
        //tools
    
        $('#header > #tools > #gnb').click(function(){
            //console.log('clicked')
            $('div#gnbBody').toggle();
            $('div#header').toggleClass('pink');
            $()
        });

            //GNBMENU
            $('#gnbBody > #gnbMenu > li').mouseover(function(){
                //console.log('li');
                $(this).css({"text-decoration":"underline"});
                $(this).children('.subCategory').css({"display":"block"});
                $('#gnbMenu > li').not(this).css({"text-decoration":"none"});
                $('#gnbMenu > li').not(this).children('.subCategory').css({"display":"none"});
            });
            
            
            $('#gnbBody > #gnbMenu > li').mouseout(function(){
                //console.log('mouseout');
                $(this).css({"text-decoration":"none"});
                //$(this).children('.subCategory').css({"display":"none"});
            });
            $('#gnbBody  #voidArea1').mouseover(function(){
                $('.subCategory').css({"display":"none"});
            });
            $('#gnbBody > #voidArea2').mouseover(function(){
                $('.subCategory').css({"display":"none"});
            });
            $('#gnbBody > #voidArea3').mouseover(function(){
                $('.subCategory').css({"display":"none"});
            });

        //메인 사진에 마우스 호버/아웃 시
            $(".pictureBox img").mouseover(function(){
                $(this).attr("src",function(){
                    return this.title;
                });
            });
            $(".pictureBox img").mouseout(function(){
                $(this).attr("src",function(){
                    return this.alt;
                }); 
            });

        //메인  색상칸에 마우스 호버/아웃 시 
        
            $("#mainWrap .colorBox span").mouseover(function(){
                //console.log("in");
                var path = $(this).attr("title");
                //console.log(path);
                var thisParent = $(this).parent().parent();
                //console.log(thisParent);
                thisParent.children('a').children('img').attr("src",function(){
                    return path;
                });
            });

            
            $("#mainWrap .colorBox span").mouseout(function(){
                //console.log("out"); 
                var thisParent = $(this).parent().parent();
                var boxAlt = thisParent.children('a').children('img').attr("alt");
                thisParent.children('a').children('img').attr("src",function(){
                    return boxAlt;
                });
            });
    });

