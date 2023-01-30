const features = (gsap) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".background__features",
      scrub: true,
      // markers: true,
      start: "top 50%",
      end: "top -30%",
    },
  });

  tl.from(".features__love__the", {
    opacity: 0,
    x: 400,
    duration: 10,
  });
  tl.from(".features__love__features", {
    opacity: 0,
    x: -400,
    duration: 10,
  });

  tl.from(".features__love__adolphe", {
    opacity: 0,
    x: 400,
    duration: 10,
  });

  tl.from(
    ".loves",
    {
      opacity: 0,
      x: -400,
      duration: 10,
    },
    "<"
  );

  tl.from([".features__text", ".features__sapphire"], {
    y: -100,
    opacity: 0,
    duration: 10,
  });
};

export default features;
