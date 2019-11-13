/* test1 */

$(document).ready(function(){

    /* 현재 URL주소 알기 */
    //var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;
    //var newURL2 = window.location.pathname;
    var newURL2 = window.location.pathname;
    console.log(newURL2);
    //console.log(newURL2.lastIndexOf(".")-1);
    console.log(newURL2.substring(newURL2.indexOf(".")-1 , newURL2.indexOf("_")+1));
    //console.log(newURL2.substr(newURL2.lastIndexOf(".")-1, 1));

    /*
    * nowPage 다음버튼 클릭으로 시작할 경우(변수)
    * nowPage2 번호(숫자) 클릭으로 시작할 경우(변수)
    * newURL2 로 번호를 받기때문에 1113 기준으로 변수 하나로 통일
    */

    //var nowPage=newURL2.substr(newURL2.lastIndexOf(".")-1, 1); //다음버튼 클릭으로 시작할 경우(변수)
    var nowPage2=newURL2.substr(newURL2.lastIndexOf(".")-1, 1);// 번호(숫자) 클릭으로 시작할 경우(변수)
    // console.log("nowPage : "+nowPage);
    console.log("nowPage2 --------: "+nowPage2);
    const MAX_NUM = 9;
/*test1
    if(nowPage2==1){
      console.log("첫번쨰"); 
      $('a.pagination__button--number').removeClass('pagination__button--active'); 
      $('a#btn'+newURL2).addClass('pagination__button--active');
    }else if(nowPage2==2){
      console.log("두번째");
    }else if(nowPage2==3){
      console.log("세번째");
    }else if(nowPage2==4){
      console.log("네번째");
    }else if(nowPage2==5){
      console.log("오번째");
    }
    */
    /*test2
    switch(newURL2){
      case 1: 
          break;
      case 2:
          $('a.pagination__button--number').removeClass('pagination__button--active'); 
          $('a#btn'+newURL2).addClass('pagination__button--active'); break;
      case 3:
          $('a.pagination__button--number').removeClass('pagination__button--active'); 
          $('a#btn'+newURL2).addClass('pagination__button--active'); break; 
      case 4:
          $('a.pagination__button--number').removeClass('pagination__button--active'); 
          $('a#btn'+newURL2).addClass('pagination__button--active'); break;
      case 5:
          $('a.pagination__button--number').removeClass('pagination__button--active'); 
          $('a#btn'+newURL2).addClass('pagination__button--active'); break;
      case 6:
          $('a.pagination__button--number').removeClass('pagination__button--active'); 
          $('a#btn'+newURL2).addClass('pagination__button--active'); break;
      case 7:
          $('a.pagination__button--number').removeClass('pagination__button--active'); 
          $('a#btn'+newURL2).addClass('pagination__button--active'); break;
      case 8:
          $('a.pagination__button--number').removeClass('pagination__button--active'); 
          $('a#btn'+newURL2).addClass('pagination__button--active'); break;
      case 9:
          $('a.pagination__button--number').removeClass('pagination__button--active'); 
          $('a#btn'+newURL2).addClass('pagination__button--active'); break;     
    }*/
  
    /* pagination__button--number 페이지 이동 색칠 */ 
    $('.pagination__button--number').click(function(){
      //console.log($(this).text());
      $('a.pagination__button--number').removeClass('pagination__button--active')
      $(this).addClass('pagination__button--active');
      nowPage2 = $(this).text();
      //console.log(nowPage2);
      if(nowPage2!=1)
        $('.pagination__button--prev').removeClass('pagination__button--disabled'); 
      else
        $('.pagination__button--prev').addClass('pagination__button--disabled'); 
      if(nowPage2!=9)
        $('.pagination__button--next').removeClass('pagination__button--disabled'); 
      else
        $('.pagination__button--next').addClass('pagination__button--disabled'); 
    });

    // start of 다음, 이전 버튼 기능 (안영우)
  /* pagination__button--next 다음버튼 */
    // $('.pagination__button--next').click(function(){ 
    //   if(nowPage2!=1){      
    //     if(nowPage2!=MAX_NUM){ //숫자로 페이지 이동 후 움직인 후 다음버튼을 이동할 경우
    //       $('#btn'+nowPage2).removeClass('pagination__button--active');
    //       nowPage2++;

    //       $('#btn'+nowPage2).addClass('pagination__button--active');
    //       $('.pagination__button--prev').removeClass('pagination__button--disabled');

    //     }          
    //     if(nowPage2==9){
    //       $('.pagination__button--next').addClass('pagination__button--disabled');
    //     }
    //   }
    //   else{ //
        
    //     if(nowPage!=MAX_NUM){
    //       $('#btn'+nowPage).removeClass('pagination__button--active');
    //       nowPage++;
    //       //console.log(nowPage);
    //       $('#btn'+nowPage).addClass('pagination__button--active');
    //       $('.pagination__button--prev').removeClass('pagination__button--disabled');
    //       //location.href = "application_photo"+nowPage+".html";
    //     }          
    //     if(nowPage==9){
    //       $('.pagination__button--next').addClass('pagination__button--disabled');
    //     }
    //   }
    // });
/* pagination__button--prev 이전버튼 색칠 */ 
    $('.pagination__button--prev').click(function(){ 
      if(nowPage2!=1){
        if(nowPage2!=1){
          $('.pagination__button--prev').removeClass('pagination__button--disabled');
          $('#btn'+nowPage2).removeClass('pagination__button--active');
          nowPage2--;
          $('#btn'+nowPage2).addClass('pagination__button--active');   
          $('.pagination__button--next').removeClass('pagination__button--disabled');     
        }        
        if(nowPage2==1){
          $('.pagination__button--prev').addClass('pagination__button--disabled');
        }
      }      
      else{
        if(nowPage2!=1){
          $('.pagination__button--prev').removeClass('pagination__button--disabled');
          $('#btn'+nowPage2).removeClass('pagination__button--active');
          nowPage2--;
          $('#btn'+nowPage2).addClass('pagination__button--active');   
          $('.pagination__button--next').removeClass('pagination__button--disabled');     
        }        
        if(nowPage2==1){
          $('.pagination__button--prev').addClass('pagination__button--disabled');
        }
      }        
    });
    // 다음버튼 색칠
    $('.pagination__button--next').click(function(){ 
      if(nowPage2!=1){      
        if(nowPage2!=MAX_NUM){ //숫자로 페이지 이동 후 움직인 후 다음버튼을 이동할 경우
          $('#btn'+nowPage2).removeClass('pagination__button--active');
          nowPage2++;
          $('#btn'+nowPage2).addClass('pagination__button--active');
          $('.pagination__button--prev').removeClass('pagination__button--disabled');
        }          
        if(nowPage2==9){
          $('.pagination__button--next').addClass('pagination__button--disabled');
        }
      }
      else{ //
        if(nowPage2!=MAX_NUM){
          $('#btn'+nowPage2).removeClass('pagination__button--active');
          nowPage2++;
          $('#btn'+nowPage2).addClass('pagination__button--active');
          $('.pagination__button--prev').removeClass('pagination__button--disabled');
          console.log(nowPage2);
        }          
        if(nowPage2==9){
          $('.pagination__button--next').addClass('pagination__button--disabled');
        }
      }
    });

    // 페이지이동을 시켜주는 부분
    $('.pagination__button').click(function(){
      //alert($('.pagination__button--active').text());
      var testTxt = $('.pagination__button--active').text();
      if(newURL2.substring(newURL2.indexOf(".")-1 , newURL2.indexOf("_")+1)=="photo"){
        //alert("photo");
        var urlTxt = "./application_photo"+testTxt+".html";
      }
      else if(newURL2.substring(newURL2.indexOf(".")-1 , newURL2.indexOf("_")+1)=="posts"){
        //alert(posts);
        var urlTxt = "./application_posts"+testTxt+".html";
      }
      console.log(urlTxt);
      location.href=urlTxt;
    });
});