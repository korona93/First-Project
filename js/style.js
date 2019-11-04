function addComma(num) {
    var regexp = /\B(?=(\d{3})+(?!\d))/g;
    return num.toString().replace(regexp, ',');
}

$(document).ready(function(){

    // 체크박스 전체선택(기본)
    $("input[type=checkbox]").prop("checked", true);

    // 가격 ,
    
    //$(this).text(addComma($(this).text()));
    // 가격1
    //$(".sell_price").text("원");
    //var f_p = $("#price_1").text(addComma($(this).text()));

    var amount_num = new Array();
    $('.amount.amount_num').each(function(i,a){
        amount_num[i] = parseInt($(this).val());
        console.log(amount_num[i]);
    });

    $("#price_1").append("원");
    $("#price_2").append("원");
    $("#price_3").append("원");

    // 가격2
    $(".amount").val();
    var o_price1 = parseInt($("#price_1").text()); // 기본값 가져오기
    var o_price2 = parseInt($("#price_2").text());
    var o_price3 = parseInt($("#price_3").text());

    o_price1 = o_price1*amount_num[0];
    o_price2 = o_price2*amount_num[1];
    o_price3 = o_price3*amount_num[2];

    console.log(o_price1);

    $("#price_11").append(o_price1+"원").show();
    $("#price_22").append(o_price2+"원").show();
    $("#price_33").append(o_price3+"원").show();
    // $("#price_11").append(addComma(o_price1)+"원").show();
    // $("#price_22").append(addComma(o_price2)+"원").show();
    // $("#price_33").append(addComma(o_price3)+"원").show();

    // 포인트
    var o_point1  = parseInt(o_price1)*0.03;
    var o_point2  = parseInt(o_price2)*0.03;
    var o_point3  = parseInt(o_price3)*0.03;
    // console.log(o_point1);
    // console.log(o_point2);
    // console.log(o_point3);
    var img = '<img class="p_img" src="../images/icon_201809131207584600.png" />';
    $(".point:eq(0)").text(o_point1+"원").prepend(img);
    $(".point:eq(1)").text(o_point2+"원").prepend(img);
    $(".point:eq(2)").text(o_point3+"원").prepend(img);


    // 기본 전체가격
    var q = parseInt($("#price_11").text());
    var qq = parseInt($("#price_22").text());
    var qqq = parseInt($("#price_33").text());
    var bb = q+qq+qqq;
    $("#last").html(bb);
    var cj = parseInt($("#cj").text());
    $("#all_last").html(bb+cj);


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

    // 체크박스 1개 해제시 전체선택 해제
    // 전체선택 해제 시 상품 체크박스 전체선택하면 전체선택 체크
    $(".type_chk").click(function(){
        var chk_num = $("input[name=check_chk]").length;
        if($("input[name=check_chk]:checked").length==chk_num){
            $("#all_check").prop("checked",true);
        }else{
            $("#all_check").prop("checked",false);
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
    // var sw=1;
    // $(".btn_o_page").click(function(){ // 옵션 버튼 클릭시
    //     if(sw==1){ // sw=1 옵션안보임
    //         $('.cart_option').css("display","inline-block").css("position","absolute");
    //         sw=-1;
    //         var o = $(this).offset();
    //         // console.log(o.top+"\n");
    //         // console.log(o.left);
    //         var p = $(".cart_option").css({"top":o.top+26}).css({"left":o.left-452});
    //         if($(this).hasClass(p))
    //             $(this).removeClass(p);
    //         else
    //             $(this).addClass(p);
    //     // }else{
    //     //     $('.cart_option').css("display","none");
    //     //     sw=1;
    //     // }
    //     }
    // });
    $(".btn_o_page").click(function(){
        //var show = $('.cart_option').show();
        var o = $(this).offset();
        var show = $(".cart_option").css({"top":o.top+24}).css({"left":o.left-460});
        if($(this).hasClass(show)){
            $(this).removeClass(show);
        }
        else{
            $('.cart_option').css("display","inline-block").css("position","absolute");
            $(this).addClass(show);

        }
    });  
    
    // X 이미지 눌렀을 때 옵션창 닫기
    $("#op_close").click(function(){
       $('.cart_option').hide();
    //    sw=1;
    });


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
    // 옵션 추가
    // $("#o_insert").click(function(){
    //     console.log($(".b_sel").val());
    //     var color_sel = $("#color option:selected").val();
    //     var size_sel = $("#size option:selected").val();
    //     $(".p_name").change(function(){
    //         if($(color_sel)==($(".b_sel").val()) && $(size_sel)==($(".b_sel").val())){
    //             alert("필수 선택을 해주세요");
    //         }else{
    //             alert("변경되었습니다.");
    //             $(".color_option").change(color_sel);
    //             $(".size_option").change(size_sel);
    //             sw=1;
    //         }
    //     });
    // });


    // 옵션 색상,사이즈(추가)
    // 옵션 추가
    // 클릭시 상품 추가
    // https://m.blog.naver.com/PostView.nhn?blogId=javaking75&logNo=220134913860&proxyReferer=https%3A%2F%2Fwww.google.com%2F
    $("#o_insert").click(function(){
        var cloneEleTr = $("table tr:this").clone(); // 복사할 상품
        var color_sel = $("#color option:selected").val(); // color val
        var size_sel = $("#size option:selected").val(); // size val

        console.log(color_sel + "색상");
        console.log(size_sel + "사이즈");

        if(color_sel != "option" && size_sel != "option"){
               
            // $(".color_option").text(color_sel);
            // $(".size_option").text(size_sel);
            //$('.t_productr tr:last td:last').html(this);
            //cloneEleTr.find("input").val(""); //텍스트박스 값 초기화
            //cloneEleTr.find("input[type=checkbox]").removeAttr("checked");
            //$("t_product tr:last").append(cloneEleTr.clone());
            $(".cart_option").hide();      
            } else {
                alert("필수입력 값을 선택해주세요");
            }
    }); 

    // 옵션 색상,사이즈(수정)
    // 옵션 수정
    // 클릭시 옵션 값 변경
    $("#o_update").click(function(){
        var color_sel = $("#color option:selected").val(); // color val
        var size_sel = $("#size option:selected").val(); // size val
        var b_color = $(".color_option").text(this);
        var b_size = $(".size_option").text(this);
        console.log(color_sel + "색상");
        console.log(size_sel + "사이즈");

        if(color_sel != "option" && size_sel != "option"){
            $(b_color).text(color_sel).change();
            $(b_size).text(size_sel).change();
            //$(".color_option").text(color_sel);
            //$(".size_option").text(size_sel);
            $(".cart_option").hide();
            } else {
                alert("필수입력 값을 선택해주세요");
            }
    }); 


    // 수량 + 클릭
    // 수량 변동에 따라 가격 변경
    $('.amount_up').click(function(){
        var n = $('.amount_up').index(this);
        var num = $(".amount:eq("+n+")").val();
        if(num<5){
        num = $(".amount:eq("+n+")").val(num*1+1); 

        var price =  $(".sell_price:eq("+n+")").text();
        var a_price=parseInt(price)*(num.val()); // 수량*가격

        var total =  $(".price_all:eq("+n+")").text(a_price+"원");
        //total.text();
        console.log(total.text() + "total 가격");

        // 포인트
        var t_price = parseInt(total.text());
        var point = (Math.floor(t_price*0.03));
        // ??? 1미만 문제
        var img = '<img class="p_img" src="../images/icon_201809131207584600.png" />';

        //$("#mileage_item").text(point+"원");
        $(".point:eq("+n+")").text(point+"원").prepend(img);

        // 전체가격
        var p_total1 = parseInt($("#price_11").text());
        var p_total2 = parseInt($("#price_22").text());
        var p_total3 = parseInt($("#price_33").text());
        var all_total = p_total1+p_total2+p_total3;
        $("#last").html(all_total);
        var cj = parseInt($("#cj").text());
        $("#all_last").html(all_total+cj);
        }else{
            alert("최대 수량은 5개입니다.");
        }

        
    });

    // 수량 - 클릭
    // 수량 변동에 따라 가격 변경
    $('.amount_down').click(function(){ 
        var n = $('.amount_down').index(this);
        var num = $(".amount:eq("+n+")").val();
        if(num>1){
            num = $(".amount:eq("+n+")").val(num*1-1);

        var price = $(".sell_price:eq("+n+")").text();
        var a_price=parseInt(price)*(num.val()); // 수량*가격

        var total =  $(".price_all:eq("+n+")").text(a_price+"원");
        //total.text();
        console.log(total.text() + "total 가격");

        // 포인트
        var t_price = parseInt(total.text());
        var point = (Math.floor(t_price*0.03));
        $(".point:eq("+n+")").text(point+"원");

        var img = '<img class="p_img" src="../images/icon_201809131207584600.png" />';
        $(".point:eq("+n+")").text(point+"원").prepend(img);

        // 전체가격
        var p_total1 = parseInt($("#price_11").text());
        var p_total2 = parseInt($("#price_22").text());
        var p_total3 = parseInt($("#price_33").text());
        var all_total = p_total1+p_total2+p_total3;
        $("#last").html(all_total);
        var cj = parseInt($("#cj").text());
        $("#all_last").html(all_total+cj);
        }else{
            alert("수량은 1이상이여야합니다.");
        }
    });

    // 수량 input 숫자만 1~5
    $(".amount").keyup(function(){
        var basic = $(".amount").val();
         
        $(this).val( $(this).val().replace(/[^1-5]/g,basic) );

        var amount_num = new Array();
        $('.amount.amount_num').each(function(i,a){
            amount_num[i] = parseInt($(this).val());
            console.log(amount_num[i]);
            $(".amount").text(amount_num[i]);
        });
    });




    // 상품의 수량 가격 가져오기
    // 수정 버튼 클릭시 가격
    $(".btn_num").click(function(){
    //    var g = $(this).parent().parent().children().last().text();
    //    alert(g);
       var price = $(this).closest('tr').find('.price_all').text();
       alert(price);
    });    

    
    // 메인으로
    $("#btn_main").click(function(){
        location.href="https://www.stylenanda.com/";
    });
     

    // 선택상품주문  
        $("#btn_selOrd").click(function(){
        var order_name = $("input[name=check_chk]:checked"); // 선택한 상품
        var name = $(order_name).closest('tr').find('.p_name').text();
        if($("input[name=check_chk]:checked").is(":checked")==true){
            alert(name+" "+"구매페이지X");
        }else{
            alert("선택하신 상품이 없습니다.");
        }
            //location.href="selOrd.html";
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

  
    // 구매하기
    $("#btn_order").click(function(){
        var order_name = $("input[name=check_chk]:checked"); // 선택한 상품
        var name = $(order_name).closest('tr').find('.p_name').text();
        if($("input[name=check_chk]:checked").is(":checked")==true){
            alert(name+" "+"구매페이지X");
        }else{
            alert("선택하신 상품이 없습니다.");
        }
        //location.href="selOrd.html";
    });
});

