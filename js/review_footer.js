/* test1 */

$(document).ready(function(){

    /* pagination__button--number 페이지 이동 */ 
    var nowPage2=1;// 번호(숫자) 클릭으로 시작할 경우(변수)  
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

    var nowPage=1; //다음버튼 클릭으로 시작할 경우(변수)
    const MAX_NUM = 9;
    // start of 다음, 이전 버튼 기능 (안영우코드)
  /* pagination__button--next 다음버튼 */
    $('.pagination__button--next').click(function(){ 
      if(nowPage2!=1){      
        if(nowPage2!=MAX_NUM){ //숫자로 페이지 이동 후 움직인 후 다음버튼을 이동할 경우
          $('#btn'+nowPage2).removeClass('pagination__button--active');
          nowPage2++;
          //console.log(nowPage2);
          $('#btn'+nowPage2).addClass('pagination__button--active');
          $('.pagination__button--prev').removeClass('pagination__button--disabled');
        }          
        if(nowPage2==9){
          $('.pagination__button--next').addClass('pagination__button--disabled');
        }
      }
      else{ //다음버튼으로 페이지 이동경우
        if(nowPage!=MAX_NUM){
          $('#btn'+nowPage).removeClass('pagination__button--active');
          nowPage++;
          //console.log(nowPage);
          $('#btn'+nowPage).addClass('pagination__button--active');
          $('.pagination__button--prev').removeClass('pagination__button--disabled');
        }          
        if(nowPage==9){
          $('.pagination__button--next').addClass('pagination__button--disabled');
        }
      }
    });
/* pagination__button--prev 이전버튼 */ 
    $('.pagination__button--prev').click(function(){ 
      if(nowPage2!=1){
        if(nowPage2!=1){
          $('.pagination__button--prev').removeClass('pagination__button--disabled');
          $('#btn'+nowPage2).removeClass('pagination__button--active');
          nowPage2--;
          //console.log(nowPage2);
          $('#btn'+nowPage2).addClass('pagination__button--active');   
          $('.pagination__button--next').removeClass('pagination__button--disabled');     
        }        
        if(nowPage2==1){
          $('.pagination__button--prev').addClass('pagination__button--disabled');
        }
      }      
      else{
        if(nowPage!=1){
          $('.pagination__button--prev').removeClass('pagination__button--disabled');
          $('#btn'+nowPage).removeClass('pagination__button--active');
          nowPage--;
          //console.log(nowPage);
          $('#btn'+nowPage).addClass('pagination__button--active');   
          $('.pagination__button--next').removeClass('pagination__button--disabled');     
        }        
        if(nowPage==1){
          $('.pagination__button--prev').addClass('pagination__button--disabled');
        }
      }        
    });

});


