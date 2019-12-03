
$(document).ready(function() {
    $('.detailContentWrap2 .detailCon').css('display','none');
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
            $('.detailContentWrap1').css('display','block');
            $('.detailContentWrap3').css('display','none');
            $('.detailContentWrap4').css('display','none');
            $('.detailContentWrap1 .detailCon').css('display','block');
            $('.detailContentWrap2 .detailCon').css('display','none');
            $('.selected').html("");
            $(".totalView").click(function(){
                $('.detailContentWrap1').css('display','block');
                $('.detailContentWrap2').css('display','block');
            });
            $(".newProduct").click(function(){
                $('.detailContentWrap1').css('display','none');
                $('.detailContentWrap2').css('display','none');
                $('.detailContentWrap3').css('display','block');
                $('.detailContentWrap4').css('display','none');
                $('.detailContentWrap3 > .detailCon:nth-of-type(1)').css('display','block');
                $('.detailContentWrap3 > .detailCon:nth-of-type(2)').css('display','none');
                $('.detailContentWrap3 > .detailCon:nth-of-type(3)').css('display','none');
                $('.detailContentWrap3 > .detailCon:nth-of-type(4)').css('display','none');
            });
            $(".hot").click(function(){
                $('.detailContentWrap1').css('display','none');
                $('.detailContentWrap2').css('display','none');
                $('.detailContentWrap3').css('display','block');
                $('.detailContentWrap4').css('display','none');
                $('.detailContentWrap3 > .detailCon:nth-of-type(1)').css('display','none');
                $('.detailContentWrap3 > .detailCon:nth-of-type(2)').css('display','block');
                $('.detailContentWrap3 > .detailCon:nth-of-type(3)').css('display','none');
                $('.detailContentWrap3 > .detailCon:nth-of-type(4)').css('display','none');    
            });
            $(".lowPrice").click(function(){
                $('.detailContentWrap1').css('display','none');
                $('.detailContentWrap2').css('display','none');
                $('.detailContentWrap3').css('display','block');
                $('.detailContentWrap4').css('display','none');
                $('.detailContentWrap3 > .detailCon:nth-of-type(1)').css('display','none');
                $('.detailContentWrap3 > .detailCon:nth-of-type(2)').css('display','none');
                $('.detailContentWrap3 > .detailCon:nth-of-type(3)').css('display','block');
                $('.detailContentWrap3 > .detailCon:nth-of-type(4)').css('display','none');    
            });
            $(".highPrice").click(function(){
                $('.detailContentWrap1').css('display','none');
                $('.detailContentWrap2').css('display','none');
                $('.detailContentWrap3').css('display','block');
                $('.detailContentWrap4').css('display','none');
                $('.detailContentWrap3 > .detailCon:nth-of-type(1)').css('display','none');
                $('.detailContentWrap3 > .detailCon:nth-of-type(2)').css('display','none');
                $('.detailContentWrap3 > .detailCon:nth-of-type(3)').css('display','none');
                $('.detailContentWrap3 > .detailCon:nth-of-type(4)').css('display','block');    
            });
        }else if(chkValue=='2'){
            $('#type .fashion').css('display','none');
            $('#type .cosmetic').css('display','block');
            $('input[name="type1"]').removeAttr('checked');
            $('input[name="subType1"]').removeAttr('checked');
            $('#subType1').css('display','none');
            $('#subType2').css('display','block');
            $('#subType1 div').css('display','none');
            $('.detailContentWrap2').css('display','block');
            $('.detailContentWrap3').css('display','none');
            $('.detailContentWrap4').css('display','none');
            $('.detailContentWrap1 .detailCon').css('display','none');
            $('.detailContentWrap2 .detailCon').css('display','block');
            $('.selected').html("");
            $(".totalView").click(function(){
                $('.detailContentWrap1').css('display','block');
                $('.detailContentWrap2').css('display','block');
            });
            $(".newProduct").click(function(){
                $('.detailContentWrap1').css('display','none');
                $('.detailContentWrap2').css('display','none');
                $('.detailContentWrap3').css('display','none');
                $('.detailContentWrap4').css('display','block');
                $('.detailContentWrap4 > .detailCon:nth-of-type(1)').css('display','block');
                $('.detailContentWrap4 > .detailCon:nth-of-type(2)').css('display','none');
                $('.detailContentWrap4 > .detailCon:nth-of-type(3)').css('display','none');
                $('.detailContentWrap4 > .detailCon:nth-of-type(4)').css('display','none');
            });
            $(".hot").click(function(){
                $('.detailContentWrap1').css('display','none');
                $('.detailContentWrap2').css('display','none');
                $('.detailContentWrap3').css('display','none');
                $('.detailContentWrap4').css('display','block');
                $('.detailContentWrap4 > .detailCon:nth-of-type(1)').css('display','none');
                $('.detailContentWrap4 > .detailCon:nth-of-type(2)').css('display','block');
                $('.detailContentWrap4 > .detailCon:nth-of-type(3)').css('display','none');
                $('.detailContentWrap4 > .detailCon:nth-of-type(4)').css('display','none');    
            });
            $(".lowPrice").click(function(){
                $('.detailContentWrap1').css('display','none');
                $('.detailContentWrap2').css('display','none');
                $('.detailContentWrap3').css('display','none');
                $('.detailContentWrap4').css('display','block');
                $('.detailContentWrap4 > .detailCon:nth-of-type(1)').css('display','none');
                $('.detailContentWrap4 > .detailCon:nth-of-type(2)').css('display','none');
                $('.detailContentWrap4 > .detailCon:nth-of-type(3)').css('display','block');
                $('.detailContentWrap4 > .detailCon:nth-of-type(4)').css('display','none');    
            });
            $(".highPrice").click(function(){
                $('.detailContentWrap1').css('display','none');
                $('.detailContentWrap2').css('display','none');
                $('.detailContentWrap3').css('display','none');
                $('.detailContentWrap4').css('display','block');
                $('.detailContentWrap4 > .detailCon:nth-of-type(1)').css('display','none');
                $('.detailContentWrap4 > .detailCon:nth-of-type(2)').css('display','none');
                $('.detailContentWrap4 > .detailCon:nth-of-type(3)').css('display','none');
                $('.detailContentWrap4 > .detailCon:nth-of-type(4)').css('display','block');    
            });
        }
    });
    /* subType에 대한 js */
    $('input[name=type1]').on('click',function(){
        var chkValue = $('input[name=type1]:checked').val();
        $('#subType1 .menu3').css('display','block');
        $('input[name="subType1"]').removeAttr('checked');
        $('.detailContentWrap1').css('display','block');
        $('.detailContentWrap3').css('display','none');
        if(chkValue == '1'){
            $('#subType1 .fs1').css('display','block');
            $('#subType1 .fs2').css('display','none');
            $('#subType1 .fs3').css('display','none');
            $('#subType1 .fs4').css('display','none');
            $('#subType1 .fs5').css('display','none');
            $('#subType1 .fs6').css('display','none');
            $('#subType1 .fs7').css('display','none');
            $('#subType1 .fs8').css('display','none');
            $('.detailContentWrap1 .detailCon:nth-of-type(1)').css('display','block');
            $('.detailContentWrap1 .detailCon:nth-of-type(2)').css('display','none');
            $('.detailContentWrap1 .detailCon:nth-of-type(3)').css('display','none');
            $('.detailContentWrap1 .detailCon:nth-of-type(4)').css('display','none');
            $('.detailContentWrap1 .detailCon:nth-of-type(5)').css('display','none');
            $('.detailContentWrap1 .detailCon:nth-of-type(6)').css('display','none');
            $('.detailContentWrap1 .detailCon:nth-of-type(7)').css('display','none');
            $('.detailContentWrap1 .detailCon:nth-of-type(8)').css('display','none');
            $('.selected').html("");
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
            $('.detailContentWrap1 .detailCon:nth-of-type(1)').css('display','none');
            $('.detailContentWrap1 .detailCon:nth-of-type(2)').css('display','block');
            $('.detailContentWrap1 .detailCon:nth-of-type(3)').css('display','none');
            $('.detailContentWrap1 .detailCon:nth-of-type(4)').css('display','none');
            $('.detailContentWrap1 .detailCon:nth-of-type(5)').css('display','none');
            $('.detailContentWrap1 .detailCon:nth-of-type(6)').css('display','none');
            $('.detailContentWrap1 .detailCon:nth-of-type(7)').css('display','none');
            $('.detailContentWrap1 .detailCon:nth-of-type(8)').css('display','none');
            $('.selected').html("");
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
            $('.detailContentWrap1 .detailCon:nth-of-type(1)').css('display','none');
            $('.detailContentWrap1 .detailCon:nth-of-type(2)').css('display','none');
            $('.detailContentWrap1 .detailCon:nth-of-type(3)').css('display','block');
            $('.detailContentWrap1 .detailCon:nth-of-type(4)').css('display','none');
            $('.detailContentWrap1 .detailCon:nth-of-type(5)').css('display','none');
            $('.detailContentWrap1 .detailCon:nth-of-type(6)').css('display','none');
            $('.detailContentWrap1 .detailCon:nth-of-type(7)').css('display','none');
            $('.detailContentWrap1 .detailCon:nth-of-type(8)').css('display','none');
            $('.selected').html("");
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
            $('.detailContentWrap1 .detailCon:nth-of-type(1)').css('display','none');
            $('.detailContentWrap1 .detailCon:nth-of-type(2)').css('display','none');
            $('.detailContentWrap1 .detailCon:nth-of-type(3)').css('display','none');
            $('.detailContentWrap1 .detailCon:nth-of-type(4)').css('display','block');
            $('.detailContentWrap1 .detailCon:nth-of-type(5)').css('display','none');
            $('.detailContentWrap1 .detailCon:nth-of-type(6)').css('display','none');
            $('.detailContentWrap1 .detailCon:nth-of-type(7)').css('display','none');
            $('.detailContentWrap1 .detailCon:nth-of-type(8)').css('display','none');
            $('.selected').html("");
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
            $('.detailContentWrap1 .detailCon:nth-of-type(1)').css('display','none');
            $('.detailContentWrap1 .detailCon:nth-of-type(2)').css('display','none');
            $('.detailContentWrap1 .detailCon:nth-of-type(3)').css('display','none');
            $('.detailContentWrap1 .detailCon:nth-of-type(4)').css('display','none');
            $('.detailContentWrap1 .detailCon:nth-of-type(5)').css('display','block');
            $('.detailContentWrap1 .detailCon:nth-of-type(6)').css('display','none');
            $('.detailContentWrap1 .detailCon:nth-of-type(7)').css('display','none');
            $('.detailContentWrap1 .detailCon:nth-of-type(8)').css('display','none');
            $('.selected').html("");
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
            $('.detailContentWrap1 .detailCon:nth-of-type(1)').css('display','none');
            $('.detailContentWrap1 .detailCon:nth-of-type(2)').css('display','none');
            $('.detailContentWrap1 .detailCon:nth-of-type(3)').css('display','none');
            $('.detailContentWrap1 .detailCon:nth-of-type(4)').css('display','none');
            $('.detailContentWrap1 .detailCon:nth-of-type(5)').css('display','none');
            $('.detailContentWrap1 .detailCon:nth-of-type(6)').css('display','block');
            $('.detailContentWrap1 .detailCon:nth-of-type(7)').css('display','none');
            $('.detailContentWrap1 .detailCon:nth-of-type(8)').css('display','none');
            $('.selected').html("");
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
            $('.detailContentWrap1 .detailCon:nth-of-type(1)').css('display','none');
            $('.detailContentWrap1 .detailCon:nth-of-type(2)').css('display','none');
            $('.detailContentWrap1 .detailCon:nth-of-type(3)').css('display','none');
            $('.detailContentWrap1 .detailCon:nth-of-type(4)').css('display','none');
            $('.detailContentWrap1 .detailCon:nth-of-type(5)').css('display','none');
            $('.detailContentWrap1 .detailCon:nth-of-type(6)').css('display','none');
            $('.detailContentWrap1 .detailCon:nth-of-type(7)').css('display','block');
            $('.detailContentWrap1 .detailCon:nth-of-type(8)').css('display','none');
            $('.selected').html("");
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
            $('.detailContentWrap1 .detailCon:nth-of-type(1)').css('display','none');
            $('.detailContentWrap1 .detailCon:nth-of-type(2)').css('display','none');
            $('.detailContentWrap1 .detailCon:nth-of-type(3)').css('display','none');
            $('.detailContentWrap1 .detailCon:nth-of-type(4)').css('display','none');
            $('.detailContentWrap1 .detailCon:nth-of-type(5)').css('display','none');
            $('.detailContentWrap1 .detailCon:nth-of-type(6)').css('display','none');
            $('.detailContentWrap1 .detailCon:nth-of-type(7)').css('display','none');
            $('.detailContentWrap1 .detailCon:nth-of-type(8)').css('display','block');
            $('.selected').html("");
        }
    });
    $('input[name=type2]').on('click',function(){
        var chkValue = $('input[name=type2]:checked').val();
        $('#subType2 .menu3').css('display','block');
        $('input[name="subType2"]').removeAttr('checked');
        $('.detailContentWrap2').css('display','block');
        $('.detailContentWrap3').css('display','none');
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
            $('.detailContentWrap2 .detailCon:nth-of-type(1)').css('display','block');
            $('.detailContentWrap2 .detailCon:nth-of-type(2)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(3)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(4)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(5)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(6)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(7)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(8)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(9)').css('display','none');
            $('.selected').html("");
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
            $('.detailContentWrap2 .detailCon:nth-of-type(1)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(2)').css('display','block');
            $('.detailContentWrap2 .detailCon:nth-of-type(3)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(4)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(5)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(6)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(7)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(8)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(9)').css('display','none');
            $('.selected').html("");
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
            $('.detailContentWrap2 .detailCon:nth-of-type(1)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(2)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(3)').css('display','block');
            $('.detailContentWrap2 .detailCon:nth-of-type(4)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(5)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(6)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(7)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(8)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(9)').css('display','none');
            $('.selected').html("");
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
            $('.detailContentWrap2 .detailCon:nth-of-type(1)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(2)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(3)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(4)').css('display','block');
            $('.detailContentWrap2 .detailCon:nth-of-type(5)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(6)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(7)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(8)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(9)').css('display','none');
            $('.selected').html("");
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
            $('.detailContentWrap2 .detailCon:nth-of-type(1)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(2)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(3)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(4)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(5)').css('display','block');
            $('.detailContentWrap2 .detailCon:nth-of-type(6)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(7)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(8)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(9)').css('display','none');
            $('.selected').html("");
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
            $('.detailContentWrap2 .detailCon:nth-of-type(1)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(2)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(3)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(4)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(5)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(6)').css('display','block');
            $('.detailContentWrap2 .detailCon:nth-of-type(7)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(8)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(9)').css('display','none');
            $('.selected').html("");
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
            $('.detailContentWrap2 .detailCon:nth-of-type(1)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(2)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(3)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(4)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(5)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(6)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(7)').css('display','block');
            $('.detailContentWrap2 .detailCon:nth-of-type(8)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(9)').css('display','none');
            $('.selected').html("");
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
            $('.detailContentWrap2 .detailCon:nth-of-type(1)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(2)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(3)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(4)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(5)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(6)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(7)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(8)').css('display','block');
            $('.detailContentWrap2 .detailCon:nth-of-type(9)').css('display','none');
            $('.selected').html("");
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
            $('.detailContentWrap2 .detailCon:nth-of-type(1)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(2)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(3)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(4)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(5)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(6)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(7)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(8)').css('display','none');
            $('.detailContentWrap2 .detailCon:nth-of-type(9)').css('display','block');
            $('.selected').html("");
        }
    });

    // 패션 클릭 옵션
    $(".subType1").click(function(){
        var select_array = new Array();
        var chkbox = $('.subType1');
        select_cnt=0;        
    
        for(var i=0; i<chkbox.length; i++){
            if(chkbox[i].checked==true){
                select_array[select_cnt++]=chkbox[i].value;    
            }          
        }

        var txt="";
        for(var i=0; i<select_array.length; i++){
            txt += "<span>"+select_array[i]+"<a href='#'>"+"<img src='../images/x_106506.png' width='12px' height='11px'>"+"</a>"+"</span>";
        }
        $('.selected').html(txt);

        $('.selected > span > a > img').click(function(){
            var text = $(this).parent().parent().text();
            $(this).parent().parent().remove();
            for(var i=0; i<chkbox.length; i++){
                if(chkbox[i].value==text){ 
                    chkbox[i].checked=false; 
                }
            }    
        });
    });    
    
    //초기화 버튼
    $(".button").click(function(){
        $('input[name="subType1"]').removeAttr('checked');
        $('.selected').html("");
    });

    // 화장품 클릭 옵션
    $(".subType2").click(function(){
        var select_array = new Array();
        select_cnt=0;
        
        var chkbox = $('.subType2');
        
    
        for(var i=0; i<chkbox.length; i++){
            if(chkbox[i].checked==true){
                select_array[select_cnt++]=chkbox[i].value;             
            }            
        }

        var txt="";
        for(var i=0; i<select_array.length; i++){
            txt += "<span>"+select_array[i]+"<a href='#'>"+"<img src='../images/x_106506.png' width='12px' height='11px'>"+"</a>"+"</span>";
        }
        $('.selected').html(txt);
        $('.selected > span > a > img').click(function(){
            var text = $(this).parent().parent().text();
            $(this).parent().parent().remove();
            for(var i=0; i<chkbox.length; i++){
                if(chkbox[i].value==text){ 
                    chkbox[i].checked=false; 
                }
            }    
        });
    });
    //초기화 버튼
    $(".button").click(function(){
        $('input[name="subType2"]').removeAttr('checked');
        $('.selected').html("");
    });

    $(".detailCon .conInfo .colorBox span").mouseover(function(){
        //console.log("in");
        var path = $(this).attr("title");
        console.log(path);
        var thisParent = $(this).parent().parent().parent().prev() ;
        console.log(thisParent);
        thisParent.children().children().attr("src",function(){
            return path;
        });
    });
    /* sort 정렬 */ 
    $(".totalView").click(function(){
        $('.detailContentWrap1').css('display','block');
        $('.detailContentWrap2').css('display','block');
        $('.detailContentWrap3').css('display','block');
        $('.detailContentWrap4').css('display','block');
    });
    $(".newProduct").click(function(){
        $('.detailContentWrap1').css('display','none');
        $('.detailContentWrap2').css('display','none');
        $('.detailContentWrap3').css('display','block');
        $('.detailContentWrap4').css('display','none');
        $('.detailContentWrap3 > .detailCon:nth-of-type(1)').css('display','block');
        $('.detailContentWrap3 > .detailCon:nth-of-type(2)').css('display','none');
        $('.detailContentWrap3 > .detailCon:nth-of-type(3)').css('display','none');
        $('.detailContentWrap3 > .detailCon:nth-of-type(4)').css('display','none');
    });
    $(".hot").click(function(){
        $('.detailContentWrap1').css('display','none');
        $('.detailContentWrap2').css('display','none');
        $('.detailContentWrap3').css('display','block');
        $('.detailContentWrap4').css('display','none');
        $('.detailContentWrap3 > .detailCon:nth-of-type(1)').css('display','none');
        $('.detailContentWrap3 > .detailCon:nth-of-type(2)').css('display','block');
        $('.detailContentWrap3 > .detailCon:nth-of-type(3)').css('display','none');
        $('.detailContentWrap3 > .detailCon:nth-of-type(4)').css('display','none');    
    });
    $(".lowPrice").click(function(){
        $('.detailContentWrap1').css('display','none');
        $('.detailContentWrap2').css('display','none');
        $('.detailContentWrap3').css('display','block');
        $('.detailContentWrap4').css('display','none');
        $('.detailContentWrap3 > .detailCon:nth-of-type(1)').css('display','none');
        $('.detailContentWrap3 > .detailCon:nth-of-type(2)').css('display','none');
        $('.detailContentWrap3 > .detailCon:nth-of-type(3)').css('display','block');
        $('.detailContentWrap3 > .detailCon:nth-of-type(4)').css('display','none');    
    });
    $(".highPrice").click(function(){
        $('.detailContentWrap1').css('display','none');
        $('.detailContentWrap2').css('display','none');
        $('.detailContentWrap3').css('display','block');
        $('.detailContentWrap4').css('display','none');
        $('.detailContentWrap3 > .detailCon:nth-of-type(1)').css('display','none');
        $('.detailContentWrap3 > .detailCon:nth-of-type(2)').css('display','none');
        $('.detailContentWrap3 > .detailCon:nth-of-type(3)').css('display','none');
        $('.detailContentWrap3 > .detailCon:nth-of-type(4)').css('display','block');    
    });
    
});

