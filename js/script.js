$(document).ready(function(){
  $('.slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  autoplaySpeed: 2000,
  });
});
 
$(document).ready(function(){
  $('.slider1').slick({
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  autoplaySpeed: 2000,
  });
});
$(document).ready(function(){
  $('.slider2').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  autoplaySpeed: 2000,
  });
});
 
$(document).ready(function(){
  $('.slider3').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  autoplaySpeed: 1500,
  });
});
 
$(document).ready(function(){
  $('.slider4').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  autoplaySpeed: 2000,
  });
});
$(document).ready(function(){
  $('.slider5').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  autoplaySpeed: 2000,
  });
});
 




  function updateCard(idNum, available, total) {
    const percentage = (available / total) * 100;
    const fillElement = document.getElementById(`fill-${idNum}`);
    const countElement = document.getElementById(`count-${idNum}`);
    if (fillElement && countElement) {
      fillElement.style.width = percentage + '%';
      countElement.innerText = available;
    }
  }


  function startTimer(duration, displayId) {
    let timer = duration;
    const container = document.getElementById(displayId);
    if (!container) return;

    setInterval(function () {
      let days = parseInt(timer / (60 * 60 * 24), 10);
      let hours = parseInt((timer % (60 * 60 * 24)) / (60 * 60), 10);
      let minutes = parseInt((timer % (60 * 60)) / 60, 10);
      let seconds = parseInt(timer % 60, 10);

  
      if(container.querySelector('.days')) container.querySelector('.days').textContent = days;
      if(container.querySelector('.hours')) container.querySelector('.hours').textContent = hours;
      if(container.querySelector('.minutes')) container.querySelector('.minutes').textContent = minutes;
      if(container.querySelector('.seconds')) container.querySelector('.seconds').textContent = seconds;

      if (--timer < 0) timer = 0;
    }, 1000);
  }

 
  window.onload = function () {
   
    updateCard(1, 250, 500); 
    updateCard(2, 120, 500); 
    updateCard(3, 400, 500); 
    updateCard(4, 50, 500);  
    updateCard(5, 250, 500);
    updateCard(6, 250, 500);
    updateCard(7, 250, 500);
    updateCard(8, 250, 500);
    updateCard(9, 250, 500);

 
    const secondsInADay = 23932800;
    startTimer(secondsInADay, 'timer1');
    startTimer(secondsInADay, 'timer2');
    startTimer(secondsInADay, 'timer3');
    startTimer(secondsInADay, 'timer4');
    startTimer(secondsInADay, 'timer5');
    startTimer(secondsInADay, 'timer6');
    startTimer(secondsInADay, 'timer7');
    startTimer(secondsInADay, 'timer8');
  };

