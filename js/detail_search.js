// 상품이 많이 들어올때 스크롤바만들어서 해당 width이상으로 상품을 담을 수 있게[완료] 이것은 CSS에서 처리하는 것이다.

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

	// 2. 소수점/한글 안되게![완료]
	//텍스트박스input-text에-숫자만-입력-가능하도록-설정
	$("input:text[numberOnly]").on("keyup", function() {
		$(this).val($(this).val().replace(/[^0-9]/g,""));
		// blank();
	});


	// 3. 버튼을 눌러서도 작동될 수 있게! [완료]
	$('.up').on('click', function(){
		var i = $(this).parent().prev();
		i.val(parseInt(i.val())+1).focus();
		// if(i==""){
		// 	$(this).val(1).focus();
		// }
		calcul();
	
	});
	$('.down').on('click', function(){
		var i = $(this).parent().prev();
		i.val(parseInt(i.val())-1).focus();
		// blank();
		calcul();
		
	});	
	// 장바구니수량 1미만 안됨 [완료]
	// 1. 숫자를 1미만으로 내릴 수 없게 [완료]
	$('.inputNumber').blur(function (){
		var value = $(this).val();
		if(value==""||value<1){
			alert("최소 구매수량은 1개입니다.");
			$(this).val(1).focus();
		}
		calcul();
	});
	//.on("change keyup paste", function() )
	//최대 5개까지만되도록
	$('.inputNumber').blur(function (){
		var value = $(this).val();
		if(value>=6){
			alert("최대 구매수량은 5개입니다.");
			$(this).val(5).focus();
		}
		calcul();
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
	$('.navPrice').each(function(index, item){
		var price = Number($(this).find('.prod').text());
		
		var eachT = price*$(this).find('.inp').val();
		
		totalP += eachT;
	});
	$("#total").text(totalP);
}

//네비바 안의 상품갯수
function productNum(){
	$('em').text($('.eachProduct').length);
}

//            ***********문제****************
//**  콤마 삽입하면 안먹음[빼고 하자!]

 
// 네비바 금액에 ',' 삽입!
	// addComma() : 숫자 타입값을 매개변수로 받아 콤마를 추가하여 문자열로 반환해주는 함수
function addComma(num) {
 	var regexp = /\B(?=(\d{3})+(?!\d))/g;
 	return num.toString().replace(regexp, ',');
}

// $(function(){
// 	// console.log(typeof $('.selectproduct_price').text());
// 	$('.selectproduct_price').each(function () {
// 		$(this).text(addComma($(this).text()));
// 	});
// });

function blank(){
	var i = $('inp').val();
	i = i.replace("",1);
}



