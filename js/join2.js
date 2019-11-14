$(document).ready(function(){
    $('.btn_red').click(function(){
        var result = input_check(); //입력값 확인, 입력 오류 있을 경우 0 이외의 오류값을 받음
		if(result != 0){
            ErrorTextOut(result);
            return false;
		}else{
            location.href="complete.html";
        }
    });
});

//입력내용 체크
function input_check(){
    var result = 0;

    // 입력 오류 알림
    $("#member_id").removeClass("inp_error");
    $("#pwd1").removeClass("inp_error");
    $("#pwd2").removeClass("inp_error");
    $(".pwdQ").removeClass("inp_error");
    $(".pwdA").removeClass("inp_error");
    $("#name").removeClass("inp_error");
    $("#email").removeClass("inp_error");

    // 입력 오류 메세지 제거
    $("#id_error").empty();
    $("#pwd1_error").empty();
    $("#pwd2_error").empty();
    $("#pwdQ_error").empty();
    $("#pwdA_error").empty();
    $("#name_error").empty();
    $("#email_error").empty();

    // 변수에 값 받음
    var id = $("#member_id").val();
    var pwd1 = $("#pwd1").val();
    var pwd2 = $("#pwd2").val();
    var pwdQ = $(".pwdQ").val();
    var pwdA = $(".pwdA").val();
    var name = $("#name").val();
    var email = $("#email").val();
    
    // 정규표현식
    var idCheck = /^[A-Za-z0-9+]{4,16}$/;
    var pwdChk = /^.*(?=.{10,16})(?=.*[0-9])(?=.*[a-zA-Z]).*$/;
    var nameChk = /^[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/;
    var emailChk = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    // /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/; 전화번호, 폰번호, 하이픈
    // /^\d{2,3}-\d{3,4}-\d{4}$/; 전화번호
    // /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/; 폰번호
    // /^[가-힣A-Za-z]{2,5}$/; 한글, 영문



    // 입력내용 체크
    // 아이디
    if(id == ""){
        $("#id_error").html("아이디를 입력해주세요.");
        $("#member_id").addClass("inp_error");
        if(result == 0) {
            result = 10;
        }
    }else if(idCheck.test(id) == false){
        $("#id_error").html("형식에 맞게 입력해주세요.");
        $("#member_id").addClass("inp_error");
        if(result == 0) {
            result = 11;
        }
    }

    // 비밀번호
    if(pwd1 == ""){
        $("#pwd1_error").html("비밀번호를 입력해주세요.");
        $("#pwd1").addClass("inp_error");
        if(result == 0) {
            result = 20;
        }
    }else if(!pwdChk.test(pwd1)){
        $("#pwd1_error").html("영문 대,소문자, 숫자, 특수문자 조합해주세요.");
        $("#pwd1").addClass("inp_error");
        if(result == 0) {
            result = 21;
        }
    }else if(/(\w)\1\1/.test(pwd1)){
        $("#pwd1_error").html("같은 문자를 3번 이상 사용하실 수 없습니다.");
        $("#pwd1").addClass("inp_error");
        if(result == 0) {
            result = 22;
        }
    }else if(pwd1.search(id)>-1){
        $("#pwd1_error").html("비밀번호에 아이디가 포함되어있습니다.");
        $("#pwd1").addClass("inp_error");
        if(result == 0) {
            result = 23;
        }
    }

    // 비밀번호 확인
    if(!(pwd1 == pwd2)){
        $("#pwd2_error").html("비밀번호 설정이 다릅니다.");
        $("#pwd2").addClass("inp_error");
        if(result == 0) {
            result = 30;
        }
    }

    // 비밀번호 확인 질문
    if(pwdQ == ""){
        $("#pwdQ_error").html("비밀번호 확인 질문을 작성해주세요.");
        $(".pwdQ").addClass("inp_error");
        if(result == 0) {
            result = 40;
        }
    }

    // 비밀번호 확인 답변
    if(pwdA == ""){
        $("#pwdA_error").html("비밀번호 확인 답변을 작성해주세요.");
        $(".pwdA").addClass("inp_error");
        if(result == 0) {
            result = 50;
        }
    }

    // 이름
    if(name == ""){
        $("#name_error").html("이름을 입력해주세요.");
        $("#name").addClass("inp_error");
        if(result == 0) {
            result = 60;
        }
    }else if(nameChk.test(name) == false){
        $("#name_error").html("한글은 2 ~ 4글자(공백 없음) , 영문은 Firstname(2 ~ 10글자) (space) Lastname(2 ~ 10글자)로 입력해 주세요.");
        $("#name").addClass("inp_error");
        if(result == 0) {
            result = 61;
        }
    }

    // 이메일
    if(email == ""){
        $("#email_error").html("이메일을 입력해주세요.");
        $("#email").addClass("inp_error");
        if(result == 0) {
            result = 70;
        }
    }else if(email.match(emailChk) == null){
        $('#email_error').html("올바르게 입력해주세요.");
        $("#email").addClass("inp_error");
        if(result == 0) {
            result = 71;
        }
    }
    return result;
}

// alert 처리용
// input_check로 오류값을 받은 경우 이 함수를 실행
// 오류 번호를 인자로 받아서 관련된 작업을 처리한다.
function ErrorTextOut(errorCount) {
    
    // errorCount : error parameter
    switch(errorCount) {

        //=========================================================// 아이디 입력 오류
        
        case 10:
                alert("아이디를 입력해주세요.");
                $("#member_id").focus();
        break;

        case 11:
                alert("형식에 맞게 입력해주세요.");
                $("#member_id").focus();
        break;

        //=========================================================// 비밀번호 입력 오류

        case 20:
                alert("비밀번호를 입력해주세요.");
                $("#pwd1").focus();
        break;

        case 21:
                alert("영문 대,소문자, 숫자, 특수문자 조합해주세요.");
                $("#pwd1").focus();
        break;

        case 22:
                alert("같은 문자를 3번 이상 사용하실 수 없습니다.");
                $("#pwd1").focus();
        break;

        case 23:
                alert("비밀번호에 아이디가 포함되어있습니다.");
                $("#pwd1").focus();
        break;

        //=========================================================// 비밀번호 설정 오류

        case 30:
                alert("비밀번호 설정이 다릅니다.");
                $("#pwd2").focus();
        break;

        //=========================================================// 비밀번호 확인 질문 오류

        case 40:
                alert("비밀번호 확인 질문을 작성해주세요.");
                $(".pwdQ").focus();
        break;

        //=========================================================// 비밀번호 답변 오류

        case 50:
                alert("비밀번호 확인 답변을 작성해주세요.");
                $(".pwdA").focus();
        break;

        //=========================================================// 이름 입력 오류

        case 60:
                alert("이름을 입력해주세요.");
                $("#name").focus();
        break;

        case 61:
                alert("이름을 확인해주세요.");
                $("#name").focus();
        break;

        //=========================================================// 이메일 입력 오류

        case 70:
                alert("이메일을 입력해주세요.");
                $("#email").focus();
        break;

        case 71:
                alert("올바르게 입력해주세요.");
                $("#email").focus();
        break;
    }

}