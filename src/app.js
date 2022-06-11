// =====================
// Start
// =====================
// import { gsap, ScrollTrigger, MotionPathPlugin } from "gsap";


const init = () => {
    gsap.to(".field-one", {
    duration: .5, 
    delay: .5, 
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    ease: Power2
    }
  ) 
  
  gsap.from(".start-title", {
    delay: 1.3,
    duration: .5,
    yPercent: 100,
    ease: "power4"
  });
  
  gsap.to(".field-one", {
    duration: .5, 
    delay: 2.3, 
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    ease: Power2
  })
  
  gsap.to(".field-two", {
    duration: .5, 
    delay: 2.3, 
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    ease: Power2
  })
  
  gsap.to(".field-two", {
    delay: 2.8, 
    duration: .5,
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
  })
  gsap.to(".start", {
    delay: 2.8, 
    duration: .5,
    height: "0vh"
  })
  }
  
  
  window.addEventListener("load", init)
  
  // =====================
  // Hover H1
  // =====================
  
  let logo = document.querySelector('.logo');
  let disapearOne = document.querySelector('.disapear-one');
  let letterL = document.querySelector('.l');
  let disapearTwo = document.querySelector('.disapear-two');
  let balk = document.querySelector('.balk');
  
  logo.addEventListener('mouseover', () => {
      window.requestAnimationFrame(startAnimation)
  });
  
  const startAnimation = () => {
      disapearTwo.style.animation = 'hide 0.4s 0.1s linear forwards';
      disapearOne.style.animation = 'hide 0.4s linear forwards';
      letterL.style.animation = 'toleft 0.1s .3s linear forwards';
      balk.style.animation = 'balktoleft 0.3s 0.1s linear forwards';
  }
  
  logo.addEventListener('mouseleave', () => {
      cancelAnimationFrame(startAnimation);
      letterL.style.animation = 'reversetoleft 0.3s linear forwards';
      balk.style.animation = 'reversebalktoleft 0.3s linear forwards';    
      disapearOne.style.animation = 'reversehide 0.3s linear forwards';
      disapearTwo.style.animation = 'reversehide 0.3s linear forwards';
  });
  
  // =====================
  // Change color navbar
  // =====================
  
  const sectionProject = document.querySelector('.section-project');
  const nav = document.querySelector('.nav');
  const links = document.querySelectorAll('.nav-a');
  const linksBorder = document.querySelectorAll('.nav-li');
  const hamburgerLines = document.querySelectorAll('.line-hamburger');
  let toggleColorHeader = false;
  
  function changeColorNavbar () {
    toggleColorHeader = !toggleColorHeader;
        if(toggleColorHeader){
          logo.style.color = 'black';
          balk.style.backgroundColor = 'black';
          Array.from(linksBorder).map(link => link.style.borderColor = 'black');
          Array.from(hamburgerLines).map(line => line.style.backgroundColor = 'black');
          Array.from(links).map(link => link.style.color = 'black');
        } else {
          logo.style.color = 'white';
          balk.style.backgroundColor = 'white';
          Array.from(linksBorder).map(link => link.style.borderColor = 'white');
          Array.from(hamburgerLines).map(line => line.style.backgroundColor = 'white');
          if(window.innerWidth > 480){
          Array.from(links).map(link => link.style.color = 'white');
          }
        }
  }
  
  gsap.registerPlugin(ScrollTrigger);
  
  setTimeout(() => {
    gsap.to("nav", {
      scrollTrigger: {
        trigger: ".section-project",
        start: "-50px top",
        end: `${sectionProject.offsetHeight + 120}px top`,
        onToggle: () => changeColorNavbar(),
        // markers: true
      }
    })
  }, 5000)
  
  // =====================
  // Hamburger menu
  // =====================
  const content = document.querySelector('main')
  const hamburger = document.querySelector('.hamburger-lines');
  const hamburgerX = document.querySelector('.x-lines');
  const linksHB = document.querySelectorAll('.hb-nav-a');
  let hamburgerToggle = false;
  
  const showHamburger = () => {
    if(hamburgerToggle) {
      gsap.to(".nav-hb", {
        transform: "translateX(-100vh)",
        duration: .5
      })
      gsap.to(".nav-hb",{
        display: "none"
      })
      gsap.to(".x-lines",{
        transform: "rotateY(90deg)"
      })
      gsap.to(".line-hb-menu", {
        marginLeft: "0%",
        marginRight: "100%"
      })
      gsap.to(".hb-nav-a", {
        opacity: 0,
        transform: "translateY(3rem)"
      })
    } else if(!hamburgerToggle){
      gsap.timeline()
        .to(".nav-hb",{
          display: "flex"
        })
        .to(".nav-hb", {
          transform: "translateX(0vh)",
          duration: .3
        }, 0)
        .to(".line-hb-menu", {
          marginRight: "0%",
          duration: .2,
          stagger: .08,
          ease: Power2,
        }, .15)
        .to(".line-hb-menu", {
          marginLeft: "100%",
          delay: .3,
          duration: .2,
          stagger: .08,
          ease: Power2,
        },">")
        .to(".hb-nav-a", {
          opacity: 1,
          transform: "translateY(0rem)",
          duration: .3,
          ease: Power2,
          stagger: .1
        }, 0.4)
        .to(".x-lines",{
          transform: "rotateY(0deg)",
          delay: .3,
          duration: .3
        }, 1);
     
    }
    hamburgerToggle = !hamburgerToggle;
  }
  
  
  
  hamburger.addEventListener('click', showHamburger);
  hamburgerX.addEventListener('click', showHamburger);
  Array.from(linksHB).map(link => link.addEventListener('click', showHamburger) );
  // =====================
  // sun animation
  // =====================
  
  
  gsap.registerPlugin(MotionPathPlugin);
  
  setTimeout(() => {
    gsap.to(".circle-one",
  {duration: 5,
    scrollTrigger: {
          trigger: ".circle-one",
          start: "top 100px",
          end: "+=1500",
          scrub: true
          // markers: true
        },
    motionPath: {
      path: ".sun-path",
      align: ".sun-path",
      alignOrigin: [0.5, 0.5],}
  });
  },5000);
  
  // =====================
  // Arrow Project to show details
  // =====================
  
  const projectDetails = document.querySelectorAll('.project-details');
  const arrow = document.querySelectorAll('.project-title-arrow');
  const projectDetailsAnimationOptions = {
    duration: 300,
    iterations: 1,
    easing: 'ease-in',
    fill: "forwards"
    };
  
  let toggleDetails = [false, false, false, false];
  
  const handleClickProject = (id) => {
    if(!toggleDetails[id]){
      showDetails(id)
    }else{
      hideDetails(id)
    }
    toggleDetails[id] = !toggleDetails[id]
  };
  
  const showDetails = (id) => {
    Array.from(arrow)[id].animate(
      [
        { transform: 'rotate(0deg)' },
        { transform: 'rotate(180deg)' }
      ], projectDetailsAnimationOptions
    );
  
    Array.from(projectDetails)[id].animate(
      [
        { maxHeight: '0px' },
        { maxHeight: '1000px' }
      ], projectDetailsAnimationOptions
    );
  }
  
  const hideDetails = (id) => {
    Array.from(arrow)[id].animate([
      { transform: 'rotate(180deg)' },
      { transform: 'rotate(360deg)' }
    ], projectDetailsAnimationOptions);
  
    Array.from(projectDetails)[id].animate(
      [
        { maxHeight: '1000px' },
        { maxHeight: '0px' }
      ], projectDetailsAnimationOptions
    );
  }
  
  // =====================
  // Carousel
  // =====================
  
  const nextKochi = document.querySelector('.kochi-carousel-button-next');
  const prevKochi = document.querySelector('.kochi-carousel-button-prev');
  const nextMosch = document.querySelector('.mosch-carousel-button-next');
  const prevMosch = document.querySelector('.mosch-carousel-button-prev');
  const nextBike = document.querySelector('.bike-carousel-button-next');
  const prevBike = document.querySelector('.bike-carousel-button-prev');
  const nextLast = document.querySelector('.last-carousel-button-next');
  const prevLast = document.querySelector('.last-carousel-button-prev');
  
  
  const moveCarousel = (itemClassName, direction) => {
      var items = document.getElementsByClassName(itemClassName);
      totalItems = items.length,
      slide = 0,
      moving = true,
      direct = direction;
  
      function setActiveSlide(items){
          Array.from(items).forEach((item, index) => {
              if (item.className.includes('active')){
                 slide = index;
              }
          })};
  
      function moveNext() {
          // Check if moving
       if (!moving) {
         // If it's the last slide, reset to 0, else +1
         if (slide === (totalItems - 1)) {
           slide = 0;
         } else {
           slide++;
         }
         // Move carousel to updated slide
         moveCarouselTo(slide);
       }
      }
  
        // Previous navigation handler
    function movePrev() {
      // Check if moving
      if (!moving) {
        // If it's the first slide, set as the last slide, else -1
        if (slide === 0) {
          slide = (totalItems - 1);
        } else {
          slide--;
        }
              
        // Move carousel to updated slide
        moveCarouselTo(slide);
      }
    }
  
        function disableInteraction() {
      // Set 'moving' to true for the same duration as our transition.
      // (0.5s = 500ms)
      moving = true;
      // setTimeout runs its function once after the given time
      setTimeout(function(){
        moving = false
      }, 500);
    }
  
    function moveCarouselTo(slide) {
      // Check if carousel is moving, if not, allow interaction
      if(!moving) {
        // temporarily disable interactivity
        disableInteraction();
        // Update the "old" adjacent slides with "new" ones
        var newPrevious = slide - 1,
            newNext = slide + 1,
            oldPrevious = slide - 2,
            oldNext = slide + 2;
        // Test if carousel has more than three items
        if ((totalItems - 1) > 3) {
          // Checks and updates if the new slides are out of bounds
          if (newPrevious <= 0) {
            oldPrevious = (totalItems - 1);
          } else if (newNext >= (totalItems - 1)){
            oldNext = 0;
          }
          // Checks and updates if slide is at the beginning/end
          if (slide === 0) {
            newPrevious = (totalItems - 1);
            oldPrevious = (totalItems - 2);
            oldNext = (slide + 1);
          } else if (slide === (totalItems -1)) {
            newPrevious = (slide - 1);
            newNext = 0;
            oldNext = 1;
          }
          // Now we've worked out where we are and where we're going, 
          // by adding/removing classes we'll trigger the transitions.
          // Reset old next/prev elements to default classes
          items[oldPrevious].className = "carousel-photo " + itemClassName;
          items[oldNext].className = "carousel-photo " + itemClassName;
          // Add new classes
          items[newPrevious].className = "carousel-photo " + itemClassName + " prev";
          items[slide].className = "carousel-photo " + itemClassName + " active";
          items[newNext].className = "carousel-photo " + itemClassName + " next";
        }
      }
    }
  
      function checkDirection() {
          if(direction === "forward"){
           moveNext()
          }else{
          movePrev()
      }
  }
          
    function initCarousel() {
      moving = false;
      setActiveSlide(items);
      checkDirection();
     }
  
   initCarousel();
  
  }
  
  
  nextKochi.addEventListener("click", () => moveCarousel('carousel-photo-kochi', 'forward'));
  prevKochi.addEventListener("click", () => moveCarousel('carousel-photo-kochi', 'backward'));
  
  nextMosch.addEventListener("click", () => moveCarousel('carousel-photo-mosch', 'forward'));
  prevMosch.addEventListener("click", () => moveCarousel('carousel-photo-mosch', 'backward'));
  
  nextBike.addEventListener("click", () => moveCarousel('carousel-photo-bike', 'forward'));
  prevBike.addEventListener("click", () => moveCarousel('carousel-photo-bike', 'backward'));
  
  nextLast.addEventListener("click", () => moveCarousel('carousel-photo-last', 'forward'));
  prevLast.addEventListener("click", () => moveCarousel('carousel-photo-last', 'backward'));
  
  
  // =====================
  // Hover Contact
  // =====================
  let contactOne = document.querySelector('.contact-one')
  let contactTwo = document.querySelector('.contact-two')
  let contactTitle = document.querySelector('#contact-one-title');
  let contactBack = document.querySelector('.contact-form-back')
  let firstArrow = document.querySelector('#first-arrow');
  let secondArrow = document.querySelector('#second-arrow');
  let thirdArrow = document.querySelector('#third-arrow');
  const contactAnimationOptions = {
    duration: 750,
    easing: 'ease',
    fill: "forwards",
    iterations: 1
  };
  
  let toggle = false;
  
  const showArrow = () => {
      firstArrow.style.visibility = 'visible';
      setTimeout(() => {
          secondArrow.style.visibility = 'visible';
      },100);
      setTimeout(() => {
          thirdArrow.style.visibility = 'visible';
      }, 200);
      contactOne.style.animation = 'changeBG 1s both'
  }
  
  const hideArrow = () => {
      if(!toggle){
      firstArrow.style.visibility = 'hidden';
      setTimeout(() => {
          secondArrow.style.visibility = 'hidden';
      },100);
      setTimeout(() => {
          thirdArrow.style.visibility = 'hidden';
      }, 200);
      contactOne.style.animation = 'reverseBG 1s both'
  }
  }
  
  const showSecondField = () => {
    contactOne.animate([
      { transform: 'translateX(0%)' },
      { transform: 'translate(-100%)' }
    ], contactAnimationOptions);
  
    contactTwo.animate([
      { transform: 'translateX(100%)' },
      { transform: 'translate(0%)' }
    ], contactAnimationOptions);
    }
  
  
  const showFirstField = () => {
    contactOne.animate([
      { transform: 'translateX(-100%)' },
      { transform: 'translate(0%)' }
    ], contactAnimationOptions);
  
    contactTwo.animate([
      { transform: 'translateX(0%)' },
      { transform: 'translate(100%)' }
    ], contactAnimationOptions);
  }
  
  contactTitle.addEventListener('mouseover', showArrow);
  contactTitle.addEventListener('mouseout', hideArrow);
  contactTitle.addEventListener('click', showSecondField);
  contactBack.addEventListener('click', showFirstField);
  
  
  
  