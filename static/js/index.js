// 展示下拉导航

$('.w-nav-button').click(function(){
   if($('.w-nav-button').hasClass('w--open')) {
    $('.w-nav-button').removeClass('w--open')
    $('.w--nav-menu-open').css({
        'webkitTransform':'translateY(-1000px)',
        'transform': 'translateY(-1000px)'
    })
   } else {
    $('.w-nav-button').addClass('w--open')
    $('.w--nav-menu-open').css({
        'webkitTransform':'translateY(0px)',
        'transform': 'translateY(0px)'
    })
   }
});

//点击详情特效
$('.hover-overlay').mouseenter(function() {
    $('.hover-icon').css({
        'opacity':1,
        'transform': 'scaleX(1) scaleY(1) scaleZ(1)'
    })
})
$('.hover-overlay').mouseleave(function() {
    $('.hover-icon').css({
        'opacity':0,
        'transform': 'scaleX(0.01) scaleY(0.01) scaleZ(0.01)'
    })
})

