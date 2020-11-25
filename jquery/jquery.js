// ready
$(()=>{
    // $('.box').css({color:"red"});
    $('.box').on('click', ()=>{
        $('.box').text("change text")
        $('.box').css({background:"red"})
    });

    $('.box2').on({
        mouseenter: ()=>{
            $('.box2').css({background:"red"});
        },
        mouseleave: ()=>{
            $('.box2').css({background:"green", border:"5px solid red"});
        }
    });
});
