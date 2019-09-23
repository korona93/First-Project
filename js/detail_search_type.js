$(document).ready(function() {
    $('input[name=category]').on('click',function(){
        var chkValue = $('input[name=category]:checked').val();
        if(chkValue == '1'){
            $('#type .fashion').css('display','block');
            $('#type .cosmetic').css('display','none');
            $('input[name="type"]').removeAttr('checked');
        }else if(chkValue=='2'){
            $('#type .fashion').css('display','none');
            $('#type .cosmetic').css('display','block');
            $('input[name="type"]').removeAttr('checked');
            $('#subType div').css('display','none');
        }
    });
    $('input[name=type]').on('click',function(){
        var chkValue = $('input[name=type]:checked').val();
        $('#subType .menu3').css('display','block');
        if(chkValue == '1'){
            $('#subType .fs1').css('display','block');
            $('#subType .fs2').css('display','none');
            $('#subType .fs3').css('display','none');
            $('#subType .fs4').css('display','none');
            $('#subType .fs5').css('display','none');
            $('#subType .fs6').css('display','none');
            $('#subType .fs7').css('display','none');
            $('#subType .fs8').css('display','none');
        }
        else if(chkValue == '2'){
            $('#subType .fs1').css('display','none');
            $('#subType .fs2').css('display','block');
            $('#subType .fs3').css('display','none');
            $('#subType .fs4').css('display','none');
            $('#subType .fs5').css('display','none');
            $('#subType .fs6').css('display','none');
            $('#subType .fs7').css('display','none');
            $('#subType .fs8').css('display','none');
        }
        else if(chkValue == '3'){
            $('#subType .fs1').css('display','none');
            $('#subType .fs2').css('display','none');
            $('#subType .fs3').css('display','block');
            $('#subType .fs4').css('display','none');
            $('#subType .fs5').css('display','none');
            $('#subType .fs6').css('display','none');
            $('#subType .fs7').css('display','none');
            $('#subType .fs8').css('display','none');
        }
        else if(chkValue == '4'){
            $('#subType .fs1').css('display','none');
            $('#subType .fs2').css('display','none');
            $('#subType .fs3').css('display','none');
            $('#subType .fs4').css('display','block');
            $('#subType .fs5').css('display','none');
            $('#subType .fs6').css('display','none');
            $('#subType .fs7').css('display','none');
            $('#subType .fs8').css('display','none');
        }
        else if(chkValue == '5'){
            $('#subType .fs1').css('display','none');
            $('#subType .fs2').css('display','none');
            $('#subType .fs3').css('display','none');
            $('#subType .fs4').css('display','none');
            $('#subType .fs5').css('display','block');
            $('#subType .fs6').css('display','none');
            $('#subType .fs7').css('display','none');
            $('#subType .fs8').css('display','none');
        }
        else if(chkValue == '6'){
            $('#subType .fs1').css('display','none');
            $('#subType .fs2').css('display','none');
            $('#subType .fs3').css('display','none');
            $('#subType .fs4').css('display','none');
            $('#subType .fs5').css('display','none');
            $('#subType .fs6').css('display','block');
            $('#subType .fs7').css('display','none');
            $('#subType .fs8').css('display','none');
        }
        else if(chkValue == '7'){
            $('#subType .fs1').css('display','none');
            $('#subType .fs2').css('display','none');
            $('#subType .fs3').css('display','none');
            $('#subType .fs4').css('display','none');
            $('#subType .fs5').css('display','none');
            $('#subType .fs6').css('display','none');
            $('#subType .fs7').css('display','block');
            $('#subType .fs8').css('display','none');
        }
        else if(chkValue == '8'){
            $('#subType .fs1').css('display','none');
            $('#subType .fs2').css('display','none');
            $('#subType .fs3').css('display','none');
            $('#subType .fs4').css('display','none');
            $('#subType .fs5').css('display','none');
            $('#subType .fs6').css('display','none');
            $('#subType .fs7').css('display','none');
            $('#subType .fs8').css('display','block');
        }
    });
});

