
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
            $('.detailContentWrap1').css('display','block');
            $('.detailContentWrap2').css('display','none');
            $('.selected').html("");
        }else if(chkValue=='2'){
            $('#type .fashion').css('display','none');
            $('#type .cosmetic').css('display','block');
            $('input[name="type1"]').removeAttr('checked');
            $('input[name="subType1"]').removeAttr('checked');
            $('#subType1').css('display','none');
            $('#subType2').css('display','block');
            $('#subType1 div').css('display','none');
            $('.detailContentWrap1').css('display','none');
            $('.detailContentWrap2').css('display','block');
            $('.selected').html("");
        }
    });
    /* subType에 대한 js */
    $('input[name=type1]').on('click',function(){
        var chkValue = $('input[name=type1]:checked').val();
        $('#subType1 .menu3').css('display','block');
        $('input[name="subType1"]').removeAttr('checked');
        $('.detailContentWrap2').css('display','none');
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

    
});



