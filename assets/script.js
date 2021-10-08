gsap.registerPlugin(ScrollTrigger)

let container = document.getElementById("container")

gsap.to(container, {
  xPercent: -510,
  ease: "none",
  scrollTrigger: {
    trigger: container,
    pin: true,
    scrub: 1,
    snap:false,
    end: () => "+=" + container.offsetWidth
  }
})

