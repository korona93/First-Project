$(document).ready(function(){

    $('.btn_L').click(function(){
        if($('input:checkbox[name="agree_check1"]').is(":checked") == true&&
        $('input:checkbox[name="agree_check2"]').is(":checked") == true){
            location.href="join2.html";
        }else if($('input:checkbox[name="agree_check1"]').is(":checked") == false){
            alert("이용약관에 동의해주세요.")
        }else if($('input:checkbox[name="agree_check2"]').is(":checked") == false){
            alert("개인정보 수집 및 이용에 동의해 주세요.")
        }else{
            alert("이용약관에 동의해주세요.")
        }
      
    });
});

