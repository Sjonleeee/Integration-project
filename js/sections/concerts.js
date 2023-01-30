const concerts = (gsap) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".baritonBtn",
      scrub: true,
      //   markers: true,
      start: "top 30%",
      end: "top -20%",
    },
  });
  tl.from(".concerts__title", {
    opacity: 0,
    x: 400,
    duration: 5,
  });
  tl.from(".concert__text", {
    opacity: 0,
    x: -400,
    duration: 5,
  });
};

export default concerts;
