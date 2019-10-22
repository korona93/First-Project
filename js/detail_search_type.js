
$(document).ready(function() {
    /* type에 대한 js */
    $('input[name=category]').on('click',function(){
        var chkValue = $('input[name=category]:checked').val();
        if(chkValue == '1'){
            $('#type .fashion').css('display','block');
            $('#type .cosmetic').css('display','none');
            $('input[name="type2"]').removeAttr('checked');
            $('input[name="subType2"]').removeAttr('checked');
            $('#subType1').css('display','block');
            $('#subType2').css('display','none');
            $('#subType2 div').css('display','none');
        }else if(chkValue=='2'){
            $('#type .fashion').css('display','none');
            $('#type .cosmetic').css('display','block');
            $('input[name="type1"]').removeAttr('checked');
            $('input[name="subType1"]').removeAttr('checked');
            $('#subType1').css('display','none');
            $('#subType2').css('display','block');
            $('#subType1 div').css('display','none');
        }
    });
    /* subType에 대한 js */
    $('input[name=type1]').on('click',function(){
        var chkValue = $('input[name=type1]:checked').val();
        $('#subType1 .menu3').css('display','block');
        $('input[name="subType1"]').removeAttr('checked');
        if(chkValue == '1'){
            $('#subType1 .fs1').css('display','block');
            $('#subType1 .fs2').css('display','none');
            $('#subType1 .fs3').css('display','none');
            $('#subType1 .fs4').css('display','none');
            $('#subType1 .fs5').css('display','none');
            $('#subType1 .fs6').css('display','none');
            $('#subType1 .fs7').css('display','none');
            $('#subType1 .fs8').css('display','none');
        }
        else if(chkValue == '2'){
            $('#subType1 .fs1').css('display','none');
            $('#subType1 .fs2').css('display','block');
            $('#subType1 .fs3').css('display','none');
            $('#subType1 .fs4').css('display','none');
            $('#subType1 .fs5').css('display','none');
            $('#subType1 .fs6').css('display','none');
            $('#subType1 .fs7').css('display','none');
            $('#subType1 .fs8').css('display','none');
        }
        else if(chkValue == '3'){
            $('#subType1 .fs1').css('display','none');
            $('#subType1 .fs2').css('display','none');
            $('#subType1 .fs3').css('display','block');
            $('#subType1 .fs4').css('display','none');
            $('#subType1 .fs5').css('display','none');
            $('#subType1 .fs6').css('display','none');
            $('#subType1 .fs7').css('display','none');
            $('#subType1 .fs8').css('display','none');
        }
        else if(chkValue == '4'){
            $('#subType1 .fs1').css('display','none');
            $('#subType1 .fs2').css('display','none');
            $('#subType1 .fs3').css('display','none');
            $('#subType1 .fs4').css('display','block');
            $('#subType1 .fs5').css('display','none');
            $('#subType1 .fs6').css('display','none');
            $('#subType1 .fs7').css('display','none');
            $('#subType1 .fs8').css('display','none');
        }
        else if(chkValue == '5'){
            $('#subType1 .fs1').css('display','none');
            $('#subType1 .fs2').css('display','none');
            $('#subType1 .fs3').css('display','none');
            $('#subType1 .fs4').css('display','none');
            $('#subType1 .fs5').css('display','block');
            $('#subType1 .fs6').css('display','none');
            $('#subType1 .fs7').css('display','none');
            $('#subType1 .fs8').css('display','none');
        }
        else if(chkValue == '6'){
            $('#subType1 .fs1').css('display','none');
            $('#subType1 .fs2').css('display','none');
            $('#subType1 .fs3').css('display','none');
            $('#subType1 .fs4').css('display','none');
            $('#subType1 .fs5').css('display','none');
            $('#subType1 .fs6').css('display','block');
            $('#subType1 .fs7').css('display','none');
            $('#subType1 .fs8').css('display','none');
        }
        else if(chkValue == '7'){
            $('#subType1 .fs1').css('display','none');
            $('#subType1 .fs2').css('display','none');
            $('#subType1 .fs3').css('display','none');
            $('#subType1 .fs4').css('display','none');
            $('#subType1 .fs5').css('display','none');
            $('#subType1 .fs6').css('display','none');
            $('#subType1 .fs7').css('display','block');
            $('#subType1 .fs8').css('display','none');
        }
        else if(chkValue == '8'){
            $('#subType1 .fs1').css('display','none');
            $('#subType1 .fs2').css('display','none');
            $('#subType1 .fs3').css('display','none');
            $('#subType1 .fs4').css('display','none');
            $('#subType1 .fs5').css('display','none');
            $('#subType1 .fs6').css('display','none');
            $('#subType1 .fs7').css('display','none');
            $('#subType1 .fs8').css('display','block');
        }
    });
    $('input[name=type2]').on('click',function(){
        var chkValue = $('input[name=type2]:checked').val();
        $('#subType2 .menu3').css('display','block');
        $('input[name="subType2"]').removeAttr('checked');
        if(chkValue == '1'){
            $('#subType2 .cm1').css('display','block');
            $('#subType2 .cm2').css('display','none');
            $('#subType2 .cm3').css('display','none');
            $('#subType2 .cm4').css('display','none');
            $('#subType2 .cm5').css('display','none');
            $('#subType2 .cm6').css('display','none');
            $('#subType2 .cm7').css('display','none');
            $('#subType2 .cm8').css('display','none');
            $('#subType2 .cm9').css('display','none');
        }
        else if(chkValue == '2'){
            $('#subType2 .cm1').css('display','none');
            $('#subType2 .cm2').css('display','block');
            $('#subType2 .cm3').css('display','none');
            $('#subType2 .cm4').css('display','none');
            $('#subType2 .cm5').css('display','none');
            $('#subType2 .cm6').css('display','none');
            $('#subType2 .cm7').css('display','none');
            $('#subType2 .cm8').css('display','none');
            $('#subType2 .cm9').css('display','none');
        }
        else if(chkValue == '3'){
            $('#subType2 .cm1').css('display','none');
            $('#subType2 .cm2').css('display','none');
            $('#subType2 .cm3').css('display','block');
            $('#subType2 .cm4').css('display','none');
            $('#subType2 .cm5').css('display','none');
            $('#subType2 .cm6').css('display','none');
            $('#subType2 .cm7').css('display','none');
            $('#subType2 .cm8').css('display','none');
            $('#subType2 .cm9').css('display','none');
        }
        else if(chkValue == '4'){
            $('#subType2 .cm1').css('display','none');
            $('#subType2 .cm2').css('display','none');
            $('#subType2 .cm3').css('display','none');
            $('#subType2 .cm4').css('display','block');
            $('#subType2 .cm5').css('display','none');
            $('#subType2 .cm6').css('display','none');
            $('#subType2 .cm7').css('display','none');
            $('#subType2 .cm8').css('display','none');
            $('#subType2 .cm9').css('display','none');
        }
        else if(chkValue == '5'){
            $('#subType2 .cm1').css('display','none');
            $('#subType2 .cm2').css('display','none');
            $('#subType2 .cm3').css('display','none');
            $('#subType2 .cm4').css('display','none');
            $('#subType2 .cm5').css('display','block');
            $('#subType2 .cm6').css('display','none');
            $('#subType2 .cm7').css('display','none');
            $('#subType2 .cm8').css('display','none');
            $('#subType2 .cm9').css('display','none');
        }
        else if(chkValue == '6'){
            $('#subType2 .cm1').css('display','none');
            $('#subType2 .cm2').css('display','none');
            $('#subType2 .cm3').css('display','none');
            $('#subType2 .cm4').css('display','none');
            $('#subType2 .cm5').css('display','none');
            $('#subType2 .cm6').css('display','block');
            $('#subType2 .cm7').css('display','none');
            $('#subType2 .cm8').css('display','none');
            $('#subType2 .cm9').css('display','none');
        }
        else if(chkValue == '7'){
            $('#subType2 .cm1').css('display','none');
            $('#subType2 .cm2').css('display','none');
            $('#subType2 .cm3').css('display','none');
            $('#subType2 .cm4').css('display','none');
            $('#subType2 .cm5').css('display','none');
            $('#subType2 .cm6').css('display','none');
            $('#subType2 .cm7').css('display','block');
            $('#subType2 .cm8').css('display','none');
            $('#subType2 .cm9').css('display','none');
        }
        else if(chkValue == '8'){
            $('#subType2 .cm1').css('display','none');
            $('#subType2 .cm2').css('display','none');
            $('#subType2 .cm3').css('display','none');
            $('#subType2 .cm4').css('display','none');
            $('#subType2 .cm5').css('display','none');
            $('#subType2 .cm6').css('display','none');
            $('#subType2 .cm7').css('display','none');
            $('#subType2 .cm8').css('display','block');
            $('#subType2 .cm9').css('display','none');
        }
        else if(chkValue == '9'){
            $('#subType2 .cm1').css('display','none');
            $('#subType2 .cm2').css('display','none');
            $('#subType2 .cm3').css('display','none');
            $('#subType2 .cm4').css('display','none');
            $('#subType2 .cm5').css('display','none');
            $('#subType2 .cm6').css('display','none');
            $('#subType2 .cm7').css('display','none');
            $('#subType2 .cm8').css('display','none');
            $('#subType2 .cm9').css('display','block');
        }
    });

    $(".subType1").click(function(){
        var select_array= Array();
        var select_cnt = 0;
        var chkbox = $('.subType1');
    
        for(i=0; i<chkbox.length; i++){
            if(chkbox[i].checked==true){
                select_array[select_cnt]=chkbox[i].value;
                select_cnt++;
            }
        }
        /* https://neptune297.tistory.com/60  사용한거*/
        console.log(select_array);
    });


});



$(document).ready(function(){

    
    

});