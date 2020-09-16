
//SLIDER
$(function(){

    var indiceAtual =0;
    var indiceMaximo = $('.slider img').length;
    var delay = 5000;

    initSlider();
    clickSlider();
    function initSlider(){
        for(var i=0;i< indiceMaximo; i++){
            if(i==0){
                $('.bullets_nav').append('<span style="background-color:#003357;"></span>');
            }else{
                $('.bullets_nav').append('<span></span>');
            }
        }
        $('.slider img').eq(0).fadeIn();
        setInterval(function(){
            alternarSlider();
        },delay)
    }
function clickSlider(){
    $('.bullets_nav span').click(function(){
        $('.slider img').eq(indiceAtual).stop().fadeOut(2000);
        indiceAtual =$(this).index();
        $('.slider img').eq(indiceAtual).stop().fadeIn(2000);
        $('.bullets_nav span').css('background-color','#ccc');
        $(this).css('background-color','#003357');
    })
}

    function alternarSlider(){
        $('.slider img').eq(indiceAtual).stop().fadeOut(2000);
        indiceAtual+=1;
        if(indiceAtual == indiceMaximo)
            indiceAtual =0;
            $('.bullets_nav span').css('background-color','#ccc');
            $('.bullets_nav span').eq(indiceAtual).css('background-color','#003357');
        $('.slider img').eq(indiceAtual).stop().fadeIn(2000);
    }
});