$(document).ready(function(){
    
    $(".colorBox > ul > li").click(function(){

        if($(".colorBox > ul > li").hasClass("checkedCol")) {
            $(".colorBox > ul > li").removeClass("checkedCol");
        }
        $(this).addClass('checkedCol');
    });


});

$(document).ready(function(){
    $(".colorBox > input:checkBox").on('click',function(){
        
        //이미지 경로를 가져온다.
        // var a = jQuery('.conImage > a > img').attr("src");
        var img = $(this).parent().parent().parent().prev(".conImage").children().children();
        var name = $(this).parent().parent().next(".productName").children().children().text();
        //스타일속성 밖에 못가져옴
        var col = $(this).prev().children(".checkedCol").children("span").attr("style");
        var colchk = $(this).prev().children(".checkedCol")
        var pri = $(this).parent().parent().next().next(".price").children().text();
        
        if(colchk.length){
            var eachProduct = document.createElement("li");
            eachProduct.setAttribute("class","eachProduct");


            //navConImage 생성
            var navConImage = document.createElement("div");
            navConImage.setAttribute("class", "navConImage");
            var navConImage = document.createElement("div");
            navConImage.setAttribute("class", "navConImage");
            var a1 = document.createElement("a");
            a1.setAttribute("href", "#");         
            var img1 = document.createElement("img");
            img1.setAttribute("class", "eachImg");
            img1.setAttribute("src","");


            //navConInfo 생성
            var navConInfo = document.createElement("div");
            navConInfo.setAttribute("class", "navConInfo");
            var navColor = document.createElement("div");
            navColor.setAttribute("class", "navColor");
            var colorBox = document.createElement("div");
            colorBox.setAttribute("class", "colorBox");
            var eachCol1 = document.createElement("span");
            eachCol1.setAttribute("id", "eachCol1");
            var a2 = document.createElement("a");
            a2.setAttribute("href", "#");
            var del = document.createElement("a");
            del.setAttribute("class", "del");
            del.setAttribute("href", "javascript:;");

            var navProductName = document.createElement("div");
            navProductName.setAttribute("class","navProductName");
            var a3 = document.createElement("a");
            a3.setAttribute("href", "#");
            var span = document.createElement("span");
            

            var navPrice = document.createElement("div");
            navPrice.setAttribute("class","navPrice");
            var prod = document.createElement("span");
            prod.setAttribute("class", "prod selectproduct_price");
            var div = document.createElement("div");
            var inputNumber = document.createElement("input");
            inputNumber.setAttribute("class", "inputNumber inp");
            inputNumber.setAttribute("type", "text");
            inputNumber.setAttribute("value", "1");
            var count = document.createElement("div");
            count.setAttribute("class", "count");
            var img2 = document.createElement("img");
            img2.setAttribute("class", "up");
            img2.setAttribute("src", "../images/icon_quantity_up.gif");
            var img3 = document.createElement("img");
            img3.setAttribute("class", "down");
            img3.setAttribute("src", "../images/icon_quantity_down.gif");
            
            //navConImage
            eachProduct.appendChild(navConImage);
            navConImage.appendChild(a1);
            a1.appendChild(img1);

            //navConInfo
            eachProduct.appendChild(navConInfo);
            navConInfo.appendChild(navColor);
            navColor.appendChild(colorBox);
            colorBox.appendChild(eachCol1);
            eachCol1.appendChild(a2);
            colorBox.appendChild(del);
            del.innerHTML="삭제";

            navConInfo.appendChild(navProductName);
            navProductName.appendChild(a3);
            a3.appendChild(span);
            
            navConInfo.appendChild(navPrice);
            navPrice.appendChild(prod);
            //원글자?
            navPrice.appendChild(div);
            div.appendChild(inputNumber);
            div.appendChild(count);
            count.appendChild(img2);
            count.appendChild(img3);


            var b = $(img).attr("src");
            jQuery(".product_all:last-child").find(".eachImg").attr("src",b);
            $(".navProductName > a > span").html(name);
            $(".navPrice > span ").html(pri);


            $(".product_all").append(eachProduct);
            
        }
        else{
            alert("색상을 추가해주세요")
            $(this).attr("checked", false);
            
        }
        
    })
})


