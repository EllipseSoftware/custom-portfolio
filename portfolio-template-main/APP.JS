const soundcloud = document.querySelector('.sound-cloud');
const off = document.querySelector('#off');
const on = document.querySelector('#on');
const myAudio = document.querySelector('#myAudio');

off.addEventListener('click', () => soundTrack('off'));
on.addEventListener('click', () => soundTrack('on'));

const soundTrack = (soundState) => {
    if(soundState ==='off'){
        on.style.display ='block';
        off.style.display ='none';
        soundcloud.style.color = "#08fdd8"
        myAudio.play();
    }
    else if(soundState ==='on'){
        on.style.display ='none';
        off.style.display ='block';
        soundcloud.style.color = "#f50057"
        myAudio.pause();
    }
    
}
// play music functionaly

const btnBars = document.querySelector('.bars');
const btnTimes = document.querySelector('.times');
const sidenav = document.querySelector('.aside');

btnBars.addEventListener('click' , () => myfunc('open'));
btnTimes.addEventListener('click' , () => myfunc('close'));

const myfunc = (navcondition) => {
    if(navcondition === 'open'){
        sidenav.classList.add('show-nav');
        btnTimes.style.display = "block";
        btnBars.style.display = "none";
    }
    else if(navcondition === 'close'){
        sidenav.classList.remove('show-nav');
        btnTimes.style.display = "none";
        btnBars.style.display = "block";
    }
    
}

// javascirpt functionality ends here 
$(document).ready(function (){
    if(!$("#mycanvas").tagcanvas({
        textColour:"#00fdd8",
        outlineColour: "transparent",
        reverse:true,
        depth: 0.8,
        maxspeed: 0.05,
        wight:true,
    }, 
    "tags")){
        //something went wrong hide the canvas container,
        $("#mycanvascontainer");
    }
})
// contect section funtionally starts here ..//
// const nameinput = document.querySelector('.home')
// const emailinput = document.querySelector('.email')
// const subjectinput = document.querySelector('.subject')
// const textareainput = document.querySelector('.textarea')


// const contectform = document.querySelector('.contact-form')

// contectform.addEventListener("submit" ,(evt) => {
//     evt.preventDefault()
//     ValidateInput()
// })
// const ValidateInput = () => {
//     let email = emailinput.value
//     let textarea = textareainput.value

//     if(!email && !textarea){
//    setError() 

//     }
// }


// const setError = (input) => {
//     if{inputclassListcontains("success")}{
//         input.classList.remove()
//     }

// }
// const setSuccess = () =>{

// }


// contact section funtionally end  here ...//




// hcvhks



window.onload = function () {
    Particles.init({
      selector: ".background"
    });
  };
  const particles = Particles.init({
    selector: ".background",
    color: ["#03dac6", "#ff0266", "#000000"],
    connectParticles: true,
    responsive: [
      {
        breakpoint: 768,
        options: {
          color: ["#faebd7", "#03dac6", "#ff0266"],
          maxParticles: 43,
          connectParticles: false
        }
      }
    ]
  });
  
  class NavigationPage {
    constructor() {
      this.currentId = null;
      this.currentTab = null;
      this.tabContainerHeight = 70;
      this.lastScroll = 0;
      let self = this;
      $(".nav-tab").click(function () {
        self.onTabClick(event, $(this));
      });
      $(window).scroll(() => {
        this.onScroll();
      });
      $(window).resize(() => {
        this.onResize();
      });
    }
  
    onTabClick(event, element) {
      event.preventDefault();
      let scrollTop =
        $(element.attr("href")).offset().top - this.tabContainerHeight + 1;
      $("html, body").animate({ scrollTop: scrollTop }, 600);
    }
  
    onScroll() {
      this.checkHeaderPosition();
      this.findCurrentTabSelector();
      this.lastScroll = $(window).scrollTop();
    }
  
    onResize() {
      if (this.currentId) {
        this.setSliderCss();
      }
    }
  
    checkHeaderPosition() {
      const headerHeight = 75;
      if ($(window).scrollTop() > headerHeight) {
        $(".nav-container").addClass("nav-container--scrolled");
      } else {
        $(".nav-container").removeClass("nav-container--scrolled");
      }
      let offset =
        $(".nav").offset().top +
        $(".nav").height() -
        this.tabContainerHeight -
        headerHeight;
      if (
        $(window).scrollTop() > this.lastScroll &&
        $(window).scrollTop() > offset
      ) {
        $(".nav-container").addClass("nav-container--move-up");
        $(".nav-container").removeClass("nav-container--top-first");
        $(".nav-container").addClass("nav-container--top-second");
      } else if (
        $(window).scrollTop() < this.lastScroll &&
        $(window).scrollTop() > offset
      ) {
        $(".nav-container").removeClass("nav-container--move-up");
        $(".nav-container").removeClass("nav-container--top-second");
        $(".nav-container-container").addClass("nav-container--top-first");
      } else {
        $(".nav-container").removeClass("nav-container--move-up");
        $(".nav-container").removeClass("nav-container--top-first");
        $(".nav-container").removeClass("nav-container--top-second");
      }
    }
  
    findCurrentTabSelector(element) {
      let newCurrentId;
      let newCurrentTab;
      let self = this;
      $(".nav-tab").each(function () {
        let id = $(this).attr("href");
        let offsetTop = $(id).offset().top - self.tabContainerHeight;
        let offsetBottom =
          $(id).offset().top + $(id).height() - self.tabContainerHeight;
        if (
          $(window).scrollTop() > offsetTop &&
          $(window).scrollTop() < offsetBottom
        ) {
          newCurrentId = id;
          newCurrentTab = $(this);
        }
      });
      if (this.currentId != newCurrentId || this.currentId === null) {
        this.currentId = newCurrentId;
        this.currentTab = newCurrentTab;
        this.setSliderCss();
      }
    }
  
    setSliderCss() {
      let width = 0;
      let left = 0;
      if (this.currentTab) {
        width = this.currentTab.css("width");
        left = this.currentTab.offset().left;
      }
      $(".nav-tab-slider").css("width", width);
      $(".nav-tab-slider").css("left", left);
    }
  }
  
  new NavigationPage();
  /* Credit and Thanks:
  Matrix - Particles.js;
  SliderJS - Ettrics;
  Design - Sara Mazal Web;
  Fonts - Google Fonts
  */
//  

$(document).ready(function(){

  $('.buttons').click(function(){

       $(this).addClass('active').siblings().removeClass('active');

      var filter = $(this).attr('data-filter')

      if(filter == 'all'){
          $('.image').show(400);
      }else{
          $('.image').not('.'+filter).hide(200);
          $('.image').filter('.'+filter).show(400);
      }

  });

   $('.gallery').magnificPopup({

     delegate:'a',
      type:'image',
      gallery:{
         enabled:true
       }

  });

});