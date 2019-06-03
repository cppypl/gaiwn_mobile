$(function(){



    //_________________________________________________

    $('.menu_list').click(function(ev){
        $('nav ul').slideToggle()
        ev.stopPropagation();
    })

    $('.heimu').click(function(){
        $('.left_box').animate({'left':'-90%'})
        $('nav ul').slideUp()
        $('.heimu').fadeOut(333)
    })
    $('.m_head').click(function(ev){
        $('.heimu').fadeIn(333)
        $('.left_box').animate({'left':'0'})
        ev.stopPropagation();
        
    })

    $('.toRegister').click(function () {
        $('.login-form').hide()
        $('.register-form').show()
    })
    $('.toLogin').click(function () {
        $('.login-form').show()
        $('.register-form').hide()
    })

    $(' .tabBtn').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        var index=$(' .tabBtn').index(this);
        $('.index_tab li').eq(index).show().siblings().hide()
        
    })

    $('.getCode').click(function(){
        let num = 60;
        console.log($(this).text()=='获取验证码')
        console.log($(this).text())
        if($(this).text()=='获取验证码'){
            alert('已向您发送验证码，请注意查收。')
            this.timer=setInterval(()=>{
                if(num>0){
                    $(this).text(num+'s')
                    num--
                    
                }else{
                    num=60;
                    clearInterval(this.timer)
                    $(this).text('获取验证码')
                }
               
            },1000)
        }
        
    })
    $('.register-form li').click(function(){
        let index = $('.register-form li').index(this);
        $(this).addClass('active').siblings().removeClass('active')
        $('.register-form .tabType').eq(index).show().siblings('.tabType').hide()
        

    })
});



//设置HTML的font-zise
(function (doc, win) {
    var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
      };
   
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
  })(document, window);
  
  


