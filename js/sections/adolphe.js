const adolphe = (gsap) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".sectionTwo__adolphe",
      scrub: true,
      // markers: true,
      start: "top 25%",
      end: "center 20%",
    },
  });

  tl.from(".title__name", {
    x: -350,

    duration: 4,
  });
  tl.to(
    ".title__date",
    {
      x: -350,

      duration: 4,
    },
    "<"
  );
  tl.from(".sectionTwo__miniArrowOne", {
    y: -350,

    duration: 6,
  });

  tl.from(
    ".sectionTwo__miniArrowTwo",
    {
      y: -300,
      duration: 5,
    },
    "<"
  );

  tl.from(
    ".sectionTwo__p",
    {
      opacity: 0,
      y: -200,
      duration: 5,
    },
    "<"
  );

  tl.from(".sectionTwo__secretButton", {
    opacity: 0,
    y: -190,
    duration: 8,
  });

  tl.from(".sectionTwo__mannekePis", {
    rotate: 100,
    opacity: 0,
    duration: 8,
  });
};

export default adolphe;
