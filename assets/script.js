
//HORIZONTAL SCROLL
// gsap.registerPlugin(ScrollTrigger);
// const sections = document.querySelectorAll(".block");
// const scrollContainer = document.querySelector(".panel2");
// const snapBy = 1 / (sections.length - 1);
// const snap = gsap.utils.snap(snapBy);

// const scrollTween = gsap.to(sections, {
//     xPercent: -100 * (sections.length - 1),
//     ease: "none"
// });

// const horizontalScroll = ScrollTrigger.create({
//     animation: scrollTween,
//     trigger: scrollContainer,
//     pin: true,
//     scrub: 1,
//     end: () => "+=" + scrollContainer.offsetWidth,
//     snap: {
//         duration: 0.5,
//         delay: 0.0,
//         ease: "none",
//         inertia: false,
//         snapTo: (value, self) => {
//             let snapped = snap(value);
//             if (snapped > value === self.direction > 0) {
//                 return snapped;
//             }
//             return snapped + (self.direction > 0 ? snapBy : -snapBy);
//         }
//     }
// });

// total scroll amount divided by the total distance that the sections move gives us the ratio we can apply to the pointer movement so that it fits.

// var dragRatio = scrollContainer.offsetWidth / (window.innerWidth * (sections.length - 1));
// console.log(dragRatio);
// var drag = Draggable.create(".proxy", {
//     trigger: scrollContainer,
//     type: "x",
//     onPress() {
//         this.startScroll = horizontalScroll.scroll();
//     },
//     onDrag() {
//         horizontalScroll.scroll(this.startScroll - (this.x - this.startX) * dragRatio);
//     }
// })[0];




// TEST

// gsap.registerPlugin(ScrollTrigger);
// var allSections = document.querySelectorAll('.block');

// gsap.to(allSections, {
//     xPercent: -100 * (allSections.length - 1),
//     ease: "none",
//     scrollTrigger: {
//       trigger: ".horizontal-container",
//       pin: true,
//       start: "top top",
//       scrub: 1,
//       snap: false,
//       // base vertical scrolling on how wide the container is so it feels more natural.
//       end: () => "+=" + document.querySelector(".horizontal-container").offsetWidth
//     }
//   });



var controller = new ScrollMagic.Controller();

var tl = new TimelineMax();

var elementWidth = document.getElementById('container').offsetWidth;

var width = window.innerWidth - elementWidth;

var duration = elementWidth / window.innerHeight * 100;

var official = duration + '%';

tl
.to('.container', 5, {x: width, ease: Power0.easeNone});

var scene1 = new ScrollMagic.Scene({
    triggerElement: '.container',
    triggerHook: 0,
    duration: official
})
.setPin('.container')
.setTween(tl)
.addTo(controller);

console.log(elementWidth);