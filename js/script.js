$(".submenu").hide();
$(".menu>li").mouseover(function(){
  $(this).children(".submenu").stop().slideDown();
})
$(".menu>li").mouseout(function(){
  $(this).children(".submenu").stop().slideUp();
})

$(".sitemap_bg").hide();
$(".gnb>li:nth-child(2)").click(function(){
  $(".sitemap_bg").slideDown();
})
$(".close").click(function(){
  $(".sitemap_bg").slideUp();
})


// 윈도우 크기에 따라서 적용하려고 (992px 이하에서만)
let windWidth = $(window).outerWidth();

if(windWidth <= 992){
  $(".sitemap_bg").addClass("mobile");
  $(".mobile .s_submenu").hide();
  $(".mobile .sitemap>li").click(function(){
    $(this).children(".s_submenu").slideToggle();
    $(this).siblings().children(".s_submenu").slideUp();
    $(this).toggleClass("site_toggle");
    $(this).siblings().removeClass("site_toggle");
  })
} 
$(window).resize(function(){ /* 윈도우 사이즈가 바뀔때마다 새로고침 */
  location.reload();
})