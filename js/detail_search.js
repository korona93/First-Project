// 네비바 열고 닫기
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

// 네비바 금액에 ',' 삽입!
	// addComma() : 숫자 타입값을 매개변수로 받아 콤마를 추가하여 문자열로 반환해주는 함수
function addComma(num) {
	var regexp = /\B(?=(\d{3})+(?!\d))/g;
	return num.toString().replace(regexp, ',');
}
$(function(){
	// console.log(typeof $('.selectproduct_price').text());
	$('.selectproduct_price').each(function () {
		$(this).text(addComma($(this).text()));
	});
});



$(function(){

	// 장바구니수량
	$('.inputNumber').blur(function () {
		var value = $(this).val();
		if (value == "") {
			alert("최소 구매수량은 1개입니다.");
			$(this).val("1").focus();
		}
	});


	// 삭제 버튼 클릭시 리스트 삭제
	$('.del').click(function(){
		var li = $(this).parent().parent().parent().parent();
		li.remove();
	});

	// // totalprice 변경
	 $(".selectproduct_price").show(function(){
	 	var each = $(this).$('inputNumber').val() * $(this).$('selectproduct_price').val();
	 	var total = 
	});
	$(인풋).each(change)

});