$(()=>{
    $('.btn-show').on('click', ()=>{
        $('.child1').show();
    });
    $('.btn-hide').on('click', ()=>{
        $('.child1').hide();
    });
    $('.btn-toggle').on('click', ()=>{
        $('.child1').toggle();
    });

    
    $('.btn-fadein').on('click', ()=>{
        $('.child2').fadeIn();
    });
    $('.btn-fadeout').on('click', ()=>{
        $('.child2').fadeOut();
    });
    $('.btn-fadetoggle').on('click', ()=>{
        $('.child2').fadeToggle();
    });

    $('.btn-slideup').on('click', ()=>{
        $('.child3').slideUp();
    });
    $('.btn-slidedown').on('click', ()=>{
        $('.child3').slideDown();
    });
    $('.btn-slidetoggle').on('click', ()=>{
        $('.child3').slideToggle();
    });
    
    $('.btn-right').on('click', ()=>{
        $('.child4').animate({
            left:'200px'
        });
    });
    $('.btn-bottom').on('click', ()=>{
        $('.child4').animate({
            top:'150px'
        });
    });
    $('.btn-bgcolor').on('click', ()=>{
        $('.child4').stop().animate({
            'background-color': '#00FFFF'
        });
    });

    $('.btn-start').on('click', ()=>{
        $('.child5').css({
            'background-color' : '#00ff00',
            'box-shadow' : '5px 5px 5px gray'
        });
        $('.child5').animate({width:'300px'}, 500);
        $('.child5').animate({'font-size':'30px'}, 500);
        $('.child5').animate({'margin-left':'30px'}, 500);
        $('.child5').animate({height:'0'}, 500, ()=>{
            alert('animation complete')
        });
    });

    // $('.box').animate({}, 3000, ()=>{});
    // duration : msContentScript(millisecond) : 1/1000 sec => 1sec = 1000millsec

    $('.btn-easing').on('click', ()=>{
        $('.child6').animate({'margin-left':'200px'}, 1000,'easeOutBounce');
    });
});