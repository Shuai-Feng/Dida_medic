function interanimate(obj,interval){
    var num=0;
    var timer=setInterval(() => {
    console.log(num);
    $(obj[num]).fadeIn();
    num++;
    if(num==obj.length){
        clearInterval(timer);
    }
}, interval);
}
    $(function(){
        $('a.totop').hide();
        $('a.totop').click(function(){
            $('html,body').animate({scrollTop: '0px'}, 1000);
        });
    });
$(window).scroll(function(){
    if($(window).scrollTop()>150){
       $('a.totop').fadeIn(300);
    //    $('a.totop').click(function(){$('html,body').animate({scrollTop: '0px'}, 1000)});

    }else{
       $('a.totop').hide();
    }
});
