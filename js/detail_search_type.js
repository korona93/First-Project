$(document).ready(function() {
    $('input[type="checkbox"][name="type"]').click(function(){
        if ($(this).prop('checked')
            && $('input[type="checkbox"][name="type"]:checked').size()>1) {
            $(this).prop('checked', false);
        alert('중복선택이 불가합니다.');
        }
    });
    $('input[type="radio"][name="category"]').click(function(){
        if('.menu1 li:first'){
            $('.menu2 ul:fisrt').css("display","block");
        }
        else if('.menu1 li:last'){
            $('.menu2 ul:first').css("display","none");
            $('.menu2 ul:last').css("display","block");
        }
    })
});

