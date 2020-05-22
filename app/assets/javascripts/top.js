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
    $('.about__introduction').addClass('showIn');
  })
  $('#secondary').mouseout(function(){
    $('.about__image').removeClass('showUp');
    $('.about__introduction').removeClass('showIn');
  })

  
})
$(function () {
  $('.test').textillate({
    selector: '.texts',	// 要素を指定
    loop: false,	// ループ繰り返し
    minDisplayTime: 3000,	// アニメーションの間隔時間
    initialDelay: 100,	// アニメーション開始までの遅延時間
    autoStart: true,	// アニメーションの自動スタート
    inEffects: [],	// エフェクト開始時のアニメーション設定
    outEffects: [ 'hinge' ],	// エフェクト終了時のアニメーション設定
  
    in: {
      effect: 'fadeInLeftBig',	// エフェクトの指定
      delayScale: 1.5,	// 遅延時間の指数
      delay: 100,	// 文字ごとの遅延時間
      sync: false,	// アニメーションをすべての文字に同時に適用
      shuffle: false, // 文字のランダム表示
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

