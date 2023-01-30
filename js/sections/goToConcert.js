const goToConcert = (gsap) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".goToConcerts__adolpheAndSapphire",
      scrub: true,
    //   markers: true,
      start: "top 30%",
      end: "top 0%",
    },
  });
  tl.from(".goToConcerts__adolpheAndSapphire", {
    y: -200,
    opacity: 0,
    duration: 5,
  });
  tl.from(".goToConcerts__go", {
    x: -200,
    opacity: 0,
    duration: 5,
  });
  tl.from(".goToConcerts__inTheir", {
    x: 200,
    opacity: 0,
    duration: 5,
  });

  tl.from(".goToConcerts__title__freeTime", {
    x: -200,
    opacity: 0,
    duration: 5,
  });
  tl.from(".goToConcerts__information", {
    y: -50,
    opacity: 0,
    duration: 5,
  });
  gsap.from(".goToConcerts__arrow", {
    scale:1.2,
    y: 10,
    duration: 0.6,
    yoyo: true,
    repeat: -1,
  });
};

export default goToConcert;
