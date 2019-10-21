// 처음 상품을 담으면 닫혀있던 네비바가 자동으로 slideUp되서 보여지게![미완]

// 네비바 열고 닫기[완]]
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

	// 장바구니수량 1미만 안됨 = >>>어떻게 할지[미완]
	// 1. 숫자를 1미만으로 내릴 수 없게[경고창 없이]
	// 2. 소수점/한글 안되게!
	// 3. 버튼을 눌러서도 작동될 수 있게!
	$('.inputNumber').blur(function () {
		var value = $(this).val();
		if (value == "") {
			alert("최소 구매수량은 1개입니다.");
			$(this).val("1").focus();
		}
	});

	//전체삭제 버튼 클릭시 모든 상품 삭제 [완]
	//[product_all 클래스 만들어서 상품을 안에 담기???고민]
	$('.btn_delete').click(function(){
		var ul = $('.product_all');
		ul.remove();
	});

	// 삭제 버튼 클릭시 리스트 삭제[완]
	$('.del').click(function(){
		var li = $(this).parent().parent().parent().parent();
		li.remove();
	});

	// totalprice 변경[미완]
	var totalP=0;
	for(var i=1; i<=3; i++){
		var price = Number($("#prod"+i).text());
		var eachT = price*$("#inp"+i).val();
		totalP += eachT;
	}
	$("#total").text(totalP);	
	// 1 인풋변경될때마다 2 삭제버튼 3 상품들어올때마다 totalprice함수 실행되는 이벤트 작성하기!!!!!!!!!!

	// 1 상품이 들어올때  2 삭제버튼 3 전체삭제 클릭시 --> 네비바 위에 상품 갯수 표시 이벤트 작성하기  
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

// 상품이 많이 들어올때 스크롤바만들어서 해당 width이상으로 상품을 담을 수 있게[미완]

// 네비바 헤더에 상품갯수 자동으로 세서 넣기
