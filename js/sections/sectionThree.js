const sectionThree = (gsap) => {
  const mm = gsap.matchMedia();
  mm.add(
    {
      isMobile: "(max-width: 390px)",
      isIpad: "(min-width: 834px)",
      isDesktop: "(min-width: 1512px)",
    },
    (context) => {
      const { isMobile, isIpad, isDesktop } = context.conditions;
      // Hier moet content
    }
  );
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".cutted__background",
      scrub: true,
      // markers: true,
      start: "top 30%",
      end: "bottom -15%",
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
    duration: 10,
  });

  tl.to(".head__adolphe", {
    x: 300,
    duration: 5,
  });

  tl.to(".saxophone", {
    x: -300,
    duration: 5,
  });

  tl.from(".sectionThree__sapphire", {
    x: 400,
    duration: 10,
  });
};

export default sectionThree;
