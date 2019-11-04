/* 수량 */
// function init () {
// 	sell_price = document.div.table.tbody.tr.qua_n.value;
// 	amount = document.div.table.tbody.tr.amount.value;
// 	document.div.table.tbody.tr.sum.value = qua_n;
// 	change();
// }

// function add () {
// 	hm = document.div.table.tbody.tr.amount;
// 	sum = document.div.table.tbody.tr.sum;
// 	hm.value ++ ;

// 	sum.value = parseInt(hm.value) * qua_n;
// }

// function del () {
// 	hm = document.div.table.tbody.tr.amount;
// 	sum = document.div.table.tbody.tr.sum;
// 		if (hm.value > 1) {
// 			hm.value -- ;
// 			sum.value = parseInt(hm.value) * qua_n;
// 		}
// }

// function change () {
// 	hm = document.div.table.tbody.tr.amount;
// 	sum = document.div.table.tbody.tr.sum;

// 		if (hm.value < 0) {
// 			hm.value = 0;
// 		}
// 	sum.value = parseInt(hm.value) * qua_n;
// }  

$(document).ready(function(){

    // 체크박스 전체선택(기본)
    $("input[type=checkbox]").prop("checked", true);


    // 전체 선택,해제
    $("#all_check").click(function(){
        // if($("#all_check").prop("checked")){
        //     $("input[name=check_chk]").prop("checked", true);
        // }else{
        //     $("input[name=check_chk]").prop("checked", false); 
        //     }
        // });
        if($("#all_check").prop("checked")){
            $("input[type=checkbox]").prop("checked", true);
        }else{
            $("input[type=checkbox]").prop("checked", false); 
            }
        });
     

    // 옵션 창(mouseover,mouseout 색상 변경)
    $(".btn_o").mouseover(function(){
        $(this).css({'background-color':'#d99f9d','border':'none'});
    });
    $(".btn_o").mouseout(function(){
        $(this).css({'background-color':'white','border':'1px solid #ccc'});
    });

    // 옵션 창 열기 닫기
    var sw=1;
    $(".btn_o_page").click(function(){ // 옵션 버튼 클릭시
        if(sw==1){ // sw=1 옵션안보임
            $('.cart_option').css("display","inline-block").css("position","absolute");
            sw=-1;
            var o = $(this).offset();
            console.log(o.top+"\n");
            console.log(o.left);
            var p = $(".cart_option").css({"top":o.top+26}).css({"left":o.left-452});
            if($(this).hasClass(p))
                $(this).removeClass(p);
            else
                $(this).addClass(p);    
        }
        else{
            $('.cart_option').css("display","none");
            sw=1;
            // if($(this).hasClass(p))
            //     $(this).addClass(p);   
            // else
            //     $(this).removeClass(p); 
        }
    });    
    
    // $(function(){
    //     $("div").click(function(){
    //         if($(this).hasClass("toggleStyle"))
    //             $(this).removeClass("toggleStyle");
    //         else
    //         $(this).addClass("toggleStyle");
    //     });
    // });


    // 옵션 창(mouseover,mouseout 색상 변경)
    $(".btn_p").mouseover(function(){
        $(this).css("background-color","#d99f9d");
    });
    $(".btn_p").mouseout(function(){
        $(this).css("background-color","#ccc");
    });
    $(".btn_p:last-child").mouseout(function(){
        $(this).css("background-color","#d99f9d");
    });



    // 옵션 색상,사이즈(추가, 수정)
    // https://ncube.net/8471
    // jQuery('#selectBox').change(function() {
    //     var state = jQuery('#selectBox option:selected').val();
    //     if ( state == 'option2' ) {
    //         jQuery('.layer').show();
    //     } else {
    //         jQuery('.layer').hide();
    //     }
    // }); 
    // https://wallel.com/jquery-%EC%85%80%EB%A0%89%ED%8A%B8%EB%B0%95%EC%8A%A4%EC%97%90%EC%84%9C-%ED%8A%B9%EC%A0%95-%EC%98%B5%EC%85%98-%EC%84%A0%ED%83%9D%EC%8B%9C-%EB%A0%88%EC%9D%B4%EC%96%B4-%EB%82%98%ED%83%80%EB%82%B4/
    // 옵션 추가
    //$("#o_insert").click(function(){
        //var value = $(".basic option:selected").val();
        //var value2 = $(".sel option:selected").not().index();
        // var value = $(".b_sel option:selected").index();
        // console.log(value);
        // if($(".b_sel").select(true)){
        //     console.log($(".b_sel").val());
        //     alert("필수 옵션을 선택해주세요");
        // }else {
        //     confirm("추가되었습니다.");
        // }
        // $("#.b_sel").change(function(event){
        //     var b_val = $(event.target).val();
        //     var sel = $(event.target).val();
        //     $("#o_change").attr('text',b_val);
        // }).alert("필수 옵션을 선택해주세요");
       
        // 옵션 추가
        // 클릭시 값 변경
        // $("#o_insert").click(function(){
        //     // 값을 먼저 바꾸고
        //     $(".color_change").change(function(event){
        //         var all_sel = $(event.target).val();
        //         console.log(all_sel);
        //         // $(this).select().after(tr);
        //         $(".o_change").text(all_sel.replace(this, ".color_change"));
        //     }).change();
        //     $(".size_change").change(function(event){
        //         var all_sel = $(event.target).val();
        //         console.log(all_sel);
        //         // $(this).select().after(tr);
        //         $(".o_change").text(all_sel.replace(this, ".size_change"));
        //     }).change();
        // });  
        
        
        

        // $(".color_change").change(function(event){
        //     var s_sel = $(event.target).val();
        //     console.log(s_sel);
        //     $(".u_sel").text(s_sel.replace(this, ".color_change"));
        // }).change();
        // console.log("바꾼 : "+".u_sel");


    // 옵션 수정
    // 클릭시 옵션 값 변경
    $("#o_update").click(function(){
         // 값을 먼저 바꾸고
        
         if($("options[target.selectedIndex].value").equals("*")){
            alert("필수 옵션을 선택해주세요");
        }else{
            $(".color_change").change(function(event){
                var s_sel = $(event.target).val();
                $(".color_change").text(s_sel.replace(this, ".u_sel"));
            }).change();
        }

        // alert("클릭");



        // 값을 먼저 바꾸고
        // $(".color_change").change(function(event){
        //     var all_sel = $(event.target).val();
        //     console.log(all_sel);
        //     $(".o_change").text(all_sel.replace(this, ".color_change"));

        //     // var index = $(".all_sel option").index($(".all_sel option:selected"));
        //     // console.log(index);
        // }).change();
        // $(".size_change").change(function(event){
        //     var all_sel = $(event.target).val();
        //     console.log(all_sel);
        //     $(".o_change").text(all_sel.replace(this, ".size_change"));
        // }).change();

        // $(".size_change").
    });    


    
    // 수량 +,- 클릭
    $('.amount_up').click(function(){
        var n = $('.amount_up').index(this);
        var num = $(".amount:eq("+n+")").val();
        num = $(".amount:eq("+n+")").val(num*1+1); 

        // 수량 변동에 따라 가격 변경
        var price = $('.sell_price').index(this);
        price=parseInt(n.val()*amount);
        console.log(price);
        var allprice = $(".amount_all_price").index(price);
        allprice = $(".amount_all_price").value(price);
    });
       // 수량 +,- 클릭
    // 수량 변동에 따라 가격 변경
    $('.amount_up').click(function(){
        var n = $('.amount_up').index(this);
        var num = $(".amount:eq("+n+")").val();
        num = $(".amount:eq("+n+")").val(num*1+1); 

        var price = $(this).parent().prev().children().children().text();

        //var price = $('.sell_price').text(); // 상품가격
        //alert(price);
        //price = price.replace("원","");
        console.log(num.val());
        //parseInt(num.text());
        console.log(parseInt(num.val()));
        console.log(price);
        var a_price=parseInt(price)*(num.val()); // 수량*가격
        //price = price.replace(/,/,"");
        console.log(num);
        console.log(price+" : 가격");
        console.log(a_price);
        // p -> td -> 옆
        //a_price = $("#price_all").val();
        $(".price_all").text(a_price+"원");
        $("#price_all").text(a_price+"원");
        alert(price);

    });



        $('.amount_down').click(function(){ 
            var n = $('.amount_down').index(this);
            var num = $(".amount:eq("+n+")").val();
            if(num>1){
                num = $(".amount:eq("+n+")").val(num*1-1);
            }
        });


        // 가격에 따른 포인트
        point=price/2;
        console.log("포인트"+point);
        $("#mileage_item").append(point);
        // var point = $(".mileage_item").index(price);
        // point = $(".amount_all_price").value(price);
    });
        // 수량 수정 버튼
    // $('btn_o_page').click(function(){
    //     var fixed = $('.amount_num').index(this);
    //     fixed = $('.amount_num').val();
    //     $('.sell_price bold').append(fixed);
    //     // fixed = document.forms.amount.fixed;
    // });




    // 가격에 따른 포인트
    // var price = $('.sell_price').index(this);
    // price=parseInt(this.val()*amount)/2;
    // console.log("포인트"+price);
    // $("#price_all").append(price);
    // var point = $(".mileage_item").index(price);
    // point = $(".amount_all_price").value(price);



    // 메인으로
    $("#btn_main").click(function(){
        location.href="https://www.stylenanda.com/";
    });
        

    // 선택상품삭제
    $("#btn_selDel").click(function(){
        if(confirm("선택하신 상품을 삭제하시겠습니까?")){
            $("input[name=check_chk]:checked").each(function(){
                var sel_del = $(this).parent().parent();
                sel_del.remove();
            });
        }else{
            alert("선택된 상품이 없습니다.");
            }
    });
    

    // 전체상품삭제
    $("#btn_allDel").click(function(){
        $("input[type=checkbox]").prop("checked", true);
        if(confirm("장바구니를 비우시겠습니까?")){
            $("input[name=check_chk]:checked").each(function(){
                //var bye = $(".t_product").not(".t_product").hide();
                var bye = $(".f_table:eq(0)").hide();
                var bye2 = $(".all_money").hide();
                //$(".f_table").append('장바구니가 비어있습니다.').css('margin-top','50%');
            });
        }
    });

    // 선택상품주문
    // 선택된 상품 value 값 가져오기
    // file:///D:/Limsohyun/jQuery/20190827/18.html
    // $("input[name=check_chk]:checked").each(function() {
    //     var test = $(this).val(); 
    //     alert("벨류값확인 : " + test);
    //   });

    // $("#btn_selOrd").click(function(){
    //     if($("input[name=check_chk]:checked").prop("checked")){
    //         location.href="https://www.stylenanda.com/";
    //         // $("input[name=check_chk]").prop("checked", true);
    //     }

    //     });

    // 선택상품삭제


    // 전체상품삭제
    
    // 구매하기

});


    // $(function(){ 
    //     $('.bt_up').click(function(){ 
    //       var n = $('.bt_up').index(this);
    //       var num = $(".num:eq("+n+")").val();
    //       num = $(".num:eq("+n+")").val(num*1+1); 
    //     });
    //     $('.bt_down').click(function(){ 
    //       var n = $('.bt_down').index(this);
    //       var num = $(".num:eq("+n+")").val();
    //       num = $(".num:eq("+n+")").val(num*1-1); 
    //     });
    //   }) 
            
    // 메인페이지로 이동
    // $(".btn_main").click(function(){
    //     location.href="main.html";
    // });



    // $('.btn_o').mouseover(function(){
    //     if(parseInt($('header').css('width'))>800)
    //         $('.gnb_depth2_1').stop().fadeIn('fast');
    // });
    // $('.btn_o').mouseout(function(){
    //     $('.gnb_depth2_1').stop().fadeOut('fast');
    // });



    // $('.btn_o').hover(function(){
    //     $(this).addClass().css("background-color","#d99f9d").css("border","none");

    // },
    // function(){
    //     $(this).removeClass().css("background-color","#d99f9d").css("border","1px solid #555");
        
    // });

    // if($('.btn_o').hover(function(){
    //     $(this).addClass().css("background-color","#d99f9d").css("border","none");
    // else($(function(){
    //     $(this).removeClass().css("background-color","#d99f9d").css("border","1px solid #555");
    // )};

   






