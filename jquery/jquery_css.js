$(()=>{
    $('.btn-exec-css').on('click', () => {
        $('.box1').css({
            width:'300px',
            height:'100px',
            background:'skyblue'
        });
    });

    $('.btn-fallback-css').on('click', () => {
        $('.box1').css({
            width:'auto',
            height:'100px',
            background:'initial'
        });
    });

    $('.btn-addclass').on('click', ()=>{
        $('.box2').addClass('box-style');
    });
    $('.btn-removeclass').on('click', ()=>{
        $('.box2').removeClass('box-style');
    });
    
});