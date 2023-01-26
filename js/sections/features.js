const features = (gsap) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".background__features",
      scrub: true,
      // markers: true,
      start: "top 30%",
      end: "top -20%",
    },
  });

  tl.from(".features__love__the", {
    x: 400,
    duration: 10,
  });
  tl.from(".features__love__features", {
    x: -400,
    duration: 10,
  });

   tl.from(".features__love__adolphe", {
     x: 400,
     duration: 10,
   });

  tl.from(".loves", {
    x: -400,
    duration: 10,
  });

  tl.from([".features__text", ".features__sapphire"], {
    y: -100,
    opacity: 0,
    duration: 80,
  });


};

export default features;
