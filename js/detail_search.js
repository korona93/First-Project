// 네비바 열고 닫기
$(document).ready(function(){

	$("#navBtn").click(function(){
        $(".navContentWrap").stop().slideToggle("fast");
		// 이미지 변환 넣어야함!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
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

	// totalprice 변경
	var totalP=0;
	for(var i=1; i<=3; i++){
		var price = Number($("#prod"+i).text());
		var eachT = price*$("#inp"+i).val();
		totalP += eachT;
	}
	$("#total").text(totalP);	  

});
// 인풋변경될때마다 토탈프라이스 함수 실행되는 이벤트 작성하기!!!!!!!!!!!!!!!!!!!!!!!!!!
	// var allinput = new Array;
	// for(var i=1; i<=3; i++){
	// 	allinput = {$("#inp"+i).val();}
	// }
	



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