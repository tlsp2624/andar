// @gnb스크롤 했을때
$(window).scroll(function(){
  curr=$(this).scrollTop();

  if (curr > 0) {
    $('.header').addClass('fix')
  } else {
    $('.header').removeClass('fix')
  }
})

$('.header .group-nav .btn-all').click(function(){
  $('.header .group-nav').toggleClass('show');
  $('.header .group-nav .bottom-area').slideToggle()
})

// @사이드 메뉴나오게
$('.header .btn-menu').click(function(){
  $('.side-menu').addClass('active');
  $('body').addClass('hidden');
})
$('.dimmed').click(function(){
  $('.side-menu').removeClass('active');
  $('body').removeClass('hidden');
})

// @사이드 메뉴 서브 메뉴 나오게
$('.side-menu .menu-item').click(function(){  
  
  if ($(this).hasClass('on')) {
    $(this).removeClass('on').children('.sub').slideUp()
  } else {
    $(this).addClass('on').children('.sub').slideDown()
  }
})

// @사이드 메뉴 close 버튼
$('.login .close-btn').click(function(e){
  e.preventDefault();
  $('.side-menu').removeClass('active');
  $('body').removeClass('hidden');
})

// @검색 클릭했들 때
$('.header .btn-search').click(function(){
  $('.header .search-wrap').addClass('on')
})
$('.search-wrap .btn-close').click(function(){
  $('.header .btn-search').addClass('on')
})


// @상단 배너영역
const banner = new Swiper('.swiper.banner', {
  effect: 'fade',
  autoplay:{
    delay: 3000,
  },
  loop: true,
})

// @visual 영역
const mainSlide = new Swiper('.sc-visual .swiper', {
  effect: 'fade',
  autoplay:{
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".pagination",
    clickable: true,
  },
  loop: true,
})

// @best영역
$('.title-list li a').click(function(e){
  e.preventDefault();

  const tabName = $(this).attr('data-alt')

  $('.title-list li a').removeClass('on')
  $(this).addClass('on')

  $(tabName).addClass('on').siblings().removeClass('on')
})

// @recommend영역
const recommendSlide = new Swiper('.sc-recommend .swiper', {
  pagination: {
    el: ".pagination",
    clickable: true,
  },
})

// @category 영역
const categorySlide = new Swiper('.sc-category .swiper',{
  slidesPerView:2.2,
  spaceBetween:10,
  freeMode:true, //부드럽게 넘어가기
})


// @상단이동 버튼
let lastScroll = 0;

$(window).scroll(function(){
  curr=$(this).scrollTop();
  if (curr < lastScroll) {
    $('.fix-btns').addClass('show')
  } else {
    $('.fix-btns').removeClass('show')    
  }
  lastScroll = curr;
})

$('.fix-btns').click(function(){
  window.scrollTo({top:0, behavior:"smooth"})
})
