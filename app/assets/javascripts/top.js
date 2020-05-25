window.onload = function(){
  const about = document.getElementById('about')
  about.addEventListener('click',()=>{
    const aboutView = document.getElementById("secondary")
    let rect = aboutView.getBoundingClientRect();
      let position = rect.top; 
    scrollTo(0,position);
  })
  const skill = document.getElementById('skill')
  skill.addEventListener('click',()=>{
    const skillView = document.getElementById("tertiary")
    let rect = skillView.getBoundingClientRect();
      let position = rect.top; 
    scrollTo(0,position);
  })
  const works = document.getElementById('works')
  works.addEventListener('click',()=>{
    const worksView = document.getElementById("quaternary")
    let rect = worksView.getBoundingClientRect();
      let position = rect.top; 
    scrollTo(0,position);
  })
  const contact = document.getElementById('contacts')
  contact.addEventListener('click',()=>{
    const contactView = document.getElementById("contact")
    let rect = contactView.getBoundingClientRect();
      let position = rect.top; 
    scrollTo(0,position);
  })
}

$(function () {
  $('.concept-main').textillate({
    selector: '.texts',	// 要素を指定
    loop: false,	// ループ繰り返し
    minDisplayTime: 2000,	// アニメーションの間隔時間
    initialDelay: 100,	// アニメーション開始までの遅延時間
    autoStart: true,	// アニメーションの自動スタート
    inEffects: [],	// エフェクト開始時のアニメーション設定
    outEffects: [ 'hinge' ],	// エフェクト終了時のアニメーション設定
  
    in: {
      effect: 'fadeInDownBig',	// エフェクトの指定
      delayScale: 1.5,	// 遅延時間の指数
      delay: 200,	// 文字ごとの遅延時間
      sync: false,	// アニメーションをすべての文字に同時に適用
      shuffle: true, // 文字のランダム表示
      reverse: false,	// エフェクトを逆に再生（「sync:true」のときは不可）
      callback: function () {}	// コールバック関数
    },
  
    out: {
      effect: 'hinge',  
      delayScale: 1.5,  
      delay: 50,  
      sync: false,  
      shuffle: false,
      reverse: false,
      callback: function () {}
    },
    callback: function () {},
    type: 'char'
  });
})
// $(function(){
//   $('body').on('mouseover',function(){
//     $(".concept-message").fadeIn(3000);
//   })
// })
$(document).ready(function(){
  $(".concept-message").fadeIn(5000);
})



$(function(){
  $('a[href^="#"]').click(function() {
    const speed = 500;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $('body,html').animate({
      scrollTop: position
    }, speed, 'swing');
    return false;
  });

  $('#secondary').mouseover(function(){
    $('.about__image').addClass('showUp');
    $('.about__contact').addClass('showLast');
  })
  $('#secondary').mouseout(function(){
    $('.about__image').removeClass('showUp');
    $('.about__contact').removeClass('showLast');
  })
  
  $('#tertiary').mouseover(function(){
    $('.list-right').addClass('showRight');
    $('.list-left').addClass('showLeft');
  })
  $('#secondary').mouseover(function(){
    $('.list-right').removeClass('showRight');
    $('.list-left').removeClass('showLeft');
  })
  $('#quaternary').mouseover(function(){
    $('.list-right').removeClass('showRight');
    $('.list-left').removeClass('showLeft');
  })

  $('#quaternary').mouseover(function(){
    $('.collection__list--right').addClass('right_Cross');
    $('.collection__list--left').addClass('left_Cross');
    $('.introduction-left').addClass('rightup_Cross');
    $('.introduction-right').addClass('leftdown_Cross');
  })
  // $('#tertiary').mouseover(function(){
  //   $('.collection__list--right').removeClass('right_Cross');
  //   $('.collection__list--left').removeClass('left_Cross');
  // })
  // $('#contact').mouseover(function(){
  //   $('.collection__list--right').removeClass('right_Cross');
  //   $('.collection__list--left').removeClass('left_Cross');
  // })
  

  $('#js-left').on('click',function(){
    $('.collection__list__introduction--hide').slideToggle(400);
  })
  $('#js-right').on('click',function(){
    $('.collection__list__introduction--hided').slideToggle(400);
  })
})