// function allCheckFunc( obj ) {
// 		$("[class=chk_item]").prop("checked", $(obj).prop("checked") );
// }

// /* 체크박스 체크시 전체선택 체크 여부 */
// function oneCheckFunc( obj )
// {
// 	var allObj = $("[id=chk]");
// 	var objClass = $(obj).attr("class");

// 	if( $(obj).prop("checked") )
// 	{
// 		checkBoxLength = $("[class="+ objClass +"]").length;
// 		checkedLength = $("[class="+ objClass +"]:checked").length;

// 		if( checkBoxLength == checkedLength ) {
// 			allObj.prop("checked", true);
// 		} else {
// 			allObj.prop("checked", false);
// 		}
// 	}
// 	else
// 	{
// 		allObj.prop("checked", false);
// 	}
// }

// $(function(){
// 	$("[id=chk]").click(function(){
// 		allCheckFunc( this );
// 	});
// 	$("[class=chk_item]").each(function(){
// 		$(this).click(function(){
// 			oneCheckFunc( $(this) );
// 		});
// 	});
// });



    // $( "input[type=checkbox]" ).each(function(){      
    //     $(this).attr('checked', true);
    // });

    // $("input[type=checkbox]").attr("checked",true);

    // $("#chk").click(function(){
    //     $("input[type=checkbox]").prop("checked",true);

    // });

    // $('#chk').click(function(){
    //     // $('.chk_item').
    //     if($('#chk').is(":checked")){
    //         //$('.chk_item').prop("checked",false);
    //         $("input[type=checkbox]").prop("checked",true);
    //     }
    //     else
    //         $("input[type=checkbox]").prop("checked",false);
        // else{
        //     $('.chk_item').prop("checked",true);
        // }
    // });
