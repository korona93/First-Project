// 상품이 많이 들어올때 스크롤바만들어서 해당 width이상으로 상품을 담을 수 있게[완료] 이것은 CSS에서 처리하는 것이다.
//  but!!!  DB연동해야하기때문에 작동하는지는 미지수

// 네비바 열고 닫기[완료]]
$(document).ready(function(){
	$("#navBtn").click(function(){
		if($(".i_toggle").css('background-position')=="-124px -345px"){
			$(".navContentWrap").stop().slideDown("fast");
			$(".i_toggle").css('background-position','-124px -331px');
		}else{
			$(".navContentWrap").stop().slideUp("fast");
			$(".i_toggle").css('background-position',"-124px -345px");
		}
	});
});	

$(function(){

	calcul();
	$('em').append($('.eachProduct').length);

	// 3. 버튼을 눌러서도 작동될 수 있게! [완료]
	$('.up').on('click', function(){
		var i = $(this).parent().prev();
		i.val(parseInt(i.val())+1).focus();
		calcul();
	});
	$('.down').on('click', function(){
		var i = $(this).parent().prev();
		i.val(parseInt(i.val())-1).focus();
		calcul();
	});	
	// 장바구니수량 1미만 안됨 [완료]
	// 1. 숫자를 1미만으로 내릴 수 없게 [완료]
	$('.inputNumber').blur(function () {
		var value = parseInt($(this).val());
		if (value==""||value<1){
			alert("최소 구매수량은 1개입니다.");
			$(this).val(1).focus();
		}
	});

	// 2. 소수점/한글 안되게![완료]
	//텍스트박스input-text에-숫자만-입력-가능하도록-설정
	$("input:text[numberOnly]").on("keyup", function() {
    	$(this).val($(this).val().replace(/[^0-9]/g,""));
	});

	//전체삭제 버튼 클릭시 모든 상품 삭제 [완료]
	//[product_all 클래스 만들어서 상품을 안에 담기???고민해보자]
	$('.btn_delete').click(function(){
		var ul = $('.product_all');
		ul.remove();
		calcul();
		productNum();
	});

	// 삭제 버튼 클릭시 리스트 삭제[완료]
	$('.del').click(function(){
		var li = $(this).parent().parent().parent().parent();
		li.remove();
		calcul();
		productNum();
	});

});

// 총계 계산[완료]
function calcul(){
	var totalP=0;
	for(var i=1; i<=$('.eachProduct').length; i++){
		var price = Number($("#prod"+i).text());
		var eachT = price*$("#inp"+i).val();
		totalP += eachT;
	}
	$("#total").text(totalP);	
}
//네비바 안의 상품갯수
function productNum(){
	// var i = $('.eachProduct').length;
	// console.log(i);
	$('em').text($('.eachProduct').length);
}


//            ***********주요 문제****************
//**  0으로 내려서 경고창 띄우면 바로 돈계산 적용이 안됨 **
//**  콤마 삽입하면 안먹음!!!!!
//**  스크롤바

 
// 네비바 금액에 ',' 삽입!
	// addComma() : 숫자 타입값을 매개변수로 받아 콤마를 추가하여 문자열로 반환해주는 함수
// function addComma(num) {
// 	var regexp = /\B(?=(\d{3})+(?!\d))/g;
// 	return num.toString().replace(regexp, ',');
// }

// $(function(){
// 	// console.log(typeof $('.selectproduct_price').text());
// 	$('.selectproduct_price').each(function () {
// 		$(this).text(addComma($(this).text()));
// 	});
// });



