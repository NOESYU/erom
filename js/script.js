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


// 슬라이드 스와이퍼
const main = new Swiper(".main .swiper", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".ctrl_box .btns .swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".btn_next",
    prevEl: ".btn_prev",
  },
});
/* pagination 2개 넣으려고 하나 더 넣음 */
const progressBar = new Swiper(".main .swiper", {
  loop: true,
  pagination: {
    /* ctrl_box 안에 2개있으니까 자식으로 접근해야함 */
    el: ".ctrl_box>.swiper-pagination",
    type: "progressbar",
  },
})

main.controller.control = progressBar;