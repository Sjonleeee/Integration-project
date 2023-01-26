const sectionThree = (gsap) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".cutted__background",
      scrub: true,
      // markers: true,
      start: "top 20%",
      end: "bottom 0%",
    },
  });

  gsap.from(".flowers", {
    scale: 1.1,
    duration: 0.6,
    yoyo: true,
    repeat: -1,
  });

  tl.from(".sectionThree__adolpheSax", {
    x: -400,
    duration: 10,
  });

  tl.from(".flowers", {
    opacity: 0,
    duration: 10
  });

  tl.to(".head__adolphe", {
    x: 380,
    duration: 5,
  });

  tl.to(".saxophone", {
    x: -380,
    duration: 5,
  });

  tl.from(".sectionThree__sapphire", {
    x: 400,
    duration: 10,
  });
};

export default sectionThree;
