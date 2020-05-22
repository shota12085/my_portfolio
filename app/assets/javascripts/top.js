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

