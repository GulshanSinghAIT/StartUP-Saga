import './style.css'

const navBtn = document.querySelector('#menu');
const menuBar = document.querySelector('[role="menuBar"]');


navBtn.addEventListener('click', () => {
    menuBar.classList.toggle('hidden');
    menuBar.classList.toggle('flex');
  }) 



  const countDownClock = (number = 100, format = 'seconds') => {
  
    const d = document;
    const daysElement = d.querySelector('.days');
    const hoursElement = d.querySelector('.hours');
    const minutesElement = d.querySelector('.minutes');
    const secondsElement = d.querySelector('.seconds');
    let countdown;
    convertFormat(format);
    
    
    function convertFormat(format) {
      switch(format) {
        case 'seconds':
          return timer(number);
        case 'minutes':
          return timer(number * 60);
          case 'hours':
          return timer(number * 60 * 60);
        case 'days':
          return timer(number * 60 * 60 * 24);             
      }
    }
  
    function timer(seconds) {
      const now = Date.now();
      const then = now + seconds * 1000;
  
      countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
  
        if(secondsLeft <= 0) {
          clearInterval(countdown);
          return;
        };
  
        displayTimeLeft(secondsLeft);
  
      },1000);
    }
  
    function displayTimeLeft(seconds) {
      daysElement.textContent = Math.floor(seconds / 86400);
      hoursElement.textContent = Math.floor((seconds % 86400) / 3600);
      minutesElement.textContent = Math.floor((seconds % 86400) % 3600 / 60);
      secondsElement.textContent = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
    }
  }
  
  
  /*
    start countdown
    enter number and format
    days, hours, minutes or seconds
  */
  countDownClock(50, 'days');




  const question = document.getElementsByClassName('question');
  const answer = document.getElementsByClassName('answer');
  const len = question.length
  
  for( let i=0 ; i < len ; i++){
      question[i].addEventListener('click', function(){
          answer[i].classList.toggle('hidden')
          TransitionEvent
      });
  }

  const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      if (entry.isIntersecting) {
        entry.target.classList.add('shower')
      }
      else{
        entry.target.classList.remove('shower')
      }
    })
  })
  const hiddenElements = document.querySelectorAll('.hidder')
  hiddenElements.forEach((el)=>observer.observe(el))













  