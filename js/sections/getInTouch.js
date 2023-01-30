const getInTouch = (gsap) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".goToConcerts__join",
      scrub: true,
      // markers: true,
      start: "top 50%",
      end: "top 0%",
    },
  });

  tl.from(".ticket--1", {
    y: 20,
    opacity: 0,
    duration: 2,
  });

  tl.from(".ticket--2", {
    y: 20,
    opacity: 0,
    duration: 3,
  });
  tl.from(".ticket--3", {
    y: 20,
    opacity: 0,
    duration: 4,
  });
};

export default getInTouch;